console.log('Starting notes.js');

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';  //repare que está retornando uma string  e não um objeto.
};

module.exports.add = (a, b) => {
  return a + b;
};


// module.exports.age = 25;
