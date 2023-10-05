import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTitleComponent } from './meu-title.component';

describe('MeuTitleComponent', () => {
  let component: MeuTitleComponent;
  let fixture: ComponentFixture<MeuTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuTitleComponent]
    });
    fixture = TestBed.createComponent(MeuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
