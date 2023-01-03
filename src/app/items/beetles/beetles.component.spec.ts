import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetlesComponent } from './beetles.component';

describe('BeetlesComponent', () => {
  let component: BeetlesComponent;
  let fixture: ComponentFixture<BeetlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeetlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeetlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
