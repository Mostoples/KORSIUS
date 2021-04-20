import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DafpusPage } from './dafpus.page';

describe('DafpusPage', () => {
  let component: DafpusPage;
  let fixture: ComponentFixture<DafpusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafpusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DafpusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
