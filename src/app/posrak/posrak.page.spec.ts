import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosrakPage } from './posrak.page';

describe('PosrakPage', () => {
  let component: PosrakPage;
  let fixture: ComponentFixture<PosrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
