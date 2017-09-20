import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private marvelService: MarvelService){}

  // variables that i am going to use
  heroList;
  userSearch;

  // method for calling the service to get marvel characters returned
  getHeroesFromService(){
    this.marvelService.getHeroes()
      .subscribe(
        heroList => {
          this.heroList = heroList.data.results;
        }

      )
  }

  // run general get heroes call on init so that there is something immediately on the page
  ngOnInit(){
    this.getHeroesFromService()

  }

  getSearchMarvel(userSearch){
    // call the service with search word if there is a search word 
    // if you click submit with nothing in it then userSearch = undefined gets passed through so I can't use userSearch !== ""
    // instead utilize the fact that "" and undefined are both falsy so just simplify to say if(userSearch) 
    if(userSearch){
      this.marvelService.searchHeroes(userSearch)
      .subscribe(
        heroList => {
          this.heroList = heroList.data.results;
        }
  
      )
      // recall the main search if there is no search word
    }else{
      this.getHeroesFromService()
    } userSearch = '';
  } 
    

}
