import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentpageComponent } from './commentpage.component';

describe('CommentpageComponent', () => {
  let component: CommentpageComponent;
  let fixture: ComponentFixture<CommentpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
