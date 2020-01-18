import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../_services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  result: number[][];

  constructor(private board: BoardService) { }

  ngOnInit() {
    this.board.getBoard(0, 0, 5).subscribe(value => {
      console.log(value);
      this.result = value;
    });
  }
}
