// input from user

let flavour = prompt("Select your flavour, Orange/ Apple/ Mango:");
let Gsize = prompt("What glass size?, Small/ Medium/ Large:");
let xsug = prompt("would you like to have extra sugar, (Yes/No):");
let total_price = 0;

// flavour price
if (flavour == "orange"){
    total_price += 150;
}
else if (flavour == "apple"){
    total_price += 120;
}
else if (flavour == "mango"){
    total_price += 100;
}
else{ 
    console.log("Invalid flavour..");
}

// Glass size
if (Gsize == "small"){
    total_price += 50;
}
else if (Gsize == "medium"){
    total_price += 100;
}
 else if (Gsize == "large"){
    total_price += 150;
}
else{ 
    console.log("Invalid Size..");
}

// extra sugar
if (xsug == "yes"){
    total_price+=20;
}
else if
    (xsug == "no"){
        total_price+=0;
    }
else{
    console.log("invalid sugar choice..")
}

// Calculating Bill
console.log("You Ordered:");
console.log("Flavour: " + flavour);
console.log("Glass Size: " + Gsize);
console.log("Extra Sugar: " + xsug);
console.log("YOUR TOTAL BILL WILL BE: " + total_price);


