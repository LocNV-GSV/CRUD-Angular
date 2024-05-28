import 'jest-preset-angular/setup-jest.js';
import './jest-global-mocks';
import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

await TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());