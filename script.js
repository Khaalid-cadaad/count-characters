
function count(character, str) {
    
    if (character.length !== 1) {
        throw new Error("First argument must be a single character.");
    }
    
    
    return str.split(character).length - 1;
}

console.log(count("a","fikircap"));
console.log(count("c","bootcamp"));
console.log(count("o","fikircamp coding bootcamp"));