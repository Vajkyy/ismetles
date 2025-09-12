export default class AdminViragSor {
  #adatObj = {};
  #pElem;

  constructor(adatObj, pElem) {
    this.#adatObj = adatObj;
    this.#pElem = pElem;
    this.megjelenit();
    this.torolGOMB = this.#pElem.querySelector(
      "tr:last-child td:last-child .torol"
    );
  }
  megjelenit() {
    let html = `
            <tr>
                    <td scope="col">${this.#adatObj.id}</td>
                    <td scope="col">${this.#adatObj.nev}</td>
                    <td scope="col">${this.#adatObj.kep}</td>
                    <td scope="col">
                        <button class="torol">❌</button>
                    </td>
                </tr>
        `;
    this.#pElem.insertAdjacentHTML("beforeend", html);
  }
  esemenyKezeles() {
    this.torolGomb.addEventListener("click", () => {
      window.dispatchEvent(
        new CustomEvent("torol", { detail: this.#adatObj.id })
      );
    });
  }
}
