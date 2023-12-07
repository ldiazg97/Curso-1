import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Bases Angular';
  public counter: number = 10;

  public incrementBy(data: number): void {
    this.counter += data;
  }

  public resetCounter() {
    this.counter = 10;
  }

}
