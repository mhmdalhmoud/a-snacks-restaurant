window.onload = function() {
    // Prompt the user for their name
    let userName = prompt("Please enter your name:");
    if (userName) {
        // alert(`Hello, ${userName}! Welcome to the page.`);
    } else {
        alert("You didn't enter your name.");
    }
    let title = '';
    let gender = prompt("Please enter your gender:");
    if (gender=="male"){
        title='Mr.';
        alert(`Welcom ${title} ${userName}`);}
     else if (gender=="female"){
            title='Ms';
            alert(`Welcom ${title} ${userName}`);}
        else {
             alert("wrong gender");}

    let isOrderConfirmed = confirm("Do you want to order a shawarma, zinger, or burger.");
    
        if (isOrderConfirmed) {
             } else {
                 alert("Your order was canceled.")
             };
             let order = prompt("What would you like to order? Shawarma, Zinger, or Burger?");
         
             if (order === "shawarma" || order === "zinger" || order === "burger") {
                 alert(`You have ordered a ${order}. Thank you!`);
             } else {
                 alert("Invalid order. Please enter Shawarma, Zinger, or Burger.");
             }
             console.log(`${userName} has ordered a ${order}.`);
    }
