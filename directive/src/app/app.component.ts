import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
    {
      title: 'Baby Yoda',
      url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      title: 'Darth Vader',
      url:
        'https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274',
    },
    {
      title: 'Darth Maul',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png',
    },
  ];

  checkPageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }
}
