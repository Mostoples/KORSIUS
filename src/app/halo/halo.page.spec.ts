import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaloPage } from './halo.page';

describe('HaloPage', () => {
  let component: HaloPage;
  let fixture: ComponentFixture<HaloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
