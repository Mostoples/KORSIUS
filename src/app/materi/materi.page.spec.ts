import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriPage } from './materi.page';

describe('MateriPage', () => {
  let component: MateriPage;
  let fixture: ComponentFixture<MateriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
