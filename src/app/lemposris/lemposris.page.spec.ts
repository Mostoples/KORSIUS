import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LemposrisPage } from './lemposris.page';

describe('LemposrisPage', () => {
  let component: LemposrisPage;
  let fixture: ComponentFixture<LemposrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemposrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LemposrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
