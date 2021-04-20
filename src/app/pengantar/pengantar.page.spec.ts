import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengantarPage } from './pengantar.page';

describe('PengantarPage', () => {
  let component: PengantarPage;
  let fixture: ComponentFixture<PengantarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengantarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengantarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
