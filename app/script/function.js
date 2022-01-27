function toggleButtons(disabled) {
    previous.disabled = disabled;
    next.disabled = disabled;
}

function showImg(data) {
    showContent.textContent = null;

    data.forEach(({ url }) => {
        const img = document.createElement("img");
        img.src = url;
        showContent.append(img);
    });
}