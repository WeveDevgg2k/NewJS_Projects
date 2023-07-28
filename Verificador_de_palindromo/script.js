const verificarBtn = document.querySelector("#verificar-btn")
const palavraInput = document.querySelector("#palavra")
const resultado = document.querySelector("#resultado")

function verificarPalindromo() {
  const palavra = palavraInput.value
  const palavraInvertida = palavra.split("").reverse().join("")

  if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    resultado.textContent = `A palavra "${palavra}" é um Palíndromo`
  } else {
    resultado.textContent = `A palavra "${palavra}" não é um Palíndromo`
  }
}

verificarBtn.addEventListener('click', verificarPalindromo)

palavraInput.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    verificarPalindromo()
  }
})