import { Component, ElementRef, model, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step1',
  imports: [RouterLink],
  templateUrl: './step1.html',
  styleUrl: './step1.css',
})
export class Step1 {
  fileEl = viewChild<ElementRef<HTMLInputElement>>('fileEl');
  selectedFile: File | null = null;
  imagePreview = signal<string>('');
  step = model(0);

  selectFile() {
    this.fileEl()?.nativeElement.click();
  }

  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.set(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  changeStep() {
    this.step.set(1);
  }
}
