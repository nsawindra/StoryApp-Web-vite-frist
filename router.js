// Daftar rute yang tersedia di aplikasi
const routes = {
    '/': 'login-view',
    '/register': 'register-view', // Rute baru
    '/home': 'home-view',
    '/add-story': 'add-story-view',
};

// Fungsi router utama
const router = () => {
    const path = window.location.hash.slice(1) || '/';
    const page = routes[path] || 'login-view'; // Fallback ke login
    const mainContent = document.getElementById('main-content');
    
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            mainContent.innerHTML = `<${page}></${page}>`;
        });
    } else {
        mainContent.innerHTML = `<${page}></${page}>`;
    }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);