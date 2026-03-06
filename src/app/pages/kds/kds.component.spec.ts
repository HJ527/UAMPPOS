import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDSComponent } from './kds.component';

describe('KDSComponent', () => {
  let component: KDSComponent;
  let fixture: ComponentFixture<KDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KDSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
