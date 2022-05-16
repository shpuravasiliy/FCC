// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let i = 0;
    if (name && prop) {
        while (contacts[i].firstName !== name) {
            i++;
            if (i === contacts.length) return "No such contact"
        }
        return contacts[i].hasOwnProperty(prop) ? contacts[i][prop] : "No such property";
    }
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
