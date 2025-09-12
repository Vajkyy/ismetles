import AdminViragok from "./AdminViragok.js";
import Viragok from "./Viragok.js";
import { viragLista } from "./adat.js";

/* feladat: jelenítsük meg kis kártyák formájában a virágok neveit
és képeit
kell:
objektumlista - adat.js
KEPEK mappa
Virág osztály - egyetlen virág megjelenítése
*/
document.getElementById("virag").addEventListener("click", () => {
  new Viragok(viragLista, document.querySelector("article"));
});

window.addEventListener("kivalaszt", (event) => {
  console.log(event.detail);
});
document.getElementById("kezdolap").addEventListener("click", () => {
  new AdminViragok(viragLista, document.querySelector("article"));
});

/* legyen egy admin felület, ahol táblázatosan listázom a virágokat, és ott legyen egy űrlap is, 
ahol új virágot tudok felvinni 
minden virág mellett legyen egy törlés gomb is
osztályok:
AdminViragSor - egyetlen egy virág a táblázatban
AdminViragok - táblázat az összes sorral - ez példányosítja az AdminViragSor-t
main-ben pédányosítjuk az AdminViragok-at

Urlap - itt lenne a felviteli űrlap
*/
