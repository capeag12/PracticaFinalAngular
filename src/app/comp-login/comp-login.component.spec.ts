import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLoginComponent } from './comp-login.component';

describe('CompLoginComponent', () => {
  let component: CompLoginComponent;
  let fixture: ComponentFixture<CompLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
