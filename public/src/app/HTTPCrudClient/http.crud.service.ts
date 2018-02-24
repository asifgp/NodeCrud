import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridColumns } from '../assert-view/assert-view.component';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HTTPCRUDService {
//    private __dataurl = 'https://jsonplaceholder.typicode.com/posts';
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
        })
    };

  constructor(private http: HttpClient) { }

    getTableData(dataurl: string) {
        // Correct
        return this.http.get<GridColumns[]>(dataurl);
    }

    setTableData(postData: GridColumns, url: string): Observable<GridColumns> {
        return this.http.post<GridColumns>(url, postData, this.httpOptions).pipe();
    }
}


