// CONSULTAS DE AGREGACIÓN - CINEPLUS

// 1. Promedio de calificaciones por película
db.reviews.aggregate([
    {
        $group: {
            _id: "$pelicula",
            promedio_calificacion: { $avg: "$calificacion" },
            total_resenas: { $sum: 1 }
        }
    },
    {
        $sort: { promedio_calificacion: -1 }
    }
]);

// 2. Top 5 directores mejor calificados
db.reviews.aggregate([
    {
        $group: {
            _id: "$director",
            calificacion_promedio: { $avg: "$calificacion" },
            total_peliculas: { $addToSet: "$pelicula" }
        }
    },
    {
        $project: {
            director: "$_id",
            calificacion_promedio: 1,
            cantidad_peliculas: { $size: "$total_peliculas" }
        }
    },
    {
        $sort: { calificacion_promedio: -1 }
    },
    {
        $limit: 5
    }
]);

// 3. Distribución de calificaciones por género
db.reviews.aggregate([
    {
        $unwind: "$genero"
    },
    {
        $group: {
            _id: {
                genero: "$genero",
                calificacion: "$calificacion"
            },
            cantidad: { $sum: 1 }
        }
    },
    {
        $sort: { "_id.genero": 1, "_id.calificacion": 1 }
    }
]);

// 4. Reseñas por mes y año
db.reviews.aggregate([
    {
        $project: {
            año: { $substr: ["$fecha", 0, 4] },
            mes: { $substr: ["$fecha", 5, 2] },
            pelicula: 1,
            calificacion: 1
        }
    },
    {
        $group: {
            _id: {
                año: "$año",
                mes: "$mes"
            },
            total_resenas: { $sum: 1 },
            promedio_calificacion: { $avg: "$calificacion" }
        }
    },
    {
        $sort: { "_id.año": -1, "_id.mes": -1 }
    }
]);

// 5. Usuarios más activos (más reseñas escritas)
db.reviews.aggregate([
    {
        $group: {
            _id: "$usuario",
            total_resenas: { $sum: 1 },
            promedio_calificacion: { $avg: "$calificacion" }
        }
    },
    {
        $sort: { total_resenas: -1 }
    },
    {
        $limit: 10
    }
]);

// 6. Evolución de calificaciones por año de estreno
db.reviews.aggregate([
    {
        $group: {
            _id: "$ano_estreno",
            promedio_calificacion: { $avg: "$calificacion" },
            total_resenas: { $sum: 1 }
        }
    },
    {
        $match: {
            _id: { $ne: null }
        }
    },
    {
        $sort: { _id: 1 }
    }
]);
