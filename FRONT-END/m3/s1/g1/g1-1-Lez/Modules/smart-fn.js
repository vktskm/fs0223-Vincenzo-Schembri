export function call(url) {
    return fetch(url).then(res => res.json());
}
export function $(selettore) {
    return document.querySelector(selettore);
}