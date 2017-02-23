
import { Quote } from './quote.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuoteService {

  private quotes: Quote[];
  private baseUrl = 'https://world-quotes.firebaseio.com';

  constructor(private http: Http) { }

  private getRandomIndex(): number {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return randomIndex;
  }

  private getRandomQuote() {
    return this.quotes[this.getRandomIndex()];
  }

  generateRandomQuotes() {
    return this.http.get(`${this.baseUrl}/quotes.json`)
      .toPromise()
      .then(response => response.json());
  }

}
