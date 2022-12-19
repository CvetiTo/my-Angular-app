import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileimgComponent } from './profile.component';

describe('FileimgComponent', () => {
  let component: FileimgComponent;
  let fixture: ComponentFixture<FileimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
