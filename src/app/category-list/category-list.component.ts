import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  private categoryIdSubject = new BehaviorSubject<number>(1);
  public categoryId$ = this.categoryIdSubject.asObservable();
  categoryList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.escuelajs.co/api/v1/categories/').subscribe((data: any) => {
      this.categoryList = data; 
    });
  }
}
