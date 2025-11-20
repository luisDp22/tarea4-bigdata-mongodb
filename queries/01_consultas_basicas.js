# En tu terminal/git bash
mkdir Tarea4-MongoDB
cd Tarea4-MongoDB
mkdir queries data

# Crear el primer archivo
touch queries/01_consultas_basicas.js
// CONSULTAS CRUD BÁSICAS - CINEPLUS

// 1. INSERTAR una nueva reseña
db.reviews.insertOne({
    pelicula: "El Padrino",
    usuario: "cinefilo_2024",
    calificacion: 5,
    resena: "Una obra maestra del cine. Actuaciones impecables.",
    fecha: "2024-01-20",
    genero: ["Drama", "Crimen"],
    director: "Francis Ford Coppola",
    ano_estreno: 1972
});

// 2. CONSULTAR todas las reseñas
db.reviews.find();

// 3. CONSULTAR con formato legible
db.reviews.find().pretty();

// 4. ACTUALIZAR una reseña específica
db.reviews.updateOne(
    { usuario: "cinefilo_2024" },
    {
        $set: {
            calificacion: 4,
            resena: "Excelente pelicula, aunque un poco larga."
        }
    }
);

// 5. ELIMINAR una reseña
db.reviews.deleteOne({ usuario: "cinefilo_2024" });

// 6. CONTAR total de documentos
db.reviews.countDocuments();
       
