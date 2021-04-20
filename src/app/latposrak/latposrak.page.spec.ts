import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatposrakPage } from './latposrak.page';

describe('LatposrakPage', () => {
  let component: LatposrakPage;
  let fixture: ComponentFixture<LatposrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatposrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatposrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
