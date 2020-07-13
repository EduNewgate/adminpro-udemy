import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subs: Subscription;

  constructor() {

    this.subs = this.devuelveObservable().pipe().subscribe(number => {
      console.log('Subs ', number);
    }, error => {
      console.log('Error en el obs ', error);
    }, () => {
      console.log('Terminó');
    });

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    console.log('La página se va a cerrar');
  }

  devuelveObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;

        const response = {
          valor: contador
        }

        observer.next(response);

        /*if (contador === 3) {
          clearInterval(interval);
          observer.complete();
        }*/
      }, 1000);
    }).pipe(
      map(res => {
        // Tratamos la respuesta según nos convenga.
        return res.valor;
      }),
      filter( (valor, index) => {
        if (valor % 2 === 0) {
          // Par
          return false;
        } else {
          // Impar
          return true;
        }
      })
    );
  }

}
