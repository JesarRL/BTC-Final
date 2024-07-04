import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogocompletoComponent } from './catalogocompleto.component';

describe('CatalogocompletoComponent', () => {
  let component: CatalogocompletoComponent;
  let fixture: ComponentFixture<CatalogocompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogocompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
