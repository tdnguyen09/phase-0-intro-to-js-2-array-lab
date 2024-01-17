// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats;
}
function appendCat(name){
    let newCatsArray = [...cats, name]
    return newCatsArray;
}
function prependCat(name){
    let newCatsArray = [name, ...cats]
    return newCatsArray;
}

function removeLastCat(){
    let newCatsArray = cats.slice(0,2)
    return newCatsArray;
}

function removeFirstCat(){
    let newCatsArray = cats.slice(1)
    return newCatsArray;
}