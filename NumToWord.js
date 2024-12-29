window.onload = function() {
    // Prompt the user to enter a number between 1 and 9
    let number = prompt("Please enter a number between 1 and 9:");

    // Convert the input to an integer
    number = parseInt(number);

    // Check the value of the number and display the corresponding word using an alert
    if (number === 1) {
        alert("ONE");
    } else if (number === 2) {
        alert("TWO");
    } else if (number === 3) {
        alert("THREE");
    } else if (number === 4) {
        alert("FOUR");
    } else if (number === 5) {
        alert("FIVE");
    } else if (number === 6) {
        alert("SIX");
    } else if (number === 7) {
        alert("SEVEN");
    } else if (number === 8) {
        alert("EIGHT");
    } else if (number === 9) {
        alert("NINE");
    } else {
        alert("PLEASE TRY AGAIN");
    }
};
