class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="col-4">
                <div class="card">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="Movie Poster">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <p class="card-text">${this._movie.overview}</p>
                        <a href="#" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("movie-item", MovieItem)