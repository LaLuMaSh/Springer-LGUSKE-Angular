import {Component, OnInit} from '@angular/core';
import {BoardLocation} from '../../_model/board';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {
  location: BoardLocation;
  group = new FormGroup({
    x: new FormControl('', [Validators.min(0)]),
    y: new FormControl('', [Validators.min(0)]),
    dimensions: new FormControl('', [Validators.min(0)]),
  }, Validators.required);
  constructor(private router: Router) { }

  ngOnInit() {
    this.location = new BoardLocation();
  }

  saveEntry(f: FormGroupDirective) {
  }

  navigate(location: BoardLocation, url: string) {
    this.router.navigate([url, location.dimensions, location.x, location.y]);
  }

  isValid(): boolean {
    return !(this.location.x >= this.location.dimensions ||
      this.location.y >= this.location.dimensions ||
      this.location.x < 0 ||
      this.location.y < 0);
  }
}
