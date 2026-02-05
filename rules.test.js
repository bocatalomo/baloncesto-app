// Autor: Diego
// Fecha: Febrero 2026
// Descripción: Archivo de tests unitarios para rules.js
//              Verifica que la lógica de puntuación funciona correctamente
//              Los tests garantizan que no haya errores en las sumas

// ==========================================
// CONFIGURACIÓN DE JEST
// ==========================================

// Jest es un framework de testing de JavaScript
// test() es la función principal de Jest para escribir pruebas
// expect() se usa para verificar que el resultado es el esperado
// toBe() es un "matcher" que verifica igualdad exacta

// ==========================================
// IMPORTACIÓN DE LA FUNCIÓN A TESTEAR
// ==========================================

// Importo la función que voy a probar
// Uso require() porque estamos usando CommonJS
const { calcularNuevoMarcador } = require('./rules.js');

// ==========================================
// TEST 1: CANASTA DE 2 PUNTOS
// ==========================================

// ¿Qué estamos probando?
// Escenario A: Un jugador tiene 10 puntos y anota una canasta de 2
// Resultado esperado: 12 puntos

// Estructura de un test:
// test('descripción en español', () => { código de prueba });

test('Si tengo 10 puntos y anoto una canasta de 2, el resultado debe ser 12', () => {
  // Llamo a la función con los valores de mi escenario
  const resultado = calcularNuevoMarcador(10, 2);
  
  // Verifico que el resultado sea el esperado
  // expect(resultado).toBe(12) significa:
  // "Espero que resultado SEA IGUAL A 12"
  expect(resultado).toBe(12);
});

// ==========================================
// TEST 2: TRIPLE (3 PUNTOS)
// ==========================================

// ¿Qué estamos probando?
// Escenario B: Un jugador tiene 10 puntos y anota un triple (3)
// Resultado esperado: 13 puntos

test('Si tengo 10 puntos y anoto un triple (3), el resultado debe ser 13', () => {
  // Llamo a la función con los valores de mi escenario
  const resultado = calcularNuevoMarcador(10, 3);
  
  // Verifico que el resultado sea el esperado
  expect(resultado).toBe(13);
});

// ==========================================
// CÓMO EJECUTAR LOS TESTS
// ==========================================

// En la terminal, ejecutar:
// npm test

// Si los tests pasan, se muestra:
// PASS ./rules.test.js
// ✓ Si tengo 10 puntos y anoto una canasta de 2...
// ✓ Si tengo 10 puntos y anoto un triple...
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// Si algún test falla, se muestra:
// FAIL ./rules.test.js
// Y detalles del error

// ==========================================
// POR QUÉ SON IMPORTANTES LOS TESTS
// ==========================================

// 1. Detectan errores automáticamente
// 2. Permiten refactorizar con confianza
// 3. Documentan cómo se usa el código
// 4. Ahorran tiempo probando manualmente
// 5. Garantizan que la lógica funciona
