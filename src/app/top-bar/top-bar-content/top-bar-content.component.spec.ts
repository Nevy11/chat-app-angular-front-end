import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarContentComponent } from './top-bar-content.component';

describe('TopBarContentComponent', () => {
  let component: TopBarContentComponent;
  let fixture: ComponentFixture<TopBarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
