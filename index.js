
 var elementosDuvida = document.querySelectorAll('.duvida') //foi criado uma variavel para guarda esta informaçao para ser usada
//primeira linha esta pegando todos os elementos

elementosDuvida.forEach(function (duvida) { //segunda linha esta querendo executar uma função para cada elemento duvida
    duvida.addEventListener('click', function () { // terceira linha esta querendo adicionar para cada elemento de duvida, um evento de click
        duvida.classList.toggle('ativa') //o evento de click ira o fundo verde
    })

}) //vai ser uma função que vai ser executada para cada elemento que esta na lista

