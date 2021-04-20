import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatpostikPage } from './matpostik.page';

describe('MatpostikPage', () => {
  let component: MatpostikPage;
  let fixture: ComponentFixture<MatpostikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatpostikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatpostikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
