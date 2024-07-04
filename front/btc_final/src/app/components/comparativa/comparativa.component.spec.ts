import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativaComponent } from './comparativa.component';

describe('ComparativaComponent', () => {
  let component: ComparativaComponent;
  let fixture: ComponentFixture<ComparativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparativaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
