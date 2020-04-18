class TabLayout extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">MOVIE CATALOG</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <form class="form-inline mt-3 mb-3">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search Movie">
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
            
        </nav>
        <div class="container mt-2 mb-2">
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Now Playing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Popular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>`;
    }

}

customElements.define("tab-layout", TabLayout)