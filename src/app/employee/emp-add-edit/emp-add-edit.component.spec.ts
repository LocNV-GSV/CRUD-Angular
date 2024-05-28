import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddEditComponent } from './emp-add-edit.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import 'zone.js';
import { MaterialModule } from '../../app.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('EmpAddEditComponent', () => {
  let component: EmpAddEditComponent;
  let fixture: ComponentFixture<EmpAddEditComponent>;

  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule, MaterialModule],
    providers: [
      EmployeeService,
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: [] },]
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(EmpAddEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
