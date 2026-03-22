// efeito de digitação
const typedElement = document.querySelector(".typed-text");

if (typedElement) {
  const text = "Mais do que alunos,\numa história sendo construída.";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      if (text.charAt(index) === "\n") {
        typedElement.innerHTML += "<br>";
      } else {
        typedElement.innerHTML += text.charAt(index);
      }
      index++;
      setTimeout(typeWriter, 45);
    }
  }

  typedElement.innerHTML = "";
  typeWriter();
}

// efeito reveal ao rolar
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    const visible = 120;

    if (top < windowHeight - visible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// clique final
function aceitou() {
  const mensagem = document.getElementById("mensagem-final");
  if (mensagem) {
    mensagem.classList.remove("hidden");
    mensagem.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// clique nas fotos
function toggleCard(card) {
  const cards = document.querySelectorAll(".foto-card");

  cards.forEach((item) => {
    if (item !== card) {
      item.classList.remove("ativa");
    }
  });

  card.classList.toggle("ativa");
}
