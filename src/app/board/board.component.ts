import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../_services/board.service';
import {Board} from '../../_model/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  result: Board;

  constructor(private board: BoardService) { }

  ngOnInit() {
    this.board.getBoard(0, 0, 5).subscribe(value => {
      console.log(value);
      this.result = value;
    });
  }
}
