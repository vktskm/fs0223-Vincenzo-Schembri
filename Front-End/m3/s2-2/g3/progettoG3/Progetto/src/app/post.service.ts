import { Obj } from './Module/obj';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

  getObjects(): Obj[]{
    const myArray = [
      {
        "id": 1,
        "body": "Bitcoin è la prima criptovaluta decentralizzata, creata nel 2009 da uno sviluppatore anonimo con lo pseudonimo di Satoshi Nakamoto.",
        "title": "Introduzione a Bitcoin",
        "active": true,
        "type": "education"
      },
      {
        "id": 2,
        "body": "Ethereum è una piattaforma di contratti intelligenti che ha introdotto i token non fungibili (NFT) e aperto nuove possibilità per lo sviluppo di applicazioni decentralizzate.",
        "title": "L'innovazione di Ethereum",
        "active": true,
        "type": "politic"
      },
      {
        "id": 3,
        "body": "Blockchain è la tecnologia sottostante alle criptovalute che consente la registrazione sicura e trasparente delle transazioni in un registro pubblico immutabile.",
        "title": "Il potenziale della tecnologia blockchain",
        "active": true,
        "type": "news"
      },
      {
        "id": 4,
        "body": "Ripple è una criptovaluta progettata per semplificare le transazioni finanziarie internazionali e ridurre i costi di trasferimento di denaro.",
        "title": "Il ruolo di Ripple nel settore delle transazioni internazionali",
        "active": true,
        "type": "news"
      },
      {
        "id": 5,
        "body": "Litecoin è una criptovaluta che mira a offrire transazioni più veloci e costi di transazione inferiori rispetto a Bitcoin.",
        "title": "Le caratteristiche di Litecoin",
        "active": true,
        "type": "news"
      },
      {
        "id": 6,
        "body": "Dogecoin è una criptovaluta che è nata come scherzo ma ha guadagnato popolarità grazie al suo logo raffigurante un cane Shiba Inu e alla comunità di sostenitori.",
        "title": "L'ascesa di Dogecoin come fenomeno di internet",
        "active": true,
        "type": "news"
      },
      {
        "id": 7,
        "body": "Cardano fa schifo.",
        "title": "Cardano: SCHIFO",
        "active": false,
        "type": "news"
      },
      {
        "id": 8,
        "body": "Stellar è una piattaforma di pagamento basata sulla tecnologia blockchain che mira a semplificare le transazioni finanziarie internazionali e promuovere l'inclusione finanziaria.",
        "title": "Stellar: trasferimenti di denaro veloci e convenienti",
        "active": true,
        "type": "news"
      },
      {
        "id": 9,
        "body": "Monero è una criptovaluta focalizzata sulla privacy che offre transazioni anonime e non tracciabili.",
        "title": "La privacy di Monero",
        "active": true,
        "type": "news"
      },
      {
        "id": 10,
        "body": "NEO è una piattaforma blockchain che si propone di creare una \"nuova economia intelligente\" abilitando la digitalizzazione degli asset tramite contratti intelligenti.",
        "title": "L'ecosistema NEO per la digitalizzazione degli asset",
        "active": true,
        "type": "news"
      }
    ]
    return myArray;
  }
}
