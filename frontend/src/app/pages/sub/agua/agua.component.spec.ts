import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaComponent } from './agua.component';

describe('AguaComponent', () => {
  let component: AguaComponent;
  let fixture: ComponentFixture<AguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
