class ApiRepository {

    static getNowPlayingMovie() {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60bf79a20ebb1e7e480ffe0d5c1bb2eb`)
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
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=60bf79a20ebb1e7e480ffe0d5c1bb2eb&query=${title}`)
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