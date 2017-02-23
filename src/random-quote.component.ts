import { Component, Inject } from '@angular/core';
import { QuoteService } from './quote.service';
import { Quote } from './quote.model';

@Component({
  selector: 'random-quote',
  // template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  template: '...'
})
export class RandomQuoteComponent {

  private quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuotes().then(result => console.log(result));
  }

}
