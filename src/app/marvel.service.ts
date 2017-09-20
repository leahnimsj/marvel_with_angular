import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private characterURL: string = "https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=c960db365b5eeb982f1e87b9d5d10cf2&hash=7afae6072081e592c4a2b9125b28b448"
  

  constructor(private http: Http) { }

  getHeroes(): Observable<any> {
    
        return this.http.get(this.characterURL)
          .map(result => {
            return result.json()
          })
    
      }

  searchHeroes(searchTerm): Observable<any> {
    
        return this.http.get(this.characterURL + "&nameStartsWith=" + searchTerm )
          .map(result => {
            return result.json()
          })
    
      }



}
