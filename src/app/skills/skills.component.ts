import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public skills:string[] = [
    "Programming logic and Object Oriented Programming",
    "Data analysis and SQL",
    "HTML/CSS",
    "JavaScript",
    ".NET C#",
    "SQL",
    ".NET ASP MVC",
    ".NET Entity Framework",
    "Dsharpplus (Discord Bot)",
    "AWS",
    "WebAPI",
    "WPF",
    "Scrum",
    "Angular",
    "MongoDB",
    "SOLID PRINCIPLES",
    "CICD",
    "Blazor"
  ];

}
