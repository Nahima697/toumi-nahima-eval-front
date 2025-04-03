import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardListComponent } from './text-card-list.component';

describe('TextCardListComponent', () => {
  let component: TextCardListComponent;
  let fixture: ComponentFixture<TextCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
