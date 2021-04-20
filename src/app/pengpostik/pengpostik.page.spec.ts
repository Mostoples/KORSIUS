import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengpostikPage } from './pengpostik.page';

describe('PengpostikPage', () => {
  let component: PengpostikPage;
  let fixture: ComponentFixture<PengpostikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengpostikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengpostikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
