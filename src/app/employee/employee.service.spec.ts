import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js';
import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;

  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [EmployeeService]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(employeeService.addEmployee).toBeTruthy();
  });
});
