import { Component, input } from '@angular/core';
import { IBook } from '../../../types';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = input.required<IBook>();
}
