module.exports = function reverse (n) {
  n = n.toString()
  if (n[0] === '-') return n.split('').reverse().join('').slice(0, -1);
  return n.split('').reverse().join('');
}
