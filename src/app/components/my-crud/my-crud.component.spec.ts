import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCRUDComponent } from './my-crud.component';

describe('MyCRUDComponent', () => {
  let component: MyCRUDComponent;
  let fixture: ComponentFixture<MyCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
