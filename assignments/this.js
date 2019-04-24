/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when "this" called it will refer to the window objects.
* 2. Implicit Binding is when function called, whatever before the dot notation is refered as "this".
* 3. Explicit Binding means "this" word is defined in the call, apply and bind methods. 
* 4. New Binding is when constructor function is used to create an object, we use "new" word to call it. Hence "this" word is used to refer the key words in the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function toWalk (miles){
    console.log(this);
    return miles;
};

toWalk(12);

// Principle 2
    
// code example for Implicit Binding

const friuts = {
    name: "Apple",
    price: 52,
    toEat: function() {
        return `I like to eat ${this.name}`;
    }
};

console.log(friuts.toEat());

// Principle 3
    
// code example for New Binding

const Bestcars = function (){
    this.name = "Kia";
    this.model = "Optima";
    this.toDrive = function(){
        console.log(`I love to drive ${this.name} ${this.model}`)
    }
    
};

const car = new Bestcars();
console.log(car.toDrive());

// Principle 4

// code example for Explicit Binding

const gameofthrones = {
    character: "Jon Snow",
    family: "Targaryn and Stark",
    
};

 const sayMytitle = function(){
    console.log(`King of the Iron Throne is ${this.character} because he is ${this.family}`)
};

sayMytitle.call(gameofthrones);
