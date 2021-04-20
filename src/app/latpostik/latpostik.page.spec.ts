import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatpostikPage } from './latpostik.page';

describe('LatpostikPage', () => {
  let component: LatpostikPage;
  let fixture: ComponentFixture<LatpostikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatpostikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatpostikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
