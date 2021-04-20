import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangkumPage } from './rangkum.page';

describe('RangkumPage', () => {
  let component: RangkumPage;
  let fixture: ComponentFixture<RangkumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangkumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangkumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
