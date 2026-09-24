<script>

let mainArtistCount = 1;
let featuredArtistCount = 0;

const mainArtistsContainer =
    document.getElementById("mainArtistsContainer");

const featuredArtistsContainer =
    document.getElementById("featuredArtistsContainer");


document.getElementById("addMainArtist").addEventListener("click", function () {

    mainArtistCount++;

    const artist = document.createElement("div");

    artist.className = "artist-selection";

    artist.innerHTML = `
        <label>Main Artist ${mainArtistCount}</label>

        <button type="button" class="artist-select-btn">
            <span>Select Artist</span>
        </button>

        <button
            type="button"
            class="remove-artist-btn"
            onclick="this.parentElement.remove()"
        >
            Remove
        </button>
    `;

    mainArtistsContainer.appendChild(artist);

});


document.getElementById("addFeaturedArtist").addEventListener("click", function () {

    featuredArtistCount++;

    const artist = document.createElement("div");

    artist.className = "artist-selection";

    artist.innerHTML = `
        <label>Featured Artist ${featuredArtistCount}</label>

        <button type="button" class="artist-select-btn">
            <span>Select Artist</span>
        </button>

        <button
            type="button"
            class="remove-artist-btn"
            onclick="this.parentElement.remove()"
        >
            Remove
        </button>
    `;

    featuredArtistsContainer.appendChild(artist);

});

</script>