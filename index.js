// Code your solutions in this file 

const names = ["Guadalupe", "Ollie", "Aki"]


function writeCards(names) {
    let newArray = []
  
      let i = 0;
      while (i < names.length) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        i++;
        
      
    }
   return newArray;

}


  let t = 10
  

  function countDown(t) {
    while (t >= 0) {
      console.log(t--);
      
    }
  }


