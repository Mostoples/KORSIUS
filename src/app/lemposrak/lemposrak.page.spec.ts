import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LemposrakPage } from './lemposrak.page';

describe('LemposrakPage', () => {
  let component: LemposrakPage;
  let fixture: ComponentFixture<LemposrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemposrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LemposrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
