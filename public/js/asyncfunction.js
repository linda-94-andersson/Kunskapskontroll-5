async function loadCats() {
    const url = new URL(settings.url);

    url.searchParams.append("limit", settings.limit);
    url.searchParams.append("page", settings.page);
    url.searchParams.append("order", settings.order);

    pageIndicator.textContent = `Showing page ${settings.page}`;
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

loadCats();

export { loadCats }