import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizadoComponent } from './aprendizado.component';

describe('AprendizadoComponent', () => {
  let component: AprendizadoComponent;
  let fixture: ComponentFixture<AprendizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendizadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
