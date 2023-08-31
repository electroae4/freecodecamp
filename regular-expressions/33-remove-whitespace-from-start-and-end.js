let hello = "   Hello, World!  ";
// let wsRegex = /(^\s*).+(\s*$)/; // Change this line
let wsRegex = /(^\s*)(.+?)(\s*$)/;
let result = hello.replace(wsRegex, "$2"); // Change this line