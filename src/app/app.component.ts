import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Demonstartion of passing data between components, styles demo";

  total = "";
  rcObj($event) {
    this.total = `Recently Added ${$event.product} - ${$event.quantity}`;
  }
}
