// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const numeros = [2, 5, 7, 1, 10, 8, 3,6]; // escolha os números que desejar
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))
