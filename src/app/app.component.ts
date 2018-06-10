import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';
import { Subject } from 'rxjs/Subject';
// application wide shared Rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<string>;
  terms$ = new Subject<string>();
  constructor(private service: WikipediaSearchService) {
    this.terms$
              .debounceTime(400)
              .distinctUntilChanged()
              .subscribe(term => this.search(term));
  }

  search(term: string) {
    this.service.search(term)
                .subscribe(results => this.items = results);
  }
}
