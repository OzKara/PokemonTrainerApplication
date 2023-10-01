import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCataloguePageComponent } from './pokemon-catalogue-page.component';

describe('PokemonCataloguePageComponent', () => {
  let component: PokemonCataloguePageComponent;
  let fixture: ComponentFixture<PokemonCataloguePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCataloguePageComponent]
    });
    fixture = TestBed.createComponent(PokemonCataloguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
