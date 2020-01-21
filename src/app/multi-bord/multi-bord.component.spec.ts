import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBordComponent } from './multi-bord.component';

describe('MultiBordComponent', () => {
  let component: MultiBordComponent;
  let fixture: ComponentFixture<MultiBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
