import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetaPage } from './peta.page';

describe('PetaPage', () => {
  let component: PetaPage;
  let fixture: ComponentFixture<PetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
