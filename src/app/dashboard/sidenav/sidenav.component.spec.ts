import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { MatCheckboxModule } from '@angular/material';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
      declarations: [SidenavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should list categories', () => {
    component.categories = ['Category A', 'Category B'];
    fixture.detectChanges();

    const listItems = element.querySelectorAll('li');

    expect(listItems.length).toBe(2);
    expect(listItems[0].innerText).toContain('Category A');
    expect(listItems[1].innerText).toContain('Category B');
  });
});
