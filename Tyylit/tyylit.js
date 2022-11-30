

function changeColor(){
    let elems = document.querySelectorAll("ul:first-child li");

    for (const elem of elems) {
        elem.classList.toggle("colorful");
        
    }

}

function changeSize(){
    let elems = document.querySelectorAll("li");
    for (const e of elems) {
        if(e.textContent.length < 10){
            e.classList.add("sizeup");
        }    
    }
}
