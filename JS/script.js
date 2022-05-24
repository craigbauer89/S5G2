// let arr = [25, 12, 6, 84, 59];
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] > 20) {
//     console.log(arr[i]); // need to set many parameters  for this
//     break;
//     }
// }

// for (const key in arr) {
//     console.log(arr[key]);  // the index of the values in the arry
// }


// for (const ele of arr) {
//     console.log(ele);  // all the vlaues in the array
// }

// arr.forEach(function(ele) {
//     console.log(ele);

// })

// or with arrow funciton - lass writing
// let arrow = ele => console.log(ele);

// or more compact:
// arr.forEach(ele => console.log(ele))


//menu dynamico

// let menu = ['Home', 'About', 'Blog', 'Shop', 'Contact', 'Admin'];

// ul.innerHTML= '<li>' + menu[0] + '</li> '+ '<li> '+ menu[1] + '</li>' + '<li>' + menu[2] + '</li>';
// better:

// for (let i = 0; i<menu.length; i++) {
//     ul.innerHTML += '<li>' + menu[i]+ '</li> '
//     }


// or:

// for (const key in menu) {
//     ul.innerHTML += '<li>' + menu[key]+ '</li> '
// }


// or:

// for (const element of menu) {
//     ul.innerHTML += '<li>' + element+ '</li> '
//     }

// or:

// menu.forEach(ele => ul.innerHTML += '<li><a href=#>' + ele+ '</li> ')


// let arrMod = arr.map(ele => ele * 2);
// let arrFilter = arr.filter(ele => ele > 25);
// let reducearr = arr.reduce((acc, ele) => acc + ele);
// let index = arr.findIndex(ele => ele === 84);
// console.log(arr);
// console.log(arrMod);
// console.log(arrFilter);
// console.log(reducearr);
// console.log(index);

// let menu = ['Home', 'About', 'Blog', 'Shop', 'Contact', 'Admin'];
// let ul =  document.getElementById('menu');

// products.forEach(ele => div.innerHTML += '<div ><h1>Product</h1><p>Description of item and what it does</p>' + ele+ '</li> )

let products = [35, 35, 35]
let div =  document.getElementById('products');
products.forEach(ele => div.innerHTML += '<div ><img src="../img/watch2.jpg" alt="watch"><h1>Product</h1><p>Description of item and what it does</p><span>€' + ele+ '</span><button type="submit" id="pay" onclick="pay()">Buy</button></div>' )

var balance = 100;
document.getElementById('balance').innerHTML = '€' + balance;

function pay() {
    if (balance >= 35) {
    balance = balance - products[1];
    }
    else {
        alert("Insufficent funds")
    }
    document.getElementById('balance').innerHTML = '€' + balance;
}






