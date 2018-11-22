import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; //Array para datos

//angular
import { AngularFireDatabase } from 'angularfire2/database';

//models
import { News } from '../../../models/news';
import { Comment } from '../../../models/comments';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {

  news: News = {
    $key: null,
    user: null,
    title: null,
    description: null,
    date: null,
    hashtag: null,
    image: null,
    category: null
  }
  comment: Comment = {
    news: null,
    user: null,
    date: null
  };
  dailiesList: Observable<any[]>;

  itemValue = '';
  itemList: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    //this.itemList = db.list('items').valueChanges();
    this.dailiesList = db.list('dailies').valueChanges();
  }

  onSubmit() {
    /*this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';*/
    this.db.list('/dailies').push({
      user: this.news.user,
      title: this.news.title,
      description: this.news.description,
      date: this.news.date,
      hashtag: this.news.hashtag,
      image: this.news.image,
      category: this.news.category
    });
    this.clear();
  }

  clear(){
    this.news.user = null,
    this.news.title = null,
    this.news.description = null,
    this.news.date = null,
    this.news.hashtag = null,
    this.news.image = null,
    this.news.category = null
  }
}
