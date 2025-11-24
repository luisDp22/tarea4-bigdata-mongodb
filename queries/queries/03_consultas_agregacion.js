// CONSULTAS DE AGREGACIÓN - ANÁLISIS ESTADÍSTICO
// Tarea 4 - Big Data - UNAD

use cineplus

print("=== CONSULTAS DE AGREGACIÓN ===");

// 1. CONTAR - Reseñas por película
print("1. Top películas más reseñadas:");
db.reviews.aggregate([
  {
    $group: {
      _id: "$movie_title",
      total_reviews: { $sum: 1 }
    }
  },
  { $sort: { "total_reviews": -1 } },
  { $limit: 5 }
]);

// 2. PROMEDIAR - Rating promedio por película
print("2. Top películas mejor calificadas:");
db.reviews.aggregate([
  {
    $group: {
      _id: "$movie_title", 
      average_rating: { $avg: "$rating" },
      total_reviews: { $sum: 1 }
    }
  },
  { $sort: { "average_rating": -1 } },
  { $limit: 5 }
]);

// 3. SUMAR - Votos útiles por película
print("3. Top películas con más votos útiles:");
db.reviews.aggregate([
  {
    $group: {
      _id: "$movie_title",
      total_helpful_votes: { $sum: "$helpful_votes" }
    }
  },
  { $sort: { "total_helpful_votes": -1 } },
  { $limit: 5 }
]);

// 4. CONTAR Y PROMEDIAR - Por género
print("4. Estadísticas por género:");
db.reviews.aggregate([
  { $unwind: "$genres" },
  {
    $group: {
      _id: "$genres",
      total_reviews: { $sum: 1 },
      average_rating: { $avg: "$rating" }
    }
  },
  { $sort: { "total_reviews": -1 } }
]);

// 5. ESTADÍSTICAS POR IDIOMA
print("5. Comparación por idioma:");
db.reviews.aggregate([
  {
    $group: {
      _id: "$language",
      total_reviews: { $sum: 1 },
      avg_rating: { $avg: "$rating" },
      total_helpful_votes: { $sum: "$helpful_votes" }
    }
  }
]);
