import { Component } from '@angular/core';



@Component({
  selector: 'app-counter',
  template: `
   <h3>Counter {{counter}}</h3>
    <button (click)="incrementBy(1)">Agregar 1</button>
    <button (click)="resetCounter()">Reset Counter</button>
    <button (click)="incrementBy(-1)">Disminuir 1</button>

  `,
})

export class CounterComponent {
  public counter: number = 10;

  public incrementBy(data: number): void {
    this.counter += data;
  }

  public resetCounter() {
    this.counter = 10;
  }
}
