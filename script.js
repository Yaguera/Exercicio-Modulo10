$(document).ready(function(){
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                mobileNL: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome completo.',
            email: 'Digite um e-mail válido',
            telefone: 'Digite um telefone válido',
            cpf:  'Digite um cpf válido',
            endereco: 'Digite o endereço completo',
            cep: 'Digite um CEP válido'

        },
        submitHandler: function(form){
            submit(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }    
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    }),
    $('#cpf').mask('000.000.000-00',{
        placeholder:'000.000.000-00'
    }),
    $('#cep').mask('00000-00',{
        placeholder: '00000-00'
    })

    


})