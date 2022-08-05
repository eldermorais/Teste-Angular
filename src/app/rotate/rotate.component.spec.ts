import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RotateComponent } from './rotate.component';

class RouterStub{
  getCurrentNavigation(){
    return {
       extras: {
          state: [1,2,3,4]
        }
      }
    }
 }

describe('RotateComponent', () => {
  let component: RotateComponent;
  let fixture: ComponentFixture<RotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [ {provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate rotate list', () => {
    expect(component.listRotate[0] === 1).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
