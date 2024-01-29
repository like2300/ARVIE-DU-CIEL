let titre = "ARVIE DU CIEL";
document.querySelector("title").innerHTML = titre;
const laod = document.querySelector("#laoder");
const send = document.querySelector(".send");
const databox = document.querySelector(".data");
const form = document.querySelector("form");
const input = document.querySelector("input");
const sect = document.querySelector(".ticket-sect");
const name = document.querySelector(".name");
const datetime = document.querySelector(".date");
const send2 = document.querySelector(".send2");
const qrcode = document.querySelector("#qrcode");
const payeer = document.querySelector("#payeer");
const avance = document.querySelector("#avance");
const reste = document.querySelector("#reste");
const numprod = document.querySelector(".numprod");
const ticket = document.querySelector(".ticket-sect");
const pdf = document.querySelector(".pdf");

window.addEventListener("load", () => {
  laod.classList.add("laoding");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
input.addEventListener("input", (e) => {
  send.addEventListener("click", () => {
    valuer = e.target.value;
    if (valuer != "") {
      name.innerHTML = ` ${valuer}`;
      let conf = confirm(`votre nom est : ${valuer}`);
      if (conf === true) {
        sect.classList.add("active");
        databox.classList.add("laoding");
        const date = () => {
          dates = new Date();
          a = dates.getFullYear();
          j = dates.getDate();
          m = dates.getMonth() + 1;
          return `${j}/0${m}/${a}`;
        };
        datetime.innerHTML = `Date: ${date()}`;
        const qrcodes = () => {
          return (qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${valuer}--${date()}`);
        };
        qrcodes();
      }
      e.target.value = "";
    }
  });
});
send2.addEventListener("click", () => {
  ticket.classList.add("laoding");
  pdf.style.display = "flex";
});
const nuberg = () => {
  const caract = "1234567834567834567890";
  let sec = "";
  for (let i = 0; i < 9; i++) {
    let gen = Math.floor(Math.random() * caract.length);
    sec += caract.charAt(gen);
  }
  return (numprod.innerHTML = `N DE FACTURE: ${sec}`);
};
nuberg();
const url = "/OmerLInks|creation/prduit.json";
fetch(url)
  .then((reponse) => reponse.json())
  .then((data) => {
    const secte = document.getElementById("secte");
    data.produits.forEach((produit) => {
      const option = document.createElement("option");
      option.innerHTML = produit.nom;
      option.value = produit.nom;
      secte.appendChild(option);
    });
  });