import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { interval } from "rxjs";

@Component({
  templateUrl: './counter.component.html',
  styles: `
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px
    }
  `,
  })
export class CounterPageCompornent {
  counter = 10;
  counterSignal = signal(10)

  constructor() {}

  increase(value: number){
    this.counter += value
    this.counterSignal.update((current => current + value))
  }

  less(value: number){
    this.counter -= value;
    // this.counterSignal.set(this.counterSignal() - value)
    this.counterSignal.update((current) =>current - value )

  }

  reboot(){
    this.counter  = 0;
    this.counterSignal.set(0)
  }
}
