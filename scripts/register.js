
//creating the pets
let pet1 = {
    name:"Scooby",
    age:60,
    gender:"Male"
}
let pet2 = {
    name:"Scrappy",
    age:50,
    gender:"Male"
}
let pet3={
    name:"Tweety",
    age:70,
    gender:"Female"
}

let pets = [pet1,pet2,pet3]; // empty array

//pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);

    console.log("We have " + pets.length + " pets");

}

displayNames();