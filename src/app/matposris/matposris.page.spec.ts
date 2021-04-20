import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatposrisPage } from './matposris.page';

describe('MatposrisPage', () => {
  let component: MatposrisPage;
  let fixture: ComponentFixture<MatposrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatposrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatposrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
