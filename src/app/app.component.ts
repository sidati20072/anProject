import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nom: string = 'mon nom est ...';
  posts = [
      {
          title: 'Mon premier Post',
          content: 'conent post....',
          loveIts: 1,
          created_at: new Date(),
      },
      {
          title: 'Mon premier Post',
          content: 'conent post....',
          loveIts: 0,
          created_at: new Date(),
      },

       {
                title: 'Mon premier Post',
                content: 'conent post....',
                loveIts: 0,
                created_at: new Date(),
            }

            ];
}
