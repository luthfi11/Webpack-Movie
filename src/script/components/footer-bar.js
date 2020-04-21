class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <p class="text-white text-center">Copyright Luthfi Alfarisi, 2020.</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-bar', FooterBar);