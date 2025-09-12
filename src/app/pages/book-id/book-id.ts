import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Button } from '../../UI/button/button';
import { Book } from '../../components/book/book';
import { books } from '../../../data/books';

@Component({
  selector: 'app-book-id',
  imports: [Nav, Button, Book],
  templateUrl: './book-id.html',
  styleUrl: './book-id.css',
})
export class BookId {
  bookData = books;
}
