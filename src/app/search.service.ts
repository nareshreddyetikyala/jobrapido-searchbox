import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  //sending with http call
  // here calling api there are mutliple options, fetch(), fromFetch()(rxjs), Graphql
  searchComments(query: string): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {
      params: { q: query }
    });
  }
}
