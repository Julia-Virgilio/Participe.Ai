import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclagemComponent } from './reciclagem.component';

describe('ReciclagemComponent', () => {
  let component: ReciclagemComponent;
  let fixture: ComponentFixture<ReciclagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciclagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciclagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
