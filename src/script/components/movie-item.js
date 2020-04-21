import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./movie-detail";

class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
              <div class="card text-white border-secondary mb-5">
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="${this._movie.title} Poster">
                  <button class="btn btn-primary top-right">&#9733; ${this._movie.vote_average}</button>

                  <div class="card-header">
                    <h5 class="card-title">${this._movie.title}</h5>
                    <p class="card-subtitle">${this._movie.release_date.substring(0, 4)}</p>
                  </div>

                  <div class="card-body">
                      <p class="card-text">${this._movie.overview}</p>
                  </div>
                  
                  <div class="card-footer">
                    <button class="btn btn-primary w-100" id="buttonDetail" data-toggle="modal" data-target="#showDetail${this._movie.id}">Detail</button>
                  </div>
              </div>`;
    }
}

customElements.define('movie-item', MovieItem)