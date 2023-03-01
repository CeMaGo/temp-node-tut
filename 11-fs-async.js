const { readFile, writeFile } = require("fs");
//?readfile is a default async method

// *  a wonderful example of callback hell...nesting a callback in a callback in a callback...
console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next one!");

//Console.log:
//start
// starting the next one!
// Hello this is the firts text file
// done with this task

//! alternatives are Async-Await and promises
