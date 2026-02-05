// Importo la función que voy a testear
const { calcularNuevoMarcador } = require('./rules.js');

// Test Escenario A: Canasta de 2 puntos
test('Si tengo 10 puntos y anoto una canasta de 2, el resultado debe ser 12', () => {
  const resultado = calcularNuevoMarcador(10, 2);
  expect(resultado).toBe(12);
});

// Test Escenario B: Triple (3 puntos)
test('Si tengo 10 puntos y anoto un triple (3), el resultado debe ser 13', () => {
  const resultado = calcularNuevoMarcador(10, 3);
  expect(resultado).toBe(13);
});
