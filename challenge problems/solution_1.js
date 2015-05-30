function getRelationship(x, y) {
    // Your code goes here!
    function checkNumber(p) {
        // checks if p is a number
        if ((typeof p === "number") && Math.floor(p) === p) {
            return true;
        } else {
            return false;
        }
    }
    
    function rejectMessage(n, m) {
        // creates grammatically correct rejection message if n and/or m are not numbers
        var numx = checkNumber(n);
        var numy = checkNumber(m);
        var reject = "Can't compare relationships because ";
        if (numx === false && numy === false) {
            return reject.concat(n, " and ", m, " are not numbers");
        } else if (numx === false) {
            return reject.concat(n, " is not a number");
        } else if (numy === false) {
            return reject.concat(m, " is not a number");
        } else {
            return false;
        }
    }
    
    // returns x and y relationship or rejection message
    var rejection = rejectMessage(x,y);
    if (rejection) {
        return rejection;
    } else if (x > y) {
        return ">";
    } else if (x < y) {
        return "<";
    } else {
        return "=";
    }
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));