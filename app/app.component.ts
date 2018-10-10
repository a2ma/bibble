import { Component } from '@angular/core';

@Component({
    // selector is name used to refer to component in HTML
    selector: 'app-main',
    template: `
              <h2>{{title}}</h2>
    `
})

export class AppComponent {
    title = 'Bibble';
}