document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       APPROVED ARTISTS
    ============================== */

    const approvedArtists = [
        {
            name: "M2HO DA DJ",
            image: "images/m2ho-da-dj.jpg"
        },
        {
            name: "S'CABHA",
            image: "images/scabha.jpg"
        },
        {
            name: "ANGEL",
            image: "images/angel.jpg"
        }
    ];

    let mainArtistCount = 1;
    let featuredArtistCount = 0;
    let contributorCount = 1;
    let activeArtistButton = null;


    /* ==============================
       ARTIST SELECTOR
    ============================== */

    function closeArtistSelector() {
        const modal = document.getElementById("artistSelectorModal");

        if (modal) {
            modal.remove();
        }

        activeArtistButton = null;
    }


    function selectArtist(button, artist) {

        if (!button) return;

        button.innerHTML = "";

        const image = document.createElement("img");

        image.src = artist.image;
        image.alt = artist.name;

        image.style.width = "40px";
        image.style.height = "40px";
        image.style.objectFit = "cover";
        image.style.borderRadius = "50%";
        image.style.marginRight = "10px";
        image.style.verticalAlign = "middle";

        const name = document.createElement("span");

        name.textContent = artist.name;

        button.appendChild(image);
        button.appendChild(name);

        button.dataset.selectedArtist = artist.name;
        button.dataset.selectedImage = artist.image;

        closeArtistSelector();
    }


    function openArtistSelector(button) {

        if (!button) return;

        closeArtistSelector();

        activeArtistButton = button;

        const modal = document.createElement("div");

        modal.id = "artistSelectorModal";

        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.90)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.padding = "20px";
        modal.style.boxSizing = "border-box";
        modal.style.zIndex = "999999";


        const box = document.createElement("div");

        box.style.width = "100%";
        box.style.maxWidth = "520px";
        box.style.maxHeight = "85vh";
        box.style.overflowY = "auto";
        box.style.background = "#111";
        box.style.border = "1px solid #444";
        box.style.padding = "25px";
        box.style.boxSizing = "border-box";


        const header = document.createElement("div");

        header.style.display = "flex";
        header.style.alignItems = "center";
        header.style.justifyContent = "space-between";
        header.style.marginBottom = "15px";


        const title = document.createElement("h2");

        title.textContent = "Select Artist";

        title.style.margin = "0";
        title.style.color = "#fff";


        const closeButton = document.createElement("button");

        closeButton.type = "button";
        closeButton.textContent = "×";

        closeButton.style.background = "transparent";
        closeButton.style.border = "0";
        closeButton.style.color = "#fff";
        closeButton.style.fontSize = "30px";
        closeButton.style.cursor = "pointer";

        closeButton.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            closeArtistSelector();

        });


        header.appendChild(title);
        header.appendChild(closeButton);


        const description = document.createElement("p");

        description.textContent =
            "Select an approved Metallic Records artist.";

        description.style.color = "#aaa";
        description.style.marginBottom = "20px";


        const list = document.createElement("div");

        list.style.display = "grid";
        list.style.gap = "10px";


        approvedArtists.forEach(function (artist) {

            const option = document.createElement("button");

            option.type = "button";
            option.className = "artist-option";

            option.style.width = "100%";
            option.style.display = "flex";
            option.style.alignItems = "center";
            option.style.gap = "15px";
            option.style.padding = "12px";
            option.style.background = "#181818";
            option.style.border = "1px solid #333";
            option.style.color = "#fff";
            option.style.cursor = "pointer";
            option.style.textAlign = "left";
            option.style.boxSizing = "border-box";


            const image = document.createElement("img");

            image.src = artist.image;
            image.alt = artist.name;

            image.style.width = "60px";
            image.style.height = "60px";
            image.style.objectFit = "cover";
            image.style.borderRadius = "50%";
            image.style.flexShrink = "0";


            const name = document.createElement("span");

            name.textContent = artist.name;

            name.style.fontWeight = "600";
            name.style.fontSize = "15px";


            option.appendChild(image);
            option.appendChild(name);


            option.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                if (activeArtistButton) {

                    selectArtist(
                        activeArtistButton,
                        artist
                    );

                }

            });


            list.appendChild(option);

        });


        box.appendChild(header);
        box.appendChild(description);
        box.appendChild(list);

        modal.appendChild(box);

        document.body.appendChild(modal);


        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                closeArtistSelector();

            }

        });

    }


    /* ==============================
       SELECT ARTIST BUTTON
       ONE CLICK ONLY
    ============================== */

    document.addEventListener("click", function (event) {

        const button =
            event.target.closest(".artist-select-btn");

        if (!button) return;

        event.preventDefault();
        event.stopPropagation();

        openArtistSelector(button);

    });


    /* ==============================
       MAIN ARTISTS
    ============================== */

    const mainArtistsContainer =
        document.getElementById("mainArtistsContainer");

    const addMainArtist =
        document.getElementById("addMainArtist");


    if (addMainArtist && mainArtistsContainer) {

        addMainArtist.addEventListener("click", function (event) {

            event.preventDefault();

            mainArtistCount++;

            const artist =
                document.createElement("div");

            artist.className = "artist-selection";

            artist.innerHTML = `
                <label>
                    Main Artist ${mainArtistCount}
                    <span>*</span>
                </label>

                <button
                    type="button"
                    class="artist-select-btn"
                >
                    Select Artist
                </button>

                <button
                    type="button"
                    class="remove-artist-btn"
                >
                    Remove
                </button>
            `;

            mainArtistsContainer.appendChild(artist);

        });

    }


    /* ==============================
       FEATURED ARTISTS
    ============================== */

    const featuredArtistsContainer =
        document.getElementById("featuredArtistsContainer");

    const addFeaturedArtist =
        document.getElementById("addFeaturedArtist");


    if (addFeaturedArtist && featuredArtistsContainer) {

        addFeaturedArtist.addEventListener("click", function (event) {

            event.preventDefault();

            featuredArtistCount++;

            const artist =
                document.createElement("div");

            artist.className = "artist-selection";

            artist.innerHTML = `
                <label>
                    Featured Artist ${featuredArtistCount}
                    <span>*</span>
                </label>

                <button
                    type="button"
                    class="artist-select-btn"
                >
                    Select Artist
                </button>

                <button
                    type="button"
                    class="remove-artist-btn"
                >
                    Remove
                </button>
            `;

            featuredArtistsContainer.appendChild(artist);

        });

    }


    /* ==============================
       ROYALTY SPLITS
    ============================== */

    const royaltyContainer =
        document.getElementById("royaltyContributors");

    const addContributor =
        document.getElementById("addRoyaltyContributor");

    const royaltyTotal =
        document.getElementById("royaltyTotal");


    function updateRoyaltyTotal() {

        if (!royaltyContainer || !royaltyTotal) {
            return;
        }

        let total = 0;

        const percentages =
            royaltyContainer.querySelectorAll(
                'input[name="royaltyPercentage[]"]'
            );


        percentages.forEach(function (input) {

            total += parseFloat(input.value) || 0;

        });


        royaltyTotal.textContent =
            total.toFixed(2) + "%";


        if (total === 100) {

            royaltyTotal.style.color = "#00c853";

        } else {

            royaltyTotal.style.color = "#e00000";

        }

    }


    if (addContributor && royaltyContainer) {

        addContributor.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                contributorCount++;

                const contributor =
                    document.createElement("div");

                contributor.className =
                    "royalty-contributor";


                contributor.innerHTML = `

                    <h3>
                        Contributor ${contributorCount}
                    </h3>

                    <div class="form-field">

                        <label>
                            Artist / Contributor
                            <span>*</span>
                        </label>

                        <button
                            type="button"
                            class="artist-select-btn"
                        >
                            Select Artist
                        </button>

                    </div>


                    <div class="form-field">

                        <label>
                            Contributor Email
                            <span>*</span>
                        </label>

                        <input
                            type="email"
                            name="contributorEmail[]"
                            placeholder="Enter contributor email"
                            required
                        >

                    </div>


                    <div class="form-field">

                        <label>
                            Royalty Percentage (%)
                            <span>*</span>
                        </label>

                        <input
                            type="number"
                            name="royaltyPercentage[]"
                            min="0"
                            max="100"
                            step="0.01"
                            placeholder="0"
                            required
                        >

                    </div>


                    <button
                        type="button"
                        class="remove-contributor-btn"
                    >
                        Remove Contributor
                    </button>

                `;


                royaltyContainer.appendChild(
                    contributor
                );


                updateRoyaltyTotal();

            }
        );


        royaltyContainer.addEventListener(
            "input",
            function (event) {

                if (
                    event.target.matches(
                        'input[name="royaltyPercentage[]"]'
                    )
                ) {

                    updateRoyaltyTotal();

                }

            }
        );


        royaltyContainer.addEventListener(
            "click",
            function (event) {

                const remove =
                    event.target.closest(
                        ".remove-contributor-btn"
                    );

                if (!remove) return;

                event.preventDefault();

                event.stopPropagation();


                const contributor =
                    remove.closest(
                        ".royalty-contributor"
                    );


                if (contributor) {

                    contributor.remove();

                }


                updateRoyaltyTotal();

            }
        );

    }


    /* ==============================
       REMOVE ARTISTS
    ============================== */

    document.addEventListener(
        "click",
        function (event) {

            const remove =
                event.target.closest(
                    ".remove-artist-btn"
                );

            if (!remove) return;

            event.preventDefault();
            event.stopPropagation();


            const artist =
                remove.closest(
                    ".artist-selection"
                );


            if (artist) {

                artist.remove();

            }

        }
    );


    /* ==============================
       INITIAL TOTAL
    ============================== */

    updateRoyaltyTotal();

});
/* ==============================
   ARTWORK SIZE CHECK
============================== */

const artworkInput = document.querySelector('input[name="artwork"]');

if (artworkInput) {

    artworkInput.addEventListener("change", function () {

        const file = artworkInput.files[0];

        if (!file) return;

        const oldMessage =
            document.getElementById("artworkSizeMessage");

        if (oldMessage) {
            oldMessage.remove();
        }

        const message =
            document.createElement("div");

        message.id = "artworkSizeMessage";
        message.style.marginTop = "10px";
        message.style.fontWeight = "600";

        const image = new Image();

        image.onload = function () {

            const width = image.naturalWidth;
            const height = image.naturalHeight;

            if (width !== height) {

                message.textContent =
                    `✕ Artwork must be square. Uploaded: ${width} × ${height} px.`;

                message.style.color = "#e00000";

            } else if (width < 3000 || height < 3000) {

                message.textContent =
                    `✕ Artwork is too small: ${width} × ${height} px. Minimum is 3000 × 3000 px.`;

                message.style.color = "#e00000";

            } else if (width > 6000 || height > 6000) {

                message.textContent =
                    `✕ Artwork is too large: ${width} × ${height} px. Maximum is 6000 × 6000 px.`;

                message.style.color = "#e00000";

            } else {

                message.textContent =
                    `✓ Artwork accepted: ${width} × ${height} px.`;

                message.style.color = "#00c853";

            }

            artworkInput.parentElement.appendChild(message);

            URL.revokeObjectURL(image.src);

        };

        image.onerror = function () {

            message.textContent =
                "✕ Unable to read this artwork file.";

            message.style.color = "#e00000";

            artworkInput.parentElement.appendChild(message);

        };

        image.src = URL.createObjectURL(file);

    });

}