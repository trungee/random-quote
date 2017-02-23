import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<img width="216" height="69" src="http://cdn.axonactive.com/wp-content/themes/axonactive_theme/resources/img/logo_aavn.png" alt="Axon Active Logo">
    <h1>Random Quote</h1>
    <random-quote></random-quote>
  `
})
export class AppComponent { }
