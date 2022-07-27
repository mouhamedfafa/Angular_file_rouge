import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { PostStoreService } from '../../shared/service/post-store.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('post') posts : Post|null = null;

posts$ : Observable<Post[]> |null =null

  constructor(public serve: PostStoreService) {}

  ngOnInit(): void {
    this.posts$= this.serve.all()                                                                                                                       
  }

}
