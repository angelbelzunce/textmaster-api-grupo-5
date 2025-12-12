const { reverseText, analyzeText } = require('../src/textmaster');

describe('Funciones de texto', () => {
  test('reverseText invierte correctamente', () => {
    expect(reverseText('hola')).toBe('aloh');
  });

  test('analyzeText devuelve estadísticas correctas', () => {
    const result = analyzeText('hola mundo');
    expect(result.length).toBe(10);
    expect(result.word_count).toBe(2);
    expect(result.has_numbers).toBe(false);
  });
});