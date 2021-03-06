import endpoint from './api-config';
class ApiRepository {

    static getMovieList(endpoint) {
        return fetch(endpoint)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static searchMovie(title) {
        return fetch(`${endpoint.search}${title}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${title} is not found.`)
                }
            })
    }
}

export default ApiRepository