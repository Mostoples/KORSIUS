import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengposrakPage } from './pengposrak.page';

describe('PengposrakPage', () => {
  let component: PengposrakPage;
  let fixture: ComponentFixture<PengposrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengposrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengposrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
