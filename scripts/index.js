(function () {
  /***** Oferta gastronòmica *****/
  afegeixEsdevenimentCopiaText();
  /***** Reserves *****/
  afegeixEsdevenimentCanviNumeroComensals();
  afegeixEsdevenimentEnviamentFormulari();
  /***** Footer (secció contacte) *****/
  afegeixHoraActual();
})();
/***** Oferta gastronòmica *****/
function afegeixEsdevenimentCopiaText() {
  // Afegeix aquí el teu codi
  const oferta = document.getElementById("oferta");
  addEventListener("copy", (event) => {
    event.preventDefault();
    window.alert(
      "Sol·liciti a info@restaurantorenga.cat l'oferta gastronòmica en format digital i li enviarem un document PDF amb tota la informació."
    );
  });
}
/***** Reserves *****/
function afegeixEsdevenimentCanviNumeroComensals() {
  // Afegeix aquí el teu codi
  const input = document.getElementById("comensals");
  const output = document.getElementById("preuAproximat");
  let result = "";
  input.addEventListener("change", (event) => {
    result = 50 * input.value;
    output.innerHTML = result;
  });
}
function afegeixEsdevenimentEnviamentFormulari() {
  // Afegeix aquí el teu codi
  const formulari = document.getElementById("formulari");
  const menors = document.getElementById("si");
  const sala = document.getElementById("ubicacio");

  formulari.addEventListener("submit", function (event) {
    if (menors.checked && sala.value == "mexic") {
      window.alert(
        "No es pot fer una reserva si hi ha menors de 5 anys i la ubicació triada és la Sala Mèxic ja que no està suficientment habilitada."
      );
      event.preventDefault();
    }
  });
}
/***** Footer (secció contacte) *****/
function afegeixHoraActual() {
  const nouParagraf = document.createElement("p");
  nouParagraf.innerHTML = 'Hora actual: <span id="horaActual"></span>';
  const elementAddress = document.querySelector("address");
  const ultimParagraf = elementAddress.lastElementChild;
  elementAddress.removeChild(ultimParagraf);
  elementAddress.appendChild(nouParagraf);
  elementAddress.appendChild(ultimParagraf);
  setInterval(actualitzaHora, 1000);
}
function actualitzaHora() {
  const data = new Date();
  let hores = data.getHours();
  let minuts = data.getMinutes();
  let segons = data.getSeconds();
  hores = estableixFormatDosDigits(hores);
  minuts = estableixFormatDosDigits(minuts);
  segons = estableixFormatDosDigits(segons);
  document.getElementById("horaActual").innerHTML =
    hores + ":" + minuts + ":" + segons;
}
function estableixFormatDosDigits(valor) {
  // Afegeix aquí el teu codi
  let dosdigits;
  if (valor < 10) {
    dosdigits = "0" + valor;
  } else {
    dosdigits = valor;
  }
  return dosdigits;
}
