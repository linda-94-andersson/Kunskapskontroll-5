// For random cat img as background 
const backgroundSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.thecatapi.com/v1/images/search",
    "method": "GET",
    "headers": {
        "x-api-key": "84d558ca-0134-4d7f-bb71-df9000a7f061"
    },
    "limit": 1,
    "order": "random",
    "page": 0
}

function showBackgroundImg(data) {
    const bodySelector = document.querySelector("body");

    data.forEach(({ url }) => {
        const img = document.createElement("img");
        img.className = "background-img";
        img.src = url;
        bodySelector.append(img);
    });
}

async function loadCatBackground() {
    const url = new URL(backgroundSettings.url);

    url.searchParams.append("limit", backgroundSettings.limit);
    url.searchParams.append("order", backgroundSettings.order);
    url.searchParams.append("page", backgroundSettings.page);

    try {
        const response = await fetch(url, {
            headers: {
                "x-api-key": "84d558ca-0134-4d7f-bb71-df9000a7f061",
            },
        });
        const data = await response.json();
        showBackgroundImg(data);
    } catch (err) {
        console.log("Something went wrong while fetching data from the server");
    }
}

loadCatBackground();

// export { loadCatBackground }

// import { loadCatBackground } from "./background.js";