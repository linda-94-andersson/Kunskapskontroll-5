// const catUrl = "https://api.thecatapi.com/v1/images/search";
// const api = "9d39b0f1-0d9d-4153-a75e-eff9234ec1f0";
// let limit = 12;
// let page = 0;
// const order = "asc";

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

const pageIndicator = document.querySelector(".page-indicator");
const results = document.querySelector(".results");

function toggleButtons(disabled) {
    previous.disabled = disabled;
    next.disabled = disabled;
}

const getCats = async () => {
    const url = new URL(catUrl);

    url.searchParams.append("limit", limit);
    url.searchParams.append("page", page);
    url.searchParams.append("order", order);
    console.log(url);

    pageIndicator.textContent = `Showing page ${page}`;
    results.textContent = "Loading...";

    toggleButtons(true);

    try {
        const response = await fetch(url, {
            headers: {
                "x-api-key": api,
            },
        });
        const data = await response.json();
        showCats(data);
    } catch (err) {
        results.textContent =
            "Something went wrong while fetching data from the server";
    } finally {
        toggleButtons(false);
        previous.disabled = page === 0;
    }
}

function showCats(data) {
    results.textContent = null;

    data.forEach(({ url }) => {
        const $img = document.createElement("img");
        $img.src = url;
        results.append($img);
    });
}

previous.addEventListener("click", () => {
    page--;
    getCats();
});

next.addEventListener("click", () => {
    page++;
    getCats();
});
