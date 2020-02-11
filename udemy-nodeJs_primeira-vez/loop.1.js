
var contador = 0;

loopExample();

function loopExample(){
  contador++;

  console.log("contador:", contador);
  if(contador == 3) {
    return
  }

  console.log(new Date());

  setTimeout(function(){
    loopExample();
  }, 2000);
}
