//what is currying?
//Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.


//normal:
function add (a){
    return function (b){
        return a+b;
    }
}
const ans= add(1)(5);
console.log(ans);

//it's called currying
//Currying:
const add2= a=> b=>a+b;//6

