//Procurar o botao
document.querySelector(" #add-time")
    //Quando clicar no botao
    .addEventListener('click', cloneField)
    //Executar uma acao
function cloneField() {
    //Duplicar os campos
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)
        // Pegar os campos
    const fields = newfieldContainer.querySelectorAll('input')
        // para cada campo limpar
    fields.forEach(function(field) {
            // pegar o fields do momento e limpa ele
            field.value = ""
        })
        // Colocar na página
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}