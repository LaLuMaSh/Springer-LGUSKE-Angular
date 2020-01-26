import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../_services/board.service';
import {Board, BoardLocation} from '../../_model/board';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  result: Board;
  ready = false;
  location: BoardLocation;

  constructor(private board: BoardService, private activatedRoute: ActivatedRoute) {
    this.location = new BoardLocation();
    this.location.dimensions = +this.activatedRoute.snapshot.paramMap.get('dimensions');
    this.location.x = +this.activatedRoute.snapshot.paramMap.get('x');
    this.location.y = +this.activatedRoute.snapshot.paramMap.get('y');
  }

  ngOnInit() {
    this.board.getBoard(this.location.x, this.location.y, this.location.dimensions).subscribe(value => {
      this.result = value;
      this.ready = true;
    });
  }
}
