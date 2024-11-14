import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubjectComponent } from './newsubject.component';

describe('NewsubjectComponent', () => {
  let component: NewsubjectComponent;
  let fixture: ComponentFixture<NewsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
