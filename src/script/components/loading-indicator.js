class LoadingIndicator extends HTMLElement {

  connectedCallback() {
      this.render();
  }

  render() {
      this.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>`;
  }
}

customElements.define('loading-indicator', LoadingIndicator)