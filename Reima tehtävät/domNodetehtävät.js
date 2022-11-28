//Basic:
//1. Print the tag name of node with id ”content”.
let print = document.querySelector("#content");
console.log(print);




//2. Print the tag name of first node with class name ”basic”
let first = document.querySelector(".basic");
console.log(first);


//3. Print text content of the first li-element
let content = document.querySelector("ul li");
console.log(content);


//4. Print text content of the last child element of ul (list)
let last = document.querySelector("ul li:last-child");
console.log(last);


//Collections:
//1. Print all node names of body descendants
let all = document.querySelectorAll("body *")
console.log(all);


//2. Print text content of all p elements that are descendants of article element.
let textContent = document.querySelectorAll("article p")
console.log(textContent);


//3. Fill all list items with default text “John Doe”
let fill = document.querySelectorAll("li::after");






//4. Print name of each element inside “content” that has text content longer than 10 characters



