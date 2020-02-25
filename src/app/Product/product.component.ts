import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  newProduct = "";
  newQuantity = null;
  products = [
    {
      product: "Moto G5",
      quantity: 2
    },
    {
      product: "Racold Geyser",
      quantity: 3
    }
  ];

  @Output() obj = new EventEmitter<object>();

  onClick() {
    let newJSON = {
      product: this.newProduct,
      quantity: this.newQuantity
    };
    this.products.push(newJSON);

    this.obj.emit(newJSON);
    this.newProduct = "";
    this.newQuantity = null;
    // console.log(this.recentProduct + " " + this.recentQuantity)
  }
}
