const a = [3, 'hello', 77, 90, 'world'];
function check(a, x) {
    for(i=0; i < a.length; i++){
      if (a[i] == x){
        console.log(true);
      }
      else{
        console.log(false);
      }
    }
  }
  check(a, 3)
