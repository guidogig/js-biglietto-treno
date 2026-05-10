const prezzoAlKm = 0.21;
const scontoMinori = 0.2;
const scontoSenior = 0.4;

let eta = NaN;
let chilometri = NaN;
let prezzo = 0;

while (isNaN(eta) || eta <= 0) {
  eta = parseInt(prompt("Quanti anni hai? (inserisci un numero)"));
}

while (isNaN(chilometri) || chilometri <= 0) {
  chilometri = parseFloat(prompt("Quanti chilometri vuoi percorrere?  (inserisci un numero)"));
}

prezzo = chilometri * prezzoAlKm;

if (eta < 18) {
  prezzo = prezzo - prezzo * scontoMinori;
  alert(`Applicato sconto minori. Prezzo biglietto = ${prezzo.toFixed(2)}`);
} else if (eta > 65) {
  prezzo = prezzo - prezzo * scontoSenior;
  alert(`Applicato sconto senior. Prezzo biglietto = ${prezzo.toFixed(2)}`);
} else {
  alert(`Non hai diritto a sconti. Prezzo biglietto = ${prezzo.toFixed(2)}`);
}
