const add     =(number1,number2)=>  +number1  + +number2;
const subtract=(number1,number2)=>  +number1  - +number2;
const multiply=(number1,number2)=>  +number1  * +number2;
const divide  =(number1,number2)=>  +number1  / +number2;



let input=[];
let var1=0
let index=0;
let total=0;

 

function collectData(){

    const buttons=document.querySelectorAll('.number');
     buttons.forEach((button)=>{

     button.addEventListener('click',()=>{

         var1=button.textContent;
         input.push(var1);

         populateDisplay(var1);

        
    })
    
})
    
}
 

collectData();



function populateDisplay(value){

    const spans=document.querySelectorAll('.data');

    if(index<spans.length){
        spans[index].textContent=value;
        index++;
    }
  
    
}




function  operate(input){
    let [number1,operator,number2]=input;

     if(operator==='+'){ 
        total=add(number1,number2);
    }
     else if(operator==='-'){ 
       total=subtract(number1,number2)
    }
     else if(operator==='*'){
        total=multiply(number1,number2);
    }
     else if (operator==='/'){ 
        total=divide(number1,number2)
    }

    return total;
}


let calculate=document.querySelector('.equal');

calculate.addEventListener('click',()=>{
 let total=operate(input);

// updating the last  span manually
document.querySelector('.total').textContent=total;
})


const clear=document.querySelector('.clear');

clear.addEventListener('click',()=>{
   const spans=document.querySelectorAll('.item');
   spans.forEach((span)=>{
    span.textContent="";
   })

   total=0;
   index=0;
   input=[];
   document.querySelector('.total').textContent="";
})





