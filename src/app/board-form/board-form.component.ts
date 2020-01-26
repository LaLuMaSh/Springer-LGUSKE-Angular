import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardLocation} from '../../_model/board';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {
  @Input() location: BoardLocation;
  @Output() locationChange = new EventEmitter<BoardLocation>();
  group = new FormGroup({
    x: new FormControl('', [Validators.min(0)]),
    y: new FormControl('', [Validators.min(0)]),
    dimensions: new FormControl('', [Validators.min(0)]),
  }, Validators.required);
  constructor() { }

  ngOnInit() {
    this.location = new BoardLocation();
  }

  saveEntry(f: FormGroupDirective) {
  }
}
