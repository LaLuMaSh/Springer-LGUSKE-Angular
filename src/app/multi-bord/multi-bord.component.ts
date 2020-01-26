import { Component, OnInit } from '@angular/core';
import {Board, BoardLocation} from '../../_model/board';
import {BoardService} from '../../_services/board.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multi-bord',
  templateUrl: './multi-bord.component.html',
  styleUrls: ['./multi-bord.component.css']
})
export class MultiBordComponent implements OnInit {
  results: Board[];
  ready = false;
  location: BoardLocation;

  constructor(private board: BoardService, private activatedRoute: ActivatedRoute) {
    this.location = new BoardLocation();
    this.location.dimensions = +this.activatedRoute.snapshot.paramMap.get('dimensions');
    this.location.x = +this.activatedRoute.snapshot.paramMap.get('x');
    this.location.y = +this.activatedRoute.snapshot.paramMap.get('y');
  }

  ngOnInit() {
    this.board.getAllBoards(this.location.x, this.location.y, this.location.dimensions).subscribe(value => {
      this.results = value;
      this.ready = true;
    });
  }
}
