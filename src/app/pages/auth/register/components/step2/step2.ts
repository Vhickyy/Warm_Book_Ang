import { Component, model } from '@angular/core';

@Component({
  selector: 'app-step2',
  imports: [],
  templateUrl: './step2.html',
  styleUrl: './step2.css',
})
export class Step2 {
  interest = ['Finances', 'Romance', 'Sciences', 'Life', 'Ecology', 'Others'];
  step = model(0);

  changeStep(value: number) {
    this.step.set(value);
  }
}
