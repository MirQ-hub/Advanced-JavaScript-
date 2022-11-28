//1. Lisää sivun loppuun uusi hr-elementti.
//2. Lisää hr-elementin jälkeen h3-otsikkona oma 
//nimesi.
let content = document.querySelector("#content");

let hr= document.createElement("hr");
let h3 = document.createElement("h3");
h3.textContent = "Mirva Väänänen"

content.appendChild(hr);
content.appendChild(h3);

//3. Lisää viikonpäivien perään myös sunnuntai ”su”
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent="Sunnuntai";
ul.appendChild(li);

//content.append(hr, h3);  <---tällä voi antaa useamman elementin jotka lisätään kerralla.

//4. Poista ”turhake” lista-item.
let turha = document.querySelector("ul li:first-child");

turha.remove();


//1. Lisää maanantai listalle. (insertbefore)

//let day = document.querySelector("ul li");

//let monday = document.createElement("Maanantai").firstChild;
//monday.textContent = "maanantai";

//monday.parentElement.insertBefore(ul,li);



//2. Lisää uusi lista item ”välipäivä” ennen sunnuntaita. (insertBefore)


//3. Muokkaa jokainen viikonpäivä näkymään listalla lihavoituna.
let items = document.querySelectorAll("ul:first-child li");

for (item of items) {
    let text = item.textContent;
    item.textContent = "";
    //tyhjentää haetut teksti elementit

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);    
}


//4. Lisää toisen listan ensimmäisen itemin perään uusi itemi, jossa teksti ”World”.
//5. Pohdi miten voisit poistaa class last itemin jälkeen kaikki loput itemit (riippumatta niiden 
//määrästä). Vinkki: nextSibling, null check ja toistorakenne