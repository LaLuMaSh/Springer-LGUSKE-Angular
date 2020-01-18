import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  public getBoard(x: number, y: number, dimensions: number): Observable<number[][]> {
    return this.http.get<number[][]>('http://localhost:8080/api/board/get?x=' + x + '&y=' + y + '&dimensions=' + dimensions);
  }
}
