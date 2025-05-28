export const switchPrimeReactTheme = (theme) => {
    const themeUrl =
        theme === "dark"
            ? "https://unpkg.com/primereact/resources/themes/soho-dark/theme.css"
            : "https://unpkg.com/primereact/resources/themes/lara-light-blue/theme.css";

    let link = document.getElementById("primereact-theme");

    if (link) {
        link.href = themeUrl;
    } else {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.id = "primereact-theme";
        link.href = themeUrl;
        document.head.appendChild(link);
    }
}