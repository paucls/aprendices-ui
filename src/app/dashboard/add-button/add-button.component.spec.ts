import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';

import { AddButtonComponent } from './add-button.component';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let element;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonComponent],
      imports: [MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should have a link to the form page', () => {
    const link = element.querySelector('a');
    expect(link.getAttribute('href'))
      .toEqual('https://docs.google.com/forms/d/e/1FAIpQLSe9zIPStUvnssmiz6ZAI789UcPiuD6TYEbLyMSbgEPnfmcyEQ/viewform');
  });
});
