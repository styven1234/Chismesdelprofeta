// Base de datos de chismes
const chismes = [
    {
        id: 1,
        autor: "El Profeta",
        avatar: "🎭",
        categoria: "celebridades",
        titulo: "Ruptura sorpresa en Hollywood",
        contenido: "Se dice que dos grandes celebridades de Hollywood se separaron tras ser vistos en diferentes eventos. Las fuentes cercanas revelan tensiones desde hace meses.",
        imagen: "https://images.unsplash.com/photo-1578987328568-bc32c8055b11?w=600&h=300&fit=crop",
        tiempo: "hace 2 horas",
        likes: 1234,
        comentarios: [
            { autor: "Chismosa123", texto: "¡No me lo esperaba!" },
            { autor: "TeAmigo", texto: "Se vio venir desde lejos" }
        ]
    },
    {
        id: 2,
        autor: "Fuente Confiable",
        avatar: "🗣️",
        categoria: "influencers",
        titulo: "Influencer revela secreto guardado",
        contenido: "Un famoso influencer reveló en directo información que había guardado durante años. Sus seguidores quedaron en shock con la confesión.",
        imagen: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=300&fit=crop",
        tiempo: "hace 4 horas",
        likes: 2456,
        comentarios: [
            { autor: "FanAcérrimo", texto: "Lo sabía desde antes" }
        ]
    },
    {
        id: 3,
        autor: "Monitor Político",
        avatar: "🏛️",
        categoria: "politica",
        titulo: "Alianza sorpresa en política",
        contenido: "Dos políticos rivales aparecieron juntos en un evento privado. Analistas especulan sobre posibles cambios en la política nacional.",
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
        tiempo: "hace 6 horas",
        likes: 890,
        comentarios: [
            { autor: "AnalitaPolitica", texto: "Esto cambia todo" },
            { autor: "CiudadanoX", texto: "Interesante giro" }
        ]
    },
    {
        id: 4,
        autor: "Deportes Caliente",
        avatar: "⚽",
        categoria: "deportes",
        titulo: "Fichaje millonario confirmado",
        contenido: "El equipo más importante del país fichó a la estrella internacional más esperada. El contrato supera todas las expectativas económicas.",
        imagen: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=300&fit=crop",
        tiempo: "hace 1 hora",
        likes: 3456,
        comentarios: [
            { autor: "FanDelEquipo", texto: "¡SOMOS CAMPEONES!" },
            { autor: "AfiicionadoDepor", texto: "Mejor jugador del mundo aquí" }
        ]
    },
    {
        id: 5,
        autor: "Ojo Vigilante",
        avatar: "👁️",
        categoria: "celebridades",
        titulo: "Encuentro secreto en restaurant exclusivo",
        contenido: "Dos celebridades fueron avistadas en un restaurant de lujo. Testigos reportan que compartieron mesa durante 3 horas sin separarse.",
        imagen: "https://images.unsplash.com/photo-1579752101179-e2e8c1d50b4c?w=600&h=300&fit=crop",
        tiempo: "hace 8 horas",
        likes: 567,
        comentarios: [
            { autor: "Reportera", texto: "¿Nueva pareja?" }
        ]
    },
    {
        id: 6,
        autor: "Cinemania",
        avatar: "🎬",
        categoria: "celebridades",
        titulo: "Película cancelada a último momento",
        contenido: "Producción multimillonaria fue cancelada días antes de su estreno. Fuentes indican problemas internos entre actores principales.",
        imagen: "https://images.unsplash.com/photo-1489599849228-da0b84c5f6b0?w=600&h=300&fit=crop",
        tiempo: "hace 3 horas",
        likes: 1890,
        comentarios: [
            { autor: "CinéfaloX", texto: "Qué pena, quería verla" },
            { autor: "DirectorFan", texto: "Siempre hay drama" }
        ]
    }
];

let categoriaActual = 'todos';

// Función para filtrar por categoría
function filtrarCategoria(categoria) {
    categoriaActual = categoria;
    
    // Actualizar botones activos
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderizarPosts();
}

// Función para renderizar posts
function renderizarPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    
    const chismesFiltrados = categoriaActual === 'todos' 
        ? chismes 
        : chismes.filter(c => c.categoria === categoriaActual);
    
    chismesFiltrados.forEach(chisme => {
        const postEl = crearElementoPost(chisme);
        postsContainer.appendChild(postEl);
    });
}

// Función para crear elemento de post
function crearElementoPost(chisme) {
    const post = document.createElement('div');
    post.className = 'post';
    
    const categoriasEmoji = {
        'celebridades': '⭐',
        'politica': '🏛️',
        'deportes': '⚽',
        'influencers': '📱'
    };
    
    post.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">${chisme.avatar}</div>
            <div class="post-info">
                <div class="post-author">${chisme.autor}</div>
                <div class="post-time">${chisme.tiempo}</div>
            </div>
            <span class="post-category">${categoriasEmoji[chisme.categoria] || '📰'} ${chisme.categoria}</span>
        </div>
        ${chisme.imagen ? `<img src="${chisme.imagen}" alt="${chisme.titulo}" class="post-image">` : ''}
        <div class="post-content">
            <h3 style="margin-bottom: 10px; color: #667eea;">${chisme.titulo}</h3>
            <p class="post-text">${chisme.contenido}</p>
            
            <div class="post-reactions">
                <button class="reaction-btn" onclick="darLike(this)">
                    <span>❤️</span>
                    <span>${chisme.likes}</span>
                </button>
                <button class="reaction-btn" onclick="darComentario(this)">
                    <span>💬</span>
                    <span>${chisme.comentarios.length}</span>
                </button>
                <button class="reaction-btn" onclick="compartir(this)">
                    <span>📤</span>
                    <span>Compartir</span>
                </button>
            </div>
            
            <div class="comments">
                ${chisme.comentarios.slice(0, 2).map(com => `
                    <div class="comment">
                        <span class="comment-author">${com.autor}</span>
                        <div class="comment-text">${com.texto}</div>
                    </div>
                `).join('')}
                ${chisme.comentarios.length > 2 ? `
                    <div class="see-more-comments">Ver ${chisme.comentarios.length - 2} comentarios más</div>
                ` : ''}
            </div>
        </div>
    `;
    
    return post;
}

// Función para dar like
function darLike(element) {
    element.classList.toggle('active');
    const count = parseInt(element.querySelector('span:last-child').textContent);
    element.querySelector('span:last-child').textContent = element.classList.contains('active') 
        ? count + 1 
        : count - 1;
}

// Función para comentario
function darComentario(element) {
    alert('Sistema de comentarios - Próximamente con más funcionalidades');
}

// Función para compartir
function compartir(element) {
    alert('¡Chisme compartido! 📤');
}

// Función para actualizar trending
function actualizarTrending() {
    const trendingContainer = document.getElementById('trending');
    trendingContainer.innerHTML = '';
    
    // Ordenar por likes y tomar top 5
    const topChismes = [...chismes]
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 5);
    
    topChismes.forEach((chisme, index) => {
        const trendingEl = document.createElement('div');
        trendingEl.className = 'trending-item';
        trendingEl.innerHTML = `
            <div class="number">#${index + 1}</div>
            <div class="title">${chisme.titulo}</div>
            <div style="font-size: 0.85em; color: #999; margin-top: 8px;">❤️ ${chisme.likes} likes</div>
        `;
        trendingEl.onclick = () => {
            document.querySelector(`[data-chisme-id="${chisme.id}"]`)?.scrollIntoView({ behavior: 'smooth' });
        };
        trendingContainer.appendChild(trendingEl);
    });
}

// Inicializar cuando carga la página
window.addEventListener('DOMContentLoaded', () => {
    renderizarPosts();
    actualizarTrending();
});