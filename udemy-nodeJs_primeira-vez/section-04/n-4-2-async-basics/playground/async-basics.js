/*
- Saída da execução:
Starting app
Finishing up
Second setTimeout
Inside of callback
*/


console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing up');
