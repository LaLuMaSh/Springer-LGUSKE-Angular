import { Component, OnInit } from '@angular/core';
import {Board} from '../../_model/board';
import {BoardService} from '../../_services/board.service';

@Component({
  selector: 'app-multi-bord',
  templateUrl: './multi-bord.component.html',
  styleUrls: ['./multi-bord.component.css']
})
export class MultiBordComponent implements OnInit {
  results: Board[];

  constructor(private board: BoardService) { }

  ngOnInit() {
    this.board.getAllBoards(0, 0, 5).subscribe(value => {
      this.results = value;
    });
  }

}
