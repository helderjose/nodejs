/*
- Arrow function não faz bind do this.


- Zero, dois ou mais argumentos, precisa de parênteste ( );
var square = () => x * x;        var sum = (x, y) => x + y;

- Apenas um arqugimento não precisa de parênteses ( );
var square = x => x * x;        var square = (x) => x * x;

- apenas uma instrução não precisa de chaves { }
var square = x => x * x;    var square = x => { x * x };
*/
var square = x => x * x;
// console.log(square(9)); //81

var user = {
  name: 'Andrew',
  // arrow function
  // não faz binding nem pega o arguments keyword
  sayHi: () => {
    console.log("------------------- comeco arrow function -------------------");
    console.log(arguments);   //json com várias propriedades. Global arguments variable for that wrapper function we explored.
    console.log(`Hi. I'm ${this.name}`);    //undefined. Arrow function nao faz bind do this, por isso fica undefined
    console.log("------------------- fim arrow function -------------------");
  },
  // regular function
  sayHiAlt () {
    console.log("+++++++++++++ comeco function +++++++++++++");
    console.log(arguments); //JSON com os argumentos passados
    console.log(`Hi. I'm ${this.name}`);    //Andrew
    console.log("+++++++++++++ fim function +++++++++++++");
  }
};

user.sayHi(); //json com várias propriedades; undefined
// user.sayHi(1, 2, 3);  //json com várias propriedades; undefined

// user.sayHiAlt();  // json vazio;  Hi I'm Andrew.
// user.sayHiAlt(1, 2, 3); //json com os argumentos passados; Andrew

