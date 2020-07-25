import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandingsYearPage } from './standings-year.page';

describe('StandingsYearPage', () => {
  let component: StandingsYearPage;
  let fixture: ComponentFixture<StandingsYearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsYearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingsYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
