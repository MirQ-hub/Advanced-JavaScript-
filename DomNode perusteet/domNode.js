function qs(selector){ return document.querySelector(selector);}
//qs=queryselector
//On sama kuin -> let elem = document.querySelector("body");

//eli voit käyttää -> let elem = qs("body")

//tällä vältetään toistoa ja liikaa koodia

function ce(name){ return document.createElement(name);}
// ce = createElement
//On sama kuin ->  let n = document.createElement("p");
//--->  let elem =  ce("p");

//---------------------------------------------------
let elem = document.querySelector("body");

let nimet= ["Mirva", "Anni", "Inkeri", "Liisa"]; 
//hox taulukko luodaan hakasulkeilla! 

for (const nimi of nimet) {
    let n = document.createElement("p");
    n.textContent = nimi;
    elem.appendChild(n);  
}
//käydään lista läpi ja luodaa elementtejä näistä nimistä

//---------------------------------------------------

//elem.remove();
//poistaa minkä tahansa elementin

//let p = document.createElement("p");
//p.textContent = "Tässä on uusi kappale ";

//elem.appendChild(p);
//lisää uuden lapsen, eli kappaleen viimeiseksi lapseksi
 
//Jos haluat luoda toisen uuden kappaleen täytyy koodi ajaa uudelleen eli:

//p = document.createElement("p");
//p.textContent = "Tämä on seuraava uusi kappale";

//elem.appendChild(p);

//elem.innerHTML+=

//--------------------------------------------------


