import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  searchQuery:string = '';
  articles:any;
  displayedColumns: string[] = ['sourceName','author','title','description','url','content'];
  constructor(private newService:NewsService) { }
  
  ngOnInit() {
  }

  fetchNews(query:String){
    this.newService.getNewsContent(query).subscribe(result =>{
      this.articles = result.articles;
    });
  }

}
