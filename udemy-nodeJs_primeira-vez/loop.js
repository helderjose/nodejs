loopExample()

function loopExample(){
  console.log(new Date());

  setTimeout(function(){
    loopExample();
  }, 2000);
}
