import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'home',
  styles: [
    'h1 {text-align: center}',
    'p {max-width: 700px}',
    'button {background: indianred; border: none; box-shadow: none; color: white; padding: 5px; width: 150px; outline: none}',
    'button:active {background: darkred; outline: indianred}',
    '.content {display: flex; flex-direction: column; align-items: center}'
  ],
  template: `
    <div class="content">
      <h1>Hello i'm guarded component</h1>
      <button type="button" (click)="getProfile()">GET PROFILE</button>
      <div *ngIf="res">
        <b>Response:</b>
        <p>{{res | json}}</p>
      </div>

    </div>
  `
})
export class HomeComponent {
  res: any = null;

  constructor(private http: HttpClient) {
  }

  getProfile() {
    this.http.get("https://graph.microsoft.com/v1.0/me").subscribe(res => {
      this.res = res;
    }, err => {
      console.error(err)
    })
  }
}
