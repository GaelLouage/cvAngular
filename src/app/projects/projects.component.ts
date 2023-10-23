import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Services/project.service';
import { Project } from '../Interfaces/Project';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 
  public projects:Project[] = [] as Project[];
 constructor(private projectService:ProjectService){
 
 }
  ngOnInit(): void {
   this.projects =  this.projectService.projects;
  }
 
}
