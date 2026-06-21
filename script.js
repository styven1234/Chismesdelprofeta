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
    },
    {
        id: 7,
        autor: "Paparazzi Loco",
        avatar: "📸",
        categoria: "celebridades",
        titulo: "Cantante famosa cambia completamente su look",
        contenido: "Una de las cantantes más icónicas del mundo apareció con un cambio radical de imagen. Sus fans debaten si es una reinvención o un llamado de auxilio emocional.",
        imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop",
        tiempo: "hace 12 minutos",
        likes: 5432,
        comentarios: [
            { autor: "SwiftieForever", texto: "¡Me encanta el nuevo look!" },
            { autor: "OldSchoolFan", texto: "La extraño así" },
            { autor: "StyleIcon", texto: "Bruja de moda absoluta" }
        ]
    },
    {
        id: 8,
        autor: "Politica.net",
        avatar: "🗳️",
        categoria: "politica",
        titulo: "Escándalo: Ministro fue visto en lugar prohibido",
        contenido: "El ministro de economía fue fotografiado en un lugar que expresamente había declarado como 'conflicto de interés'. La oposición pide su renuncia inmediata.",
        imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
        tiempo: "hace 30 minutos",
        likes: 4123,
        comentarios: [
            { autor: "CiudadanoEnojado", texto: "¡RENUNDA YA!" },
            { autor: "AbogadoX", texto: "Esto es illegal" }
        ]
    },
    {
        id: 9,
        autor: "Gamer Central",
        avatar: "🎮",
        categoria: "influencers",
        titulo: "Streamer famoso deja la plataforma de forma dramática",
        contenido: "El streamer con más seguidores en la región anunció su retiro sorpresivamente. Rumores sugieren que fue por desacuerdos contractuales millonarios.",
        imagen: "https://images.unsplash.com/photo-1538481143235-5d8b4cb8f029?w=600&h=300&fit=crop",
        tiempo: "hace 45 minutos",
        likes: 6789,
        comentarios: [
            { autor: "Nooooo", texto: "¿Y AHORA QUÉ VEO?" },
            { autor: "StreamerRival", texto: "Bienvenido a mi plataforma" }
        ]
    },
    {
        id: 10,
        autor: "Deportes Extra",
        avatar: "🏆",
        categoria: "deportes",
        titulo: "Futbolista vuelve después de lesión grave",
        contenido: "Contra todos los pronósticos médicos, la estrella del fútbol regresó al campo después de 18 meses. Su regreso causó una ovación de 10 minutos.",
        imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop",
        tiempo: "hace 1 hora",
        likes: 8901,
        comentarios: [
            { autor: "LaronaFan", texto: "¡LEYENDA!" },
            { autor: "MisiónCampeones", texto: "Ahora sí ganamos todo" }
        ]
    },
    {
        id: 11,
        autor: "Misterio",
        avatar: "🕵️",
        categoria: "celebridades",
        titulo: "Actriz desaparece sin dejar rastro",
        contenido: "Una actriz reconocida no ha sido vista en público en tres meses. Su representante dice que está 'en retiro espiritual' pero los fans especulan sobre razones oscuras.",
        imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=300&fit=crop",
        tiempo: "hace 2 horas",
        likes: 3211,
        comentarios: [
            { autor: "Conspirador", texto: "Algo raro hay aquí" },
            { autor: "PeriodistaSombra", texto: "Tengo fuentes..." }
        ]
    },
    {
        id: 12,
        autor: "Tech Gossip",
        avatar: "💻",
        categoria: "influencers",
        titulo: "Tech influencer acusado de fraude",
        contenido: "El principal influencer de tecnología fue acusado de vender productos falsificados a sus seguidores. La comunidad está en caos total.",
        imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
        tiempo: "hace 3 horas",
        likes: 4556,
        comentarios: [
            { autor: "TecnófiloEnojado", texto: "Siempre fue sospechoso" }
        ]
    },
    {
        id: 13,
        autor: "Política Roja",
        avatar: "🔴",
        categoria: "politica",
        titulo: "Filtraciones revelan conversaciones privadas",
        contenido: "Documentos confidenciales fueron publicados en redes. Contienen conversaciones entre figuras políticas que pueden cambiar el panorama electoral.",
        imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
        tiempo: "hace 4 horas",
        likes: 7234,
        comentarios: [
            { autor: "JournalistaMundial", texto: "Bomba informativa" },
            { autor: "OpositorX", texto: "Los atrapamos" }
        ]
    },
    {
        id: 14,
        autor: "Músico Insider",
        avatar: "🎵",
        categoria: "celebridades",
        titulo: "Banda legendaria se reúne tras 15 años",
        contenido: "La banda de rock más importante de los 2000s anunció una reunión exclusiva. Las entradas agotadas en 30 minutos.",
        imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=300&fit=crop",
        tiempo: "hace 5 horas",
        likes: 9876,
        comentarios: [
            { autor: "Nostálgico90s", texto: "VUELVO A SER JOVEN" },
            { autor: "ViejoFan", texto: "Finalmente!!" }
        ]
    },
    {
        id: 15,
        autor: "Red Carpet Spy",
        avatar: "💎",
        categoria: "celebridades",
        titulo: "Pareja de celebridades confirma separación",
        contenido: "La pareja más poderosa de Hollywood oficialmente confirma que se separan. Sus 4 hijos serán custodia compartida.",
        imagen: "https://images.unsplash.com/photo-1491927556901-ad202aa8c399?w=600&h=300&fit=crop",
        tiempo: "hace 6 horas",
        likes: 5643,
        comentarios: [
            { autor: "CorazónRoto", texto: "No puedo creerlo 😭" }
        ]
    },
    {
        id: 16,
        autor: "Viralizado",
        avatar: "📱",
        categoria: "influencers",
        titulo: "Joven influencer gana lotería después de viralizar",
        contenido: "Una influencer que se hizo viral por su video cómico ganó la lotería. Sus seguidores creen que es destino.",
        imagen: "https://images.unsplash.com/photo-1512509180-6d59c87b561d?w=600&h=300&fit=crop",
        tiempo: "hace 7 horas",
        likes: 2987,
        comentarios: [
            { autor: "Suertudo", texto: "Eso es fe" }
        ]
    },
    {
        id: 17,
        autor: "Gol Net",
        avatar: "⚽",
        categoria: "deportes",
        titulo: "Equipo gana campeonato de forma milagrosa",
        contenido: "En el minuto 95, un gol de tiro libre imposible dio la victoria histórica. La ciudad está en caos de celebración.",
        imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop",
        tiempo: "hace 8 horas",
        likes: 10234,
        comentarios: [
            { autor: "DelirioTotal", texto: "¡SOMOS INMORTALES!" },
            { autor: "FanDesde1995", texto: "Esperé esto 25 años" }
        ]
    },
    {
        id: 18,
        autor: "Scandal Alert",
        avatar: "🚨",
        categoria: "celebridades",
        titulo: "Productor acusado por multiples víctimas",
        contenido: "15 mujeres han presentado demandas contra un productor de cine famoso. Las acusaciones son escalofriantes.",
        imagen: "https://images.unsplash.com/photo-1495631668237-5aa2f6bed0ba?w=600&h=300&fit=crop",
        tiempo: "hace 9 horas",
        likes: 8123,
        comentarios: [
            { autor: "JusticiaParaTodas", texto: "Qué asco" },
            { autor: "Abogada", texto: "Esto es serio" }
        ]
    },
    {
        id: 19,
        autor: "Bolsa y Mercados",
        avatar: "📈",
        categoria: "politica",
        titulo: "Económista renuncia en protesta pública",
        contenido: "El principal economista del gobierno renunció en una conferencia de prensa acusando de corrupción. Mercados caen 5%.",
        imagen: "https://images.unsplash.com/photo-1611432479557-b4cc6440f1d9?w=600&h=300&fit=crop",
        tiempo: "hace 10 horas",
        likes: 6789,
        comentarios: [
            { autor: "Inversionista", texto: "¿Y mis acciones?" }
        ]
    },
    {
        id: 20,
        autor: "Showbiz Central",
        avatar: "🎪",
        categoria: "influencers",
        titulo: "Dos youtubers en pelea viral epic",
        contenido: "Dos de los youtubers más grandes tuvieron una pelea en vivo durante concierto. Sus fans se dividieron en bandos.",
        imagen: "https://images.unsplash.com/photo-1516575334481-f410966676ad?w=600&h=300&fit=crop",
        tiempo: "hace 11 horas",
        likes: 7654,
        comentarios: [
            { autor: "YoutubeFan1", texto: "MI YOUTUBER GANÓ!" },
            { autor: "YoutubeFan2", texto: "¡NOOO MENTIRAS!" }
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