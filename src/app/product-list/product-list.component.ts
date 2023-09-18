import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = [];
  categoryId: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://api.escuelajs.co/api/v1/products/')
      .subscribe((data: any) => {
        this.productList = data;
        this.productList = this.productList.filter(
          (product) => product.category.id === this.categoryId
        );
      });
  }
}
