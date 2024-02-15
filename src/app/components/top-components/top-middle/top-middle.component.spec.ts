import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMiddleComponent } from './top-middle.component';

describe('TopMiddleComponent', () => {
  let component: TopMiddleComponent;
  let fixture: ComponentFixture<TopMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
