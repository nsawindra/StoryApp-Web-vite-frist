class StoryItem extends HTMLElement {
    set story(story) {
        this._story = story;
        this.render();
    }

    render() {
        // Mengubah format tanggal menjadi lebih mudah dibaca
        const creationDate = new Date(this._story.createdAt).toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        this.innerHTML = `
            <style>
                .story-card {
                    display: block;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: transform 0.2s;
                }
                .story-card:hover {
                    transform: translateY(-5px);
                }
                .story-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .story-card-content {
                    padding: 1rem;
                }
                .story-card-content h3 {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }
                .story-card-content .meta {
                    font-size: 0.85rem;
                    color: #777;
                    margin-bottom: 1rem;
                }
            </style>
            <article class="story-card">
                <img src="${this._story.photoUrl}" alt="Gambar cerita dari ${this._story.name}">
                <div class="story-card-content">
                    <h3>Oleh: ${this._story.name}</h3>
                    <p class="meta">Diunggah pada: ${creationDate}</p>
                    <p>${this._story.description}</p>
                </div>
            </article>
        `;
    }
}

customElements.define('story-item', StoryItem);