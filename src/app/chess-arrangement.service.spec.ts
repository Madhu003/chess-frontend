import { TestBed, inject } from '@angular/core/testing';

import { ChessArrangementService } from './chess-arrangement.service';

describe('ChessArrangementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChessArrangementService]
    });
  });

  it('should be created', inject([ChessArrangementService], (service: ChessArrangementService) => {
    expect(service).toBeTruthy();
  }));
});
