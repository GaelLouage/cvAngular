import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public education:string[] = ["Programming logic and Object Oriented Programming",
  "Data analysis and SQL",
  "HTML/CSS",
  ".NET C#",
  "Test Driven Development",
  "JavaScript",
  ".NET ASP MVC",
  ".NET Entity Framework",
  "WebAPI",
  "WPF",
  "Scrum",
  "Angular"];
}
