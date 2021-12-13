import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title = 'Student Information';

  public student = [
    {"id":"CS001","name":"Rahul","stream":"CSE","feeStatus":true,"image":"./assets/street-scrambler-family-hero-1920x1080.jpg","year":2016},
    {"id":"CS002","name":"Raihan","stream":"ME","feeStatus":false,"image":"./assets/triumph-street-twin-bonneville-discounts-may-2020-2 copy.jpg","year":2015},
    {"id":"CS003","name":"Anvin","stream":"EEE","feeStatus":true,"image":"./assets/triumph-t100-t120-tracker.jpg","year":2017},
    {"id":"CS004","name":"Ramos","stream":"IT","feeStatus":false,"image":"./assets/istockphoto-1171062918-612x612.jpg","year":2019},
    {"id":"CS005","name":"Fabregas","stream":"CSE","feeStatus":true,"image":"./assets/SAT-ACT-Admissions-Guide-for-the-Indian-Students.jpg","year":2013},
    {"id":"CS006","name":"Iniesta","stream":"CSE","feeStatus":false,"image":"./assets/Shorelight_Indian_Visa.jpg","year":2018},
    {"id":"CS007","name":"L Martinez","stream":"ME","feeStatus":true,"image":"./assets/tz7n-7vqceaq86dprdnzag.jpg","year":2016},
    {"id":"CS008","name":"De Gea","stream":"CSE","feeStatus":false,"image":"","year":2017},

  ];
}
