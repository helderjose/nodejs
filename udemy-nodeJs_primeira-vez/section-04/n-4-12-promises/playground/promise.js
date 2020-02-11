var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // comente e descomente as linhas abaixo para testar os dois cenários.
    resolve('Hey. It worked!');
    // reject('Unable to fulfill promise');
  }, 2500);
});

// message é o retorno da promise "resolve"
// errorMessage é o retorno da promise "reject"
somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
