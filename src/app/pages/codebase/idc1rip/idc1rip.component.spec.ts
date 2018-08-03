import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Idc1ripComponent } from './idc1rip.component';

describe('Idc1ripComponent', () => {
  let component: Idc1ripComponent;
  let fixture: ComponentFixture<Idc1ripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Idc1ripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Idc1ripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
