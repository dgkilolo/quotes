import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  count: number; mostUpvote: number; likes: number;   
  mostLikes() {
    this.mostUpvote = this.quotes[0].upVote
    for (this.count = 0; this.count < this.quotes.length; this.count ++) {
      this.likes = this.quotes[this.count].upVote;
      if(this.likes > this.mostUpvote) {
        this.mostUpvote = this.likes
      }
    }
    return this.mostUpvote
  }
  upVote(index){
    this.quotes[index].upVote = this.quotes[index].upVote +1
  }
  downVote(index){
    this.quotes[index].downVote = this.quotes[index].downVote +1
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }  
  quotes: Quote[] = [
    new Quote ("If you steal from one author it's plagiarism; if you steal from many it's research.", "Wilson Mizner", "Chaka", new Date()),    
    new Quote ("To a great mind nothing is little.", "Sherlock Holmes", "David", new Date()),
    new Quote ("If you like a book don't meet the author.", "Raymond Chanlder", "Kevin", new Date()),
    new Quote ("The most important thing in life is to stop saying 'I wish' and start saying 'I will'.", "Charles Dickens", "Martin", new Date()),
    new Quote ("Afrer all is said and done a lot will have been said than done.", "Sonya Parker", "Brenda", new Date()),   
  ];
  addNewQuote (quote) {    
    this.quotes.unshift(quote)
  }
  constructor() { }
  ngOnInit(): void {
  }
}
