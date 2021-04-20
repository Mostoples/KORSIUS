import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LempostikPage } from './lempostik.page';

describe('LempostikPage', () => {
  let component: LempostikPage;
  let fixture: ComponentFixture<LempostikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LempostikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LempostikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
