const cpfElement = document.querySelector('#cpf')
const gerarCpfBtn = document.querySelector('#gerar-cpf')
const copiarCpfBtn = document.querySelector('#copiar-cpf')

function gerarCPF() {
  let num = Math.floor(Math.random() * 999999999) + 1
  let numStr = num.toString().padStart(9, "0")
  let dv1 = calcularDV(numStr, 10)
  let dv2 = calcularDV(numStr + dv1, 11)

  cpfElement.innerText = formatarCPF(numStr + dv1 + dv2)
  copiarCpfBtn.innerText = "Copiar CPF"
}

function calcularDV(numero, peso) {
  let total = 0
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--
  }
  let resto = total % 11
  return resto < 2 ? 0 : 11 - resto
}

function formatarCPF(cpf) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
  return cpf.replace(regex, "$1.$2.$3-$4") //999.999.999-99
}

function copiarCPF() {
  const cpf = cpfElement.innerText
  navigator.clipboard.writeText(cpf).then(() => {
    alert(`${cpf} copiado para a área de transferência!`)
    copiarCpfBtn.innerText = "Copiado"
  },
    (err) => {
      console.log('Erro ao copiar CPF.')
    })

}

copiarCpfBtn.addEventListener('click', copiarCPF)
gerarCpfBtn.addEventListener('click', gerarCPF)