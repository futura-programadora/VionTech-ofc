document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM completamente carregado');

    // Seleciona o formulário e os campos
    const formulario = document.querySelector('#contato-form');
    const emailInput = document.querySelector('#email');
    const mensagemInput = document.querySelector('#mensagem');

    console.log('Elementos selecionados:', { formulario, emailInput, mensagemInput });

    formulario.addEventListener('submit', async function (event) {
        console.log('Formulário enviado');
        event.preventDefault(); // Impede o envio do formulário tradicional

        // Captura os dados do formulário
        const email = emailInput.value;
        const mensagem = mensagemInput.value;
        console.log('Dados do formulário:', { email, mensagem });

        // Envia para o backend
        try {
            const resposta = await fetch('https://back-end-help-service.onrender.com/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, mensagem })
            });

            console.log('Resposta do backend:', resposta);

            // Verifica se o envio foi bem-sucedido
            if (resposta.ok) {
                console.log('Mensagem enviada com sucesso!');
                alert('Mensagem enviada com sucesso!');
                formulario.reset(); // Limpa os campos do formulário
            } else {
                console.error('Erro ao enviar mensagem:', resposta);
                alert('Erro ao enviar mensagem');
            }
        } catch (erro) {
            console.error('Erro na requisição:', erro);
            alert('Erro ao enviar mensagem');
        }
    });
});

//parcerias

document.addEventListener('DOMContentLoaded', function() {
    console.log('Formulário de Parceria carregado');

    // Seleciona os elementos do formulário
    const formulario = document.querySelector('.form-parceria');
    const nomeInput = document.querySelector('#nome');
    const idadeInput = document.querySelector('#idade');
    const telInput = document.querySelector('#tel');
    const profissaoInput = document.querySelector('#profissao');
    const emailInput = document.querySelector('.email');

    // Adiciona o listener de submit no formulário
    formulario.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o envio do formulário tradicional
        console.log('Formulário enviado');

        // Captura os dados do formulário
        const nome = nomeInput.value;
        const idade = idadeInput.value;
        const profissao = profissaoInput.value;
        const numero = telInput.value;
        const email = emailInput.value;

        console.log('Dados do formulário:', { nome, idade, profissao, numero, email });

        // Envia os dados para o backend usando Fetch API
        try {
            const resposta = await fetch('https://back-end-help-service.onrender.com/parcerias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    profissao,
                    numero,
                    email
                })
            });

            const resultado = await resposta.json();
            console.log('Resultado da resposta:', resultado);

            if (resposta.ok) {
                console.log('Parceria enviada com sucesso!');
                alert('Parceria enviada com sucesso!');
                formulario.reset(); // Limpa os campos do formulário
            } else {
                console.error('Erro ao enviar parceria:', resultado.erro);
                alert('Erro ao enviar parceria');
            }
        } catch (erro) {
            console.error('Erro na requisição:', erro);
            alert('Erro ao enviar parceria. Tente novamente mais tarde.');
        }
    });
});

