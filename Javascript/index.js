$(document).ready(function () {
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

const pageIndicator = document.querySelector(".page-indicator");
const showContent = document.querySelector(".show-content");

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.thecatapi.com/v1/images/search",
    "method": "GET",
    "headers": {
        "x-api-key": "84d558ca-0134-4d7f-bb71-df9000a7f061"
    },
    "page": 0,
    "limit": 12,
    "order": "asc"
}

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

function showImg(data) {
    showContent.textContent = null;

    data.forEach(({url}) => {
        const img = document.createElement("img");
        img.src = url;
        showContent.append(img);
    })
}

async function loadCats() {
    const url = new URL(settings.url);

    url.searchParams.append("limit", settings.limit);
    url.searchParams.append("page", settings.page);
    url.searchParams.append("order", settings.order);

    pageIndicator.textContent = `Current page ${settings.page}`;
    showContent.textContent = "Loading page...";

    toggleButtons(true);

    try {
        const response = await fetch(url, {
            headers: {
                "x-api-key": "84d558ca-0134-4d7f-bb71-df9000a7f061",
            },
        });
        const data = await response.json();
        showImg(data);
    } catch (err) {
        showContent.textContent = "Something went wrong while fetching data from the server";
    } finally {
        toggleButtons(false);
        previous.disabled = settings.page === 0;
    }
}

function toggleButtons(disabled) {
    previous.disabled = disabled;
    next.disabled = disabled;
}

previous.addEventListener("click", () => {
    settings.page--;
    loadCats();
});

next.addEventListener("click", () => {
    settings.page++;
    loadCats();
});

loadCats(); 