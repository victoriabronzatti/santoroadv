import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSociosComponent } from './update-socios.component';

describe('UpdateSociosComponent', () => {
  let component: UpdateSociosComponent;
  let fixture: ComponentFixture<UpdateSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
