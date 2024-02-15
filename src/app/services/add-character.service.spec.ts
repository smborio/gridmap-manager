import { TestBed } from '@angular/core/testing';

import { AddCharacterService } from './add-character.service';

describe('AddCharacterService', () => {
  let service: AddCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
