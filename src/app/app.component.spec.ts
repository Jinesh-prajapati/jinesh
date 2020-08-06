import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

describe("AppComponent", () => {
  let testHostComponent: AppComponent;
  let testHostFixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(AppComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it("should create the app", () => {
    expect(testHostComponent).toBeTruthy();
  });

  it("should show TEST INPUT", () => {
    expect(testHostFixture.nativeElement.querySelector("p").innerText).toEqual(
      "jinesh"
    );
  });
});
