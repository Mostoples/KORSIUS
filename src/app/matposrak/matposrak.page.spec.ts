import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatposrakPage } from './matposrak.page';

describe('MatposrakPage', () => {
  let component: MatposrakPage;
  let fixture: ComponentFixture<MatposrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatposrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatposrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
