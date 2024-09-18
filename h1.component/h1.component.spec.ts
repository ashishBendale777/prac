import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { H1Component } from "./h1.component";

describe("H1Component", () => {
    let comp: H1Component;
    let fixture: ComponentFixture<H1Component>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ H1Component ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(H1Component);
        comp = fixture.componentInstance;
    });

    it("can load instance", () => {
        expect(comp).toBeTruthy();
    });

});