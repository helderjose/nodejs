console.log('Starting notes.js');

//estudar melhor essa linha depois, propriedade exports por exemplo
// console.log(module); // json com várias propriedades

// retorna uma string
module.exports.addNote = () => {
  console.log('notes.addNote');
  return 'New note';
};

//soma dois números
module.exports.add = (a, b) => {
  console.log("notes.add")
  return a + b;
};


module.exports.age = 25;

// posso exportar com function também.
// module.exports.addNote2 = function () {
//   //code here
// }
