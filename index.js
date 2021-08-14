// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //return customerName;
}
//void function - do something but does not return anything 

//console.log(upperCaseCustomerName());


function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

//console.log(overwriteBestCustomer());

const leastFavoriteCustomer = 'billy'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob'
}