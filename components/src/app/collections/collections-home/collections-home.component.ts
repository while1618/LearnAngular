import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
      employed: true,
      hiddenData: 'hidden',
    },
    {
      name: 'Jill',
      age: 26,
      job: 'Engineer',
      employed: true,
      hiddenData: 'hidden',
    },
    {
      name: 'Steven',
      age: 25,
      job: 'Engineer',
      employed: false,
      hiddenData: 'hidden',
    },
  ];
  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
