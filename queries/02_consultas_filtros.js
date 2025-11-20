// CONSULTAS CON FILTROS Y OPERADORES - CINEPLUS

// 1. Buscar reseñas con calificación mayor a 4
db.reviews.find({ calificacion: { $gt: 4 } });

// 2. Buscar reseñas de películas de Acción o Ciencia Ficción
db.reviews.find({ 
    genero: { $in: ["Acción", "Ciencia Ficción"] } 
});

// 3. Buscar reseñas entre 2023 y 2024
db.reviews.find({
    fecha: { 
        $gte: "2023-01-01", 
        $lte: "2024-12-31" 
    }
});

// 4. Buscar reseñas que contengan la palabra "excelente" (case insensitive)
db.reviews.find({
    resena: { $regex: /excelente/i }
});

// 5. Buscar películas de un director específico y ordenar por año
db.reviews.find({ 
    director: "Christopher Nolan" 
}).sort({ ano_estreno: 1 });

// 6. Contar reseñas por calificación
db.reviews.aggregate([
    {
        $group: {
            _id: "$calificacion",
            total: { $sum: 1 }
        }
    }
]);

// 7. Buscar reseñas con calificación 5 y género Drama
db.reviews.find({
    $and: [
        { calificacion: 5 },
        { genero: "Drama" }
    ]
});

// 8. Paginación: segunda página de 10 resultados
db.reviews.find()
    .skip(10)
    .limit(10)
    .sort({ fecha: -1 });
