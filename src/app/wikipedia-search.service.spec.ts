import { TestBed, inject } from '@angular/core/testing';
import { JsonpModule } from '@angular/http';
import { WikipediaSearchService } from './wikipedia-search.service';

describe('WikipediaSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JsonpModule
      ],
      providers: [WikipediaSearchService]
    });
  });

  it('should be created', inject([WikipediaSearchService], (service: WikipediaSearchService) => {
    expect(service).toBeTruthy();
  }));
});
