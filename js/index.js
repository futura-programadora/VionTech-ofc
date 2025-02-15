function toggleMenu() {
    const menu = document.querySelector('.link-header');
    menu.classList.toggle('show');
}


let currentIndex = 0; // Índice da imagem atual
const imgsCarrosel = document.querySelector('.imgs-carrosel');
const totalImages = document.querySelectorAll('.img-carrossel-card').length;

function updateCarousel() {
    const offset = -currentIndex * 100; // Calcula o deslocamento
    imgsCarrosel.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Função para avançar as imagens
function nextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reinicia para a primeira imagem
    }
    updateCarousel();
}

// Função para retroceder as imagens
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Vai para a última imagem
    }
    updateCarousel();
}

// Configura o loop automático
setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos

// Adiciona eventos de clique para navegação manual
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);



//BANCO DE DADOS / BACK-END

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado');
    
    // Seleciona o formulário e os campos
    const formulario = document.querySelector('#contato-form');
    const emailInput = document.querySelector('#email');
    const mensagemInput = document.querySelector('#mensagem');

    console.log('Elementos selecionados:', { formulario, emailInput, mensagemInput });

    formulario.addEventListener('submit', async function(event) {
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

