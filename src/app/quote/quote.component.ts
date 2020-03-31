import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  quotes: Quote[] = [
    new Quote ("This is the first quote.", "Wise Man", "A Man", new Date(2019,2,14))
  ];

  addNewQuote (quote) {
    
    this.quotes.unshift(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
