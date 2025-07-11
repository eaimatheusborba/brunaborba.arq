// JavaScript para a navegação responsiva (menu hambúrguer)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Alterna a visibilidade do menu móvel ao clicar no botão de toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    // Fecha o menu móvel ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }
            // Rolagem suave para a seção correspondente
            const targetId = link.textContent.toLowerCase().replace('í', 'i').replace('ç', 'c'); // Converte "Início" para "inicio"
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// JavaScript para o carrossel de imagens na seção Hero
document.addEventListener('DOMContentLoaded', () => {
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    // Função para mostrar a próxima imagem
    function showNextImage() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }

    // Inicia o carrossel, mostrando a primeira imagem e depois alternando a cada 5 segundos
    if (heroImages.length > 0) {
        heroImages[currentImageIndex].classList.add('active'); // Ativa a primeira imagem
        setInterval(showNextImage, 5000); // Troca a imagem a cada 5 segundos
    }
});

// JavaScript para o contador de clientes satisfeitos (exemplo, pode ser dinâmico)
document.addEventListener('DOMContentLoaded', () => {
    const statNumber = document.querySelector('.stat-number');
    if (statNumber) {
        // Exemplo de como você poderia animar um número
        // Para um valor fixo como "100%", não é estritamente necessário,
        // mas demonstra a capacidade de adicionar interatividade.
        // Se o número fosse dinâmico, esta seria a lógica.
    }
});

// JavaScript para o efeito de scroll na navegação (mudar background, etc.)
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Altera o estilo da nav após rolar 50px
            nav.style.backgroundColor = 'rgba(44, 24, 16, 0.98)'; // Fundo mais opaco
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'; // Adiciona sombra
        } else {
            nav.style.backgroundColor = 'rgba(44, 24, 16, 0.95)'; // Volta ao fundo original
            nav.style.boxShadow = 'none'; // Remove a sombra
        }
    });
});