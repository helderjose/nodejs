/*
- Saída da execução:
Starting app
Finishing up
Second setTimeout
Inside of callback
*/


console.log('1 - Starting app');

//registering a callback function.
/*
This is going to be an asynchronous callback which
means that node can do other things while these two seconds are happening.

http://latentflip.com/loupe/
*/
setTimeout(() => {
  console.log('2 - Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('3 - Second setTimeout');
}, 0);

console.log('4 - Finishing up');
