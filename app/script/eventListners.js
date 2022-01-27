// import { loadCats } from "./asyncfunction.js";

previous.addEventListener("click", () => {
    settings.page--;
    loadCats();
});

next.addEventListener("click", () => {
    settings.page++;
    loadCats();
});