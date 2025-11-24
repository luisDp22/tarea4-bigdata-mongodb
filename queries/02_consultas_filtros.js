// CONSULTAS CON FILTROS Y OPERADORES
// Tarea 4 - Big Data - UNAD

use cineplus

print("=== CONSULTAS CON FILTROS ===");

// 1. OPERADOR DE COMPARACIÓN
print("1. Reseñas con rating mayor a 4:");
db.reviews.find({"rating": {"$gt": 4}});

// 2. OPERADOR DE ARRAY
print("2. Reseñas de Sci-Fi o Action:");
db.reviews.find({"genres": {"$in": ["Sci-Fi", "Action"]}});

// 3. FILTRO MÚLTIPLE
print("3. Reseñas en español con rating 5:");
db.reviews.find({"language": "es", "rating": 5});

// 4. OPERADOR DE EXISTENCIA
print("4. Reseñas que tienen texto:");
db.reviews.find({"review_text": {"$exists": true, "$ne": ""}});ción 5 y género Drama
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
