const local = (event) => {
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  localStorage.setItem("name", nome);
  const telefone = document.querySelector("#telefone").value;
  localStorage.setItem("telefone", telefone);
  const email = document.querySelector("#email").value;
  localStorage.setItem("email", email);
  const cpf = document.querySelector("#cpf").value;
  localStorage.setItem("cpf", cpf);
  const senha = document.querySelector("#senha").value;
  localStorage.setItem("senha", senha);
  if (nome === "" || telefone === "" || email === "" || cpf === "" || senha === "") {
    alert("Preencha com dados válidos");
  } else {
    alert("Seu cadastro foi realizado!");
    window.location.href = "/conta.html";
  }
};

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');


function toggleModal() {
  containerModal.classList.toggle("ativo");
}


botaoAbrir.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModal();
});

botaoFechar.addEventListener("click", (event) => {
  event.preventDefault();
  toggleModal();
});

containerModal.addEventListener("click", (event) => {
  if (event.target === containerModal) {
    toggleModal();
  }
});

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

const handleCPF = (event) => {
  let input = event.target;
  input.value = cpfMask(input.value);
};

const cpfMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, ""); 
  value = value.replace(/(\d{3})(\d)/, "$1.$2"); 
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{2})$/, "$1-$2"); 
  return value;
};

const togglePasswordVisibility = () => {
  const senhaInput = document.getElementById("senha");
  const eyeIcon = document.getElementById("eye-icon");

  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash"); 
    senhaInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye"); 
  }
};
