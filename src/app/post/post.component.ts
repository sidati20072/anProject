import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() titre: string;
  @Input() content: string;
  @Input() name: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  constructor() { }

  loveIt() {
    this.loveIts = this.loveIts + 1;

  }

  dontLove() {
    this.loveIts = this.loveIts - 1;

  }

  isLoved() {

    return this.loveIts > 0;
  }

  ngOnInit() {
  }

}
