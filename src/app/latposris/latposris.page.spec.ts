import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatposrisPage } from './latposris.page';

describe('LatposrisPage', () => {
  let component: LatposrisPage;
  let fixture: ComponentFixture<LatposrisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatposrisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatposrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
