import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddEditComponent } from './emp-add-edit.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import 'zone.js';
import { MaterialModule } from '../../app.module';

describe('EmpAddEditComponent', () => {
  let component: EmpAddEditComponent;
  let fixture: ComponentFixture<EmpAddEditComponent>;

  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule, MaterialModule],
    providers: [EmployeeService]
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(EmpAddEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
