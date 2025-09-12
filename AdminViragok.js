import AdminViragSor from "./AdminViragSor.js";

export default class AdminViragok {
  #lista = [];
  #pElem;
  constructor(lista, pElem) {
    this.#lista = lista;
    this.#pElem = pElem;
    this.megjelenit();
  }
  megjelenit() {
    let html = `<table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nev</th>
                        <th scope="col">Kep</th>
                        </tr>
                    </thead>
                    <tbody>                        
                    </tbody>
                </table>`;
    this.#pElem.insertAdjacentHTML("beforeend", html);
    this.#lista.forEach((element, index) => {
      new AdminViragSor(element, this.#pElem.querySelector("table tbody"));
    });
  }
}
