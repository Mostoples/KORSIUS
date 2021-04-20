import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostikPage } from './postik.page';

describe('PostikPage', () => {
  let component: PostikPage;
  let fixture: ComponentFixture<PostikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
