import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetunjukPage } from './petunjuk.page';

describe('PetunjukPage', () => {
  let component: PetunjukPage;
  let fixture: ComponentFixture<PetunjukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetunjukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetunjukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
