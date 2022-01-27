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