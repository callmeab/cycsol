import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCta } from './footer-cta';

describe('FooterCta', () => {
  let component: FooterCta;
  let fixture: ComponentFixture<FooterCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
