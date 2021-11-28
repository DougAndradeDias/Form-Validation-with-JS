function checkForm() {
  // variavel que pega todos os elementos com a classe 'required'
  const inputs = document.getElementsByClassName('required')

  // variavel que armazena a quantidade em numeros de elementos capturados
  const len = inputs.length

  // variavel para atenticação
  var validation = true

  // laço que percore por todos os elementos de classe 'required' e verifica se o value dele é diferente de zero
  for (let i = 0; i < len; i++) {
    // se o elemento de classe 'required' for zero, a varialvel validation é setada para false
    if (!inputs[i].value) {
      validation = false
    }
  }

  // se 'validation' estiver em 'false' o form retorna um alerta e nao envia, para enviar é nessesario que todos os campos seja diferente de zero.
  if (!validation) {
    alert('Preencha os campos obrigatorios *')
    return false
  } else {
    return true
  }
}
