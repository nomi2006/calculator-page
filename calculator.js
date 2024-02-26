let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML =='DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+= e.target.innerHTML;
            input.value = string;
        }
 
    })
})

// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');
// let string = "";
// let arr = Array.from(buttons);

// // Function to check if the input is a valid character for calculations
// function isValidInput(value) {
//   // Valid characters for calculations: numbers, operators (+ - * / .), and ()
//   return !isNaN(value) || ['+', '-', '*', '/', '.', '(' ,')'].includes(value);
// }

// arr.forEach(button => {
//   button.addEventListener('click', (e) => {
//     if (isValidInput(e.target.innerHTML)) {
//       if (e.target.innerHTML == '=') {
//         try {
//           string = eval(string);
//           input.value = string;
//         } catch (error) {
//           input.value = 'Error';
//         }
//       } else if (e.target.innerHTML == 'AC') {
//         string = "";
//         input.value = string;
//       } else if (e.target.innerHTML == 'DEL') {
//         string = string.substring(0, string.length - 1);
//         input.value = string;
//       } else {
//         string += e.target.innerHTML;
//         input.value = string;
//       }
//     }
//   })
// })
