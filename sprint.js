  const form = document.getElementById("form-contato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const estilo = document.getElementById("estilo");
  const mensagem = document.getElementById("mensagem");
  
  form.addEventListener("submit", function (e) {
    if (nome.value.length < 3) {
      alert("Nome deve ter pelo menos 3 letras.");
      e.preventDefault();
    } else if (!email.value.includes("@")) {
      alert("Email inválido.");
      e.preventDefault();
    } else if (telefone.value.length < 8) {
      alert("Telefone inválido.");
      e.preventDefault();
    } else if (estilo.value.trim() === "") {
      alert("Informe um estilo de tatuagem.");
      e.preventDefault();
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
