import '../components/movie-list.js';
import endpoint from '../data/api-config';
import ApiRepository from '../data/api-repository.js';

const main = () => {
    const searchElement = document.querySelector("app-bar");
    const tabNavigation = document.querySelector("tab-navigation");
    const movieListElement = document.querySelector("movie-list");
    const loading = document.getElementById("loading");

    const showLoading = () => {
        movieListElement.style.display = "none";
        loading.innerHTML = "<loading-indicator></loading-indicator>";
    }

    const clearTabSelected = () => {
        tabNavigation.querySelectorAll(".nav .nav-item .nav-link").forEach((item) => {
            item.classList.remove("active");
        });
    }

    const getMovieList = endpoint => {
        showLoading();
        ApiRepository.getMovieList(endpoint)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const onSearchAction = () => {
        showLoading();
        clearTabSelected();
        ApiRepository.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        loading.innerHTML = "";
        movieListElement.style.display = "flex";
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const onTabSelect = () => {
        searchElement.querySelector("#searchBox").value = "";
        const category = tabNavigation.value;
        switch (category) {
            case 'nowPlaying': getMovieList(endpoint.nowPlaying); break;
            case 'trending': getMovieList(endpoint.trending); break;
            case 'popular': getMovieList(endpoint.popular); break;
            case 'topRated': getMovieList(endpoint.topRated); break;
            case 'upcoming': getMovieList(endpoint.upcoming); break;
        }
    }

    tabNavigation.clickEvent = onTabSelect;
    searchElement.clickEvent = onSearchAction;

    // Init view
    getMovieList(endpoint.nowPlaying);
};

export default main;