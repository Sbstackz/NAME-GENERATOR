 let array;
let randomValue;
          array = [
             
             
             "king david",
             "lord lucas",
             "emperor michael",
             "lord matheww",
             "SHA rasheed"
         
         
         
         ];

var strOne;
 var strTwo;
 function myFunction(){
      strOne = document.querySelector(".iptOne").value;
       strTwo = document.querySelector(".iptTwo").value;
      console.log(strOne);
       randomValue = array[Math.floor(Math .random() * array.length)];
       var fullName = strOne + strTwo + randomValue;
         document.querySelector(".fiveTarget").innerHTML = fullName;
     
     }
     //var strTwo;
     
     function myLitt(){
         //strTwo = document.querySelector(".iptTwo").value;
         console.log(strTwo);
         
        // document.querySelector(".fiveTarget").innerHTML = toUpper;
          //randomValue = array[Math.floor(Math .random() * array.length)];
    
     
         }
         
         
        
         
         
   
    


         
         