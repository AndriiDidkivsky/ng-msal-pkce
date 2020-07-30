import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'about',
  styles: [
    'h1 {text-align: center}'
  ],
  template: `
    <h1>Hello i'm blank component</h1>
  `
})
export class AboutComponent {

  constructor() {
  }

}
