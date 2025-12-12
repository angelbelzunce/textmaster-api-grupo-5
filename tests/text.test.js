// tst/text.test.js
const { reverseText, analyzeText } = require('../src/textmaster');

describe('Funciones auxiliares de texto', () => {
  test('reverseText invierte correctamente', () => {
    expect(reverseText('hola')).toBe('aloh');
  });

  test('analyzeText devuelve estadísticas correctas', () => {
    const result = analyzeText('hola mundo');
    expect(result.length).toBe(10);
    expect(result.word_count).toBe(2);
    expect(result.has_numbers).toBe(false);
  });

  test('analyzeText detecta números correctamente', () => {
    const result = analyzeText('hola 123');
    expect(result.length).toBe(8);
    expect(result.word_count).toBe(2);
    expect(result.has_numbers).toBe(true);
  });
});
