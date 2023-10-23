import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
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
