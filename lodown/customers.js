#!/usr/bin/env node

'use strict';

//var greeting = 'Welcome to Operation Spark';
//console.log(greeting);
var lodown = require("./lodown");
var customers = require("./data/customers.json");


lodown.each(customers, function (customer){
    console.log(customer);
    //print name value    
    // console.log(customer.name);
    //print only first name from name value
    //console.log(customer.name.split(' ')[0]);
    //print customer gender value
    //console.log(customer.gender);
});

lodown.each(customers, function(asdf){console.log(asdf.name)});


function add(a,b) {
    return a + b;
}



var upperCaseNames = lodown.map(customers, function (customer) {
    return customer.name.toUpperCase();
});
console.log(upperCaseNames);

var initials = lodown.map(customers, function(customer) {
    var names = customer.name.split(' ');
   //.charAt same functionality as [0]
    return names[0].charAt(0) + names[1][0];
});
console.log(initials);

console.log(lodown.reduce([1, 2, 3, 4, 5], add, 0));



var oldest = lodown.reduce(customers, function(oldest, next) {
    return oldest.age > next.age ? oldest : next;

    
    
}, customers[0]);
console.log(oldest.name);