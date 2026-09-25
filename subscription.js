const PRICES = {
    artist: 35000,
    label: 79900
};

function getDiscount(purchaseCount) {
    if (purchaseCount === 0) return 30;
    if (purchaseCount === 1) return 15;
    return 0;
}

function calculatePrice(type, purchaseCount) {
    const originalPrice = PRICES[type];

    if (!originalPrice) {
        throw new Error("Invalid subscription type.");
    }

    const discount = getDiscount(purchaseCount);

    const finalPrice = Math.round(
        originalPrice * (100 - discount) / 100
    );

    return {
        originalPrice,
        discount,
        finalPrice
    };
}

function showPrice(type, purchaseCount, messageId) {
    const result = calculatePrice(type, purchaseCount);
    const message = document.getElementById(messageId);

    if (!message) return;

    message.textContent =
        `${result.discount}% off — Pay R${(result.finalPrice / 100).toFixed(2)}`;
}

const params = new URLSearchParams(window.location.search);
const selectedType = params.get("type");

const purchaseCount = 0;

/*
   Identify the two subscription sections
   using their existing payment buttons.
*/

const artistButton = document.getElementById("artistPayButton");
const labelButton = document.getElementById("labelPayButton");

const artistSection = artistButton
    ? artistButton.closest("section, .card, .subscription-card, .form-card, div")
    : null;

const labelSection = labelButton
    ? labelButton.closest("section, .card, .subscription-card, .form-card, div")
    : null;


/* Artist selected */

if (selectedType === "artist") {

    if (labelSection) {
        labelSection.style.display = "none";
    }

    showPrice(
        "artist",
        purchaseCount,
        "artistDiscountMessage"
    );
}


/* Record Label selected */

else if (selectedType === "label") {

    if (artistSection) {
        artistSection.style.display = "none";
    }

    showPrice(
        "label",
        purchaseCount,
        "labelDiscountMessage"
    );
}


/* Payment buttons */

if (artistButton) {
    artistButton.addEventListener("click", function () {
        alert("Artist payment will be connected to Paystack.");
    });
}

if (labelButton) {
    labelButton.addEventListener("click", function () {
        alert("Record Label payment will be connected to Paystack.");
    });
}