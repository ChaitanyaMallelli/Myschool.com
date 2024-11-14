import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssubjectsComponent } from './classsubjects.component';

describe('ClasssubjectsComponent', () => {
  let component: ClasssubjectsComponent;
  let fixture: ComponentFixture<ClasssubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasssubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasssubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
