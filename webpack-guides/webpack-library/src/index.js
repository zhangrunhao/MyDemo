var _ = require('lodash')
var numRef = require('./ref.json')

exports.numToWord = function(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}

exports.wordToNum =  function (word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum
  }, -1)
}


// import _ from 'lodash';
// import numRef from './ref.json';

// export function numToWord(num) {
//   return _.reduce(numRef, (accum, ref) => {
//     return ref.num === num ? ref.word : accum;
//   }, '');
// };

// export function wordToNum(word) {
//   return _.reduce(numRef, (accum, ref) => {
//     return ref.word === word && word.toLowerCase() ? ref.num : accum;
//   }, -1);
// };