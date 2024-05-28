// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './app.module';

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule,
  //       HttpClientModule,
  //       ...MaterialModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'my-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('my-app');
  // });
  describe('The getNewId function', function () {
    it('should produce hexadecimal strings of 12 chars', function () {
      // const actualId = getNewId();
      // expect(actualId).toMatch(/^[0-9a-f]+$/);
      // expect(actualId.length).toBe(12);
    });
    it('should produce unique ids', function () {
      // const oneId = getNewId();
      // const otherId = getNewId();
      // expect(oneId).not.toBe(otherId);
    });
  });

  describe('The getSlug function', function () {
    // it('should return the correct slug for each edge cases', function () {
    //   const SAMPLE_CASES = [
    //     ['This is a Test 123', 'this_is_a_test_123'],
    //     ['This is Español', 'this_is_espa-ol'],
    //     ['This is a Test with spaces', 'this_is_a_test_with_spaces'],
    //     ['This has inv@lid chars', 'this_has_inv-lid_chars'],
    //   ];
    //   SAMPLE_CASES.forEach(([source, expected]) => {
    //     const actualSlug = getSlug(source);
    //     expect(actualSlug).toBe(expected);
    //   });
    // });
  });

})