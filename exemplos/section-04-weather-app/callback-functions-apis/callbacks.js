var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});


// // -----------------------------------------
// var getUser = (id, callback) => {
//   var user = {
//     id: id,
//     name: 'Vikram'
//   };
//
//     callback(user);
// };
//
// getUser(31, (userObject) => {
//   console.log(userObject);
// });

/*
setTimeout é um exemplo de callback function, sua definição é
setTimeout(callback, delay);
 */
