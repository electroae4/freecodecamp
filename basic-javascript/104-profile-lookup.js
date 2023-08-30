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
  let contact = false;

  for (let i of contacts) {
    if (i["firstName"] === name) {
      contact = i;
    }
  }

  if (contact) {
    if (contact["firstName"] === name && contact.hasOwnProperty(prop)) {
      return contact[prop];
    }

    if (contact["firstName"] === name && !contact.hasOwnProperty(prop)) {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
  // Only change code above this line
}

lookUpProfile("Akira", "likes");