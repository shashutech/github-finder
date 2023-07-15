import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiUserCardComponent } from './multi-user-card.component';

describe('MultiUserCardComponent', () => {
  let component: MultiUserCardComponent;
  let fixture: ComponentFixture<MultiUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
