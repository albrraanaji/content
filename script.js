const CONTENT_URL =
    "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/freologic-content@main/home.json";

async function loadHomeContent() {
    const response = await fetch(CONTENT_URL);

    if (!response.ok) {
        throw new Error("Failed to load content");
    }

    const content = await response.json();

    document.querySelector("#hero-title").textContent =
        content.hero.title;

    document.querySelector("#hero-description").textContent =
        content.hero.description;

    document.querySelector("#hero-cta").textContent =
        content.hero.cta;
}

loadHomeContent();
