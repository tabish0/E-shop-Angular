import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = []; // Define a property to store the fetched product list

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.escuelajs.co/api/v1/products/').subscribe((data: any) => {
      this.productList = data; // Assign the fetched data to the component property
    });
  }
}
