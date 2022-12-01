//let button = document.querySelector("button");
let form = document.getElementById("lomake");
form.addEventListener("submit", showUsername);

//button.addEventListener("click", showUsername);

/**
 * 
 * @param {SubmitEvent}event 
 */
function showUsername(event){
    event.preventDefault();
    let formData = new FormData(form);
    let username = formData.get("username");
    let h = document.createElement("h3");
    h.textContent = username;
    document.body.appendChild(h);
}