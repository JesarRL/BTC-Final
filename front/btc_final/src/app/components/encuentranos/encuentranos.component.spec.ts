import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentranosComponent } from './encuentranos.component';

describe('EncuentranosComponent', () => {
  let component: EncuentranosComponent;
  let fixture: ComponentFixture<EncuentranosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuentranosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentranosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
