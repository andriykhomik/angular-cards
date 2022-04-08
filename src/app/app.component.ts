import { Component } from '@angular/core';

export interface Post {
  title: string;
  imageURL: string;
  username: string;
  context: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public posts: Post[] = [
    {
      title: 'Neat Tree',
      imageURL: 'assets/images/tree.jpeg',
      username: 'nature',
      context: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageURL: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      context: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageURL: 'assets/images/biking.jpeg',
      username: 'biking',
      context: 'I did some biking today',
    },
  ];
}
