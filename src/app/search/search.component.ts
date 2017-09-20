import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  // properties i'm using
  userSearch;
  heroList;

  @Output() refreshResults = new EventEmitter<any>(); 

  ngOnInit() {
  }

  // on click of the submit button we're going to emit the search word to the parent to run the service call
  searchMarvel(){
      this.refreshResults.emit(this.userSearch)
      // clear out the search term so that the user can do a new search
      this.userSearch = '';
    
  }








}
