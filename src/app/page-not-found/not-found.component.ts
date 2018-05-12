import { Component, OnInit } from '@angular/core';

@Component({
  template: `<section>
      <h2>Page not found</h2>
    </section>`,
  styles: [`
    section {display: flex;} 
    h2 {margin: auto;}`]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
