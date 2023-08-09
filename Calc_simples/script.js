// Seleção dos elementos

const display = document.querySelector('#displayInput')
const botaoIgual = document.querySelector('.igual')
const botaoPonto = document.querySelector('.ponto')
const botoesNumeros = document.querySelectorAll('.num')
const botoesOperadores = document.querySelectorAll('.operador')

// Variáveis globais

let operacaoAtual = "",
  operador = null,
  valorAnterior = "",
  calculando = false;

// funções

function atualizaDisplay() {
  display.value = operacaoAtual
}

function insereNumero(ev) {
  if (calculando) {
    operacaoAtual = ev.target.textContent
    calculando = false
  } else {
    operacaoAtual += ev.target.textContent
  }
  atualizaDisplay()
}

function inserePonto() {
  if (operacaoAtual.indexOf('.') === -1) {
    operacaoAtual += "."
    atualizaDisplay()
  }
}

function insereOperador(ev) {
  if (operacaoAtual !== "") {
    if (!calculando) {
      if (operador !== null) {
        calcular()
      }
      valorAnterior = operacaoAtual
      operacaoAtual = ""
    }
    operador = ev.target.textContent
  }
}

function calcular() {
  let resultado = null
  const operadorAnterior = parseFloat(valorAnterior)
  const operandoAtual = parseFloat(operacaoAtual)

  switch (operador) {
    case "+":
      resultado = operadorAnterior + operandoAtual
      break
    case "-":
      resultado = operadorAnterior - operandoAtual
      break
    case "*":
      resultado = operadorAnterior * operandoAtual
      break
    case "/":
      resultado = operadorAnterior / operandoAtual
      break
  }

  operacaoAtual = String(resultado)
  valorAnterior = operacaoAtual
  calculando = true
  atualizaDisplay()
}

// Eventos
botaoPonto.addEventListener('click', inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener('click', insereNumero))
botoesOperadores.forEach((botao) => botao.addEventListener('click', insereOperador))
botaoIgual.addEventListener('click', calcular)