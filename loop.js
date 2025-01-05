// window.onload = function() {
//     // Loop through numbers 0 to 5 and show each in an alert
//     for (let i = 0; i <= 5; i++) {
//         alert(i);
//     }
// };



// let num = prompt("Enter a number from 0-100:");
//     while ( num > 100 ||  num < 0) {
//         alert("error message");
//         num = prompt("Enter a number from 0-100:");
//     }



    let Data = parseInt(prompt("Please enter an integer:"));

    let total = 0;
    
    for (let i = 0; i <= Data; i++) {
      total += i;
    }
    alert(total)
