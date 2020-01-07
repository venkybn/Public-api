import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl = "https://newsapi.org/v2/everything?q=";
  apiKey = "b073482e3ff3470ba8ef711be9f47d78"
  private getnewsContentUrl = this.apiUrl;
  constructor(private http: HttpClient) { }

  getNewsContent(body): Observable<any> {
    return this.http.get<any>(this.getnewsContentUrl + body + '&apiKey=' + this.apiKey).
      pipe(map(this.extractObject)
      );
  }
  private extractObject(res: any) {
    const body = res;
    console.log(body);
    return body || [];
  }

}
