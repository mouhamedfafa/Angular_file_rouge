import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { PostStoreService } from '../../shared/service/post-store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input('post') posts : Post|null = null;

  posts$ : Observable<Post> |null =null

  // getRisks(): Observable<RiskListSummary[]> {
  //   return this.http.get(this.serviceUrl)
  //      .map(this.extractData()) <== passing result of function
  //      .catch(this.handleError()); <== passing result of function
  // }

  
  constructor(public serve: PostStoreService) { }

  ngOnInit(): void {
    this.posts$= this.serve.post$                                                                                                                    

  }


  
}
