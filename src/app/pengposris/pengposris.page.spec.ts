import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengposrisPage } from './pengposris.page';

describe('PengposrisPage', () => {
  let component: PengposrisPage;
  let fixture: ComponentFixture<PengposrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengposrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengposrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
