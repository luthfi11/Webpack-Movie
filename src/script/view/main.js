import '../components/movie-list.js';
import ApiRepository from '../data/api-repository.js';

const main = () => {
    const movieListElement = document.querySelector("movie-list");

    const getNowPlayingMovie = () => {
        ApiRepository.getNowPlayingMovie()
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    //searchElement.clickEvent = onSearchAction;
    getNowPlayingMovie();
};

export default main;