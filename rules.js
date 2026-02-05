// Autor: Diego
// Fecha: Febrero 2026
// Descripción: Archivo con las reglas del juego
//              contiene funciones puras para la lógica de puntuación
//              Estas funciones son independientes de la interfaz

// ==========================================
// FUNCIÓN: CALCULAR NUEVO MARCADOR
// ==========================================

// ¿Qué es una función pura?
// - No depende de ningún estado externo
// - No modifica ningún dato fuera de sí misma
// - Mismo input SIEMPRE produce mismo output
// - No tiene efectos secundarios (no modifica archivos, no hace fetch, etc.)

// Esta función calcula el nuevo puntaje sumando los puntos anotados
// Parámetros:
//   - puntuacionActual: el puntaje antes de la canasta (número)
//   - puntosASumar: los puntos de la canasta (2 o 3)
// Retorna: el nuevo puntaje total

const calcularNuevoMarcador = (puntuacionActual, puntosASumar) => {
  // Simplemente sumo los puntos al marcador actual
  return puntuacionActual + puntosASumar;
};

// ==========================================
// EXPORTACIÓN
// ==========================================

// module.exports es la forma CommonJS de exportar funciones
// Esto permite que otros archivos usen esta función con require()
module.exports = { 
  // Exporte un objeto con la función
  calcularNuevoMarcador 
};

// NOTA: En un proyecto moderno podría usar:
// export const calcularNuevoMarcador = ...
// Pero para Jest funcionó mejor con CommonJS
