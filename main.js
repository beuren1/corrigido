$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})





$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
           
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    

    messages : {
        nome: 'Por favor, insira seu nome',
          email: 'Por favor, insira seu email',
          telefone: 'Por favor, insira seu telefone',
            cpf :'Por favor, insira seu CPF',
    },
    submitHandler: function (form) {
        event.preventDefault();
    
    
        $("#mensagem")
            .html("Formulário enviado com sucesso!")
            .fadeIn()
            .fadeOut(5000)
            .delay(5000)  

            $("#form")[0].reset();
    },

    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
       if (camposIncorretos){
        alert(`Existem ${camposIncorretos} campos incorretos`)
       }
    }
})