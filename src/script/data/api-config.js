const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=60bf79a20ebb1e7e480ffe0d5c1bb2eb";

const endpoint = {
    nowPlaying : `${baseUrl}movie/popular${apiKey}`,
    trending : `${baseUrl}trending/movie/week${apiKey}`,
    popular : `${baseUrl}movie/popular${apiKey}`,
    topRated : `${baseUrl}movie/top_rated${apiKey}`,
    upcoming : `${baseUrl}movie/upcoming${apiKey}`,
    search : `${baseUrl}search/movie${apiKey}&query=`
}

export default endpoint;