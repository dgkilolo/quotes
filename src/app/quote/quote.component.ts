import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote ("This is the first quote.", "Wise Man")
  ];

  addNewQuote (quote) {
    
    this.quotes.unshift(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
