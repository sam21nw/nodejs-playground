import fs from "fs";

// type Book = {
//     title: string,
//     author: string,
// };

// const book: Book = {
//     title: "Ego is the Enemy",
//     author: "Ryan"
// };


// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

type User = {
    name: string,
    age: number,
    job: "developer" | "engineer";
};

const dataBuffer = fs.readFileSync("1-json.json", "utf-8");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

const user: User = JSON.parse(dataBuffer);
console.log(user);

user.name = "Dude";
user.age = 35;
user.job = "engineer";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);