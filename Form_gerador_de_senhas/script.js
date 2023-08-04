// Seleção de elementos 
const generatePasswordBtn = document.querySelector('#generate-password')
const generatedPassword = document.querySelector('#generated-password')

// Funções
// Letras, Números e Símbolos
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
  const symbols = "()!@#$%&*{}[]><."
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  let password = ""

  const passwordLength = 10

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ]

  for (i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue = generators[Math.floor(Math.random() * generators.length)]()

      password += randomValue
    })
  }

  password = password.slice(0, passwordLength)
  generatedPassword.style.display = "block"
  generatedPassword.querySelector("h4").innerText = password
}

// Eventos
generatePasswordBtn.addEventListener('click', () => {
  generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})