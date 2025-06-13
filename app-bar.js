class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const token = localStorage.getItem('authToken');
        let navLinks = `
            <a href="#/" class="nav-link">Login</a>
            <a href="#/register" class="nav-link">Register</a>
        `;

        if (token) {
            navLinks = `
                <a href="#/home" class="nav-link">Home</a>
                <a href="#/add-story" class="nav-link">Add Story</a>
                <a href="#" id="logout-button" class="nav-link">Logout</a>
            `;
        }

        this.innerHTML = `
            <style>
                .app-bar {
                    /* PERUBAHAN 1: Menggunakan Flexbox untuk layout */
                    display: flex;
                    justify-content: space-between; /* Mendorong item ke ujung (kiri & kanan) */
                    align-items: center; /* Menyelaraskan item secara vertikal di tengah */
                    padding: 1rem 5%; /* Menambah jarak dari tepi layar */
                    background-color: #34495e;
                    color: white;
                }
                .app-bar h1 {
                    margin: 0;
                    font-size: 1.8rem;
                }
                .app-bar nav a {
                    /* PERUBAHAN 2: Mengubah warna link agar terlihat jelas */
                    color: white;
                    text-decoration: none;
                    margin-left: 1.5rem;
                    font-size: 1.1rem;
                    transition: opacity 0.3s;
                }
                .app-bar nav a:hover {
                    opacity: 0.8;
                }
                .skip-link {
                    position: absolute;
                    top: -100px;
                    left: 0;
                    background: #3498db;
                    color: white;
                    padding: 10px;
                    z-index: 10000;
                    transition: top 0.3s;
                }
                .skip-link:focus {
                    top: 0;
                }
            </style>
            <a href="#main-content" class="skip-link">Lewati ke Konten</a>
            <div class="app-bar">
                <h1><i class="fas fa-book-open"></i> StoryVerse</h1>
                <nav>${navLinks}</nav>
            </div>
        `;
    }

    addEventListeners() {
        const logoutButton = this.querySelector('#logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem('authToken');
                window.location.hash = '#/';
                window.location.reload();
            });
        }
    }
}
customElements.define('app-bar', AppBar);