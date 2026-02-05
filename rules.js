// Función pura para calcular el nuevo marcador
// Recibe: puntuacionActual (número) y puntosASumar (número)
// Devuelve: el nuevo puntaje total

const calcularNuevoMarcador = (puntuacionActual, puntosASumar) => {
  return puntuacionActual + puntosASumar;
};

module.exports = { calcularNuevoMarcador };
