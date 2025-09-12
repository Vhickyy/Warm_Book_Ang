import { Component, model } from '@angular/core';

@Component({
  selector: 'app-step3',
  imports: [],
  templateUrl: './step3.html',
  styleUrl: './step3.css',
})
export class Step3 {
  step = model(0);

  changeStep(value: number) {
    this.step.set(value);
  }
}
