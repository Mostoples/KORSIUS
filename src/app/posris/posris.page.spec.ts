import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosrisPage } from './posris.page';

describe('PosrisPage', () => {
  let component: PosrisPage;
  let fixture: ComponentFixture<PosrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
