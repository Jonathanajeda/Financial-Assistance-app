import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ApplicationPage } from './application.page';

describe('CustomerServicePage', () => {
  let component: ApplicationPage;
  let fixture: ComponentFixture<ApplicationPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
