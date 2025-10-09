import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  activeStep = signal(0);

  selectedFile = signal<File | null>(null);
  imagePreview = signal<string>('');

  private fb = inject(FormBuilder);
  registerForm = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
  });

  registerUser() {
    console.log(this.registerForm.value);
  }

  handleFileSelection(file: File) {
    this.selectedFile.set(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview.set(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }
}
