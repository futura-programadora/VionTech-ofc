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