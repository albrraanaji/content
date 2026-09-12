const CONTENT_URL =
    "https://cdn.jsdelivr.net/gh/albrraanaji/content@main/test.json";

async function loadHomeContent() {
    const response = await fetch(CONTENT_URL);

    if (!response.ok) {
        throw new Error("Failed to load content");
    }

    const content = await response.json();

    document.querySelector("#document-name").textContent =
        content.seo.title;

    document.querySelector("#description").textContent =
        content.seo.description;

    document.querySelector("#hero-cta").textContent =
        content.hero.cta;
}

loadHomeContent();
