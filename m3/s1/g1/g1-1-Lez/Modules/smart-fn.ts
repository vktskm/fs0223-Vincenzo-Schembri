export function call(url:string):Promise<Response>{
    return fetch(url).then(res => res.json());
}

export function $(selettore:string):Element|null{
    return document.querySelector(selettore);
}
