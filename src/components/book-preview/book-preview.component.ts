import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: any;

  constructor() {}

  ngOnInit(): void {}
}
