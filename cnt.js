const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const cpf = document.querySelector("#cpf");
const senha = document.querySelector("#senha");

document.addEventListener("DOMContentLoaded", () => {
  nome.textContent = localStorage.getItem("name")
  telefone.textContent = localStorage.getItem("telefone")
  email.textContent = localStorage.getItem("email")
  cpf.textContent = localStorage.getItem("cpf")
  senha.textContent = localStorage.getItem("senha")
});
