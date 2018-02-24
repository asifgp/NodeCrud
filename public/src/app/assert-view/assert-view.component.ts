import { Component, OnInit } from '@angular/core';
import { HTTPCRUDService } from '../HTTPCrudClient/http.crud.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-assert-view',
  templateUrl: './assert-view.component.html',
  styleUrls: ['../app.component.css']
})

export class AssertViewComponent implements OnInit {

  datagrid: GridColumns[];
  report: string;
  constructor(private __http: HTTPCRUDService) {
    this.report = 'Null';
    this.datagrid = [
//      { Serial_Number : '001' , Item_Name : 'itemone' , Product_Name : 'prodone' , Make : '0215' },
//      { Serial_Number : '002' , Item_Name : 'itemtwo' , Product_Name : 'prodone' , Make : '0215' }
    ];
  }

  ngOnInit() {
    this.__http.getTableData('http://localhost:8008/detail/show').subscribe(
//      data => this.datagrid = <GridColumns[]> data,
      data => {
        console.log(JSON.stringify(data));
        this.datagrid = <GridColumns[]> data;
        console.log( 'Successfully accepted' );
       } ,
      error => {
        this.report = 'Error Occured';
        console.log('This is an error that occurred:', error.message);
       }
      );
  }

  private errorHaandling(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    }
  }
}

export interface GridColumns {
//  Serial_Number: string;
//  Item_Name: string;
//  Product_Name: string;
//  Make: string;
//  userId: number;
//  id: number;
//  title: string;
//  body: string;
  personname: string;
  email: string;
  phno: string;
}

