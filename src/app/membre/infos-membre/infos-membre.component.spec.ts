import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosMembreComponent } from './infos-membre.component';

describe('InfosMembreComponent', () => {
  let component: InfosMembreComponent;
  let fixture: ComponentFixture<InfosMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
