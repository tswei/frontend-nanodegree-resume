var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    function nameArrange(_name) {
        // arranges names as "surname, given-name"
        return _name.split(" ").reverse().join(", ");
    }
    
    // iterates over array to rearrange names
    for (var i=0; i < names.length; i++) {
        names[i] = nameArrange(names[i]);
    }
    
    // sorts and returns rearranged array
    return names.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));