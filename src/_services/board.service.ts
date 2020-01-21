import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../_model/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private httpLocalhost8080ApiBoard = 'http://localhost:8080/api/board/';

  constructor(private http: HttpClient) { }

  public getBoard(x: number, y: number, dimensions: number): Observable<Board> {
    return this.http.get<Board>(this.httpLocalhost8080ApiBoard + 'get?x=' + x + '&y=' + y + '&dimensions=' + dimensions);
  }
  public getAllBoards(x: number, y: number, dimensions: number): Observable<Board[]> {
    return this.http.get<Board[]>(this.httpLocalhost8080ApiBoard + 'getAll?x=' + x + '&y=' + y + '&dimensions=' + dimensions);
  }
}
