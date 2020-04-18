class LoadingIndicator extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>`;
    }
}

customElements.define("loading-indicator", LoadingIndicator)