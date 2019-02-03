import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  posts: Post[] = [
    {
      author: 'John Doe',
      content: 'Accelerate\'s definition of developer productivity, Will Larson (@Lethai) \n' +
        'https://lethain.com/accelerate-developer-productivity/',
      date: new Date('2018-09-10T00:00:00')
    },
    {
      author: 'John Doe',
      content: 'The Life-Changing Magic of Tidying Up Code, Kent Beck (@KentBeck) \n' +
        'https://www.facebook.com/notes/kent-beck/the-life-changing-magic-of-tidying-up-code/1544047022294823/',
      date: new Date('2018-09-10T00:00:00')
    },
    {
      author: 'Clark Kent',
      content: 'How long is too long for a build?, Brett L. Schuchert (@schuchert) \n' +
        'https://www.industriallogic.com/blog/how-long-is-too-long-for-a-build/',
      date: new Date('2018-09-13T00:00:00')
    },
    {
      author: 'John Doe',
      content: 'The Right Time for Testing, Maaret (@maaretp) \n' +
        'http://visible-quality.blogspot.com/2018/09/the-right-time-for-testing.html',
      date: new Date('2018-09-15T00:00:00')
    }
  ];

  constructor() {}
}
