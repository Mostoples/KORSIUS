import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendahuluanPage } from './pendahuluan.page';

describe('PendahuluanPage', () => {
  let component: PendahuluanPage;
  let fixture: ComponentFixture<PendahuluanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendahuluanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendahuluanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
