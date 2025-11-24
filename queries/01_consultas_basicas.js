// CONSULTAS BÁSICAS - OPERACIONES CRUD
// Tarea 4 - Big Data - UNAD

use cineplus

print("=== CONSULTAS BÁSICAS ===");

// 1. CONSULTA DE SELECCIÓN
print("1. Reseñas de 'Inception':");
db.reviews.find({"movie_title": "Inception"});

// 2. CONSULTA DE INSERCIÓN
print("2. Insertar nueva reseña:");
db.reviews.insertOne({
  "user_id": "user_test",
  "user_name": "Usuario Prueba",
  "movie_title": "Avatar",
  "movie_year": 2009,
  "rating": 5,
  "review_text": "Película de prueba",
  "genres": ["Action", "Adventure"],
  "helpful_votes": 0,
  "timestamp": new Date(),
  "language": "es"
});

// 3. CONSULTA DE ACTUALIZACIÓN  
print("3. Actualizar votos útiles:");
db.reviews.updateOne(
  {"user_id": "user_test"},
  {$set: {"helpful_votes": 10}}
);

// 4. CONSULTA DE ELIMINACIÓN
print("4. Eliminar documento de prueba:");
db.reviews.deleteOne({"user_id": "user_test"});
