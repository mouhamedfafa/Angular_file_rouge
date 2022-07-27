import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../shared/models/post';
import { PostStoreService } from '../shared/service/post-store.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @Input('posts') post : Post|null = null;
  posts$ :Observable <Post[]>|null =null
    constructor(public serve: PostStoreService) {
      
     }
  
    ngOnInit(): void {
      this.posts$= this.serve.all()
    }
}
