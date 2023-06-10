import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, OnDestroy{


  sub!:Subscription;//oggetto che sottoscriverà l'observable
  conteggio!:number;//il valore dell'observable (observer)

  ngOnInit(): void {

    const intervallo = new Observable(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);//next emette il valore che si trova tra le parentesi
        if(count === 5){
          observer.complete();//completo l'observable se valore == 5
          console.log('Observer Completato');
        }
        if(count > 3){//definisco un errore
          observer.error(new Error('Count è troppo grande'));//errore ma l'observable prosegue
        }
        count++;
      },1000)
    });


    this.sub = intervallo.pipe(map((conta) => {//mappo l'observable
      this.conteggio = Number(conta)//salvo il dato proveniente dall'observable
      return `Siamo al numero ${conta}`;//modifico il dato prima dell'output
    }))
    .subscribe({
      next: (numero) => {
        console.log(numero)
      },
      error: (err) => console.error(err),//senza questo l'errore è bloccante
      complete: () => console.log('complete')

    })

  }

  ngOnDestroy(): void {//se il componente viene distrutto
    this.sub.unsubscribe();//termino l'iscrizione
    console.log('Observable scaricato');
  }
}
