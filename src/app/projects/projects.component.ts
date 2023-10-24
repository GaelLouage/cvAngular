import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Services/project.service';
import { Project } from '../Interfaces/Project';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 public visibleWebDevProjects:boolean = false;
 public visibleApiProjects:boolean = false;
 public visibleWpfProjects:boolean = false;
 public visibleExercisesProjects:boolean = false;
 public visibleGameDevProjects:boolean = false;
  public projects:Project[] = [] as Project[];
  public webDevProjects:Project[] = [] as Project[];

  public angleRight:string = "fa fa-angle-right";
  public angleDown:string = "fa fa-angle-down";
  
 constructor(private projectService:ProjectService){}

  ngOnInit(): void {
   this.projects =  this.projectService.projects;

  }

  toggleProjects(projectName:string)
  {

    switch(projectName){
      case "WebDev":
        this.visibleWebDevProjects = !this.visibleWebDevProjects;
        this.toggleVisibility(this.visibleWebDevProjects, false, false,  false,false );
        break;
     case "Api":
        this.visibleApiProjects = !this.visibleApiProjects;
        this.toggleVisibility(false, this.visibleApiProjects, false,  false,false );
        break;
     case "Wpf":
        this.visibleWpfProjects = !this.visibleWpfProjects;
        this.toggleVisibility(false, false, this.visibleWpfProjects,  false,false );
         break;
     case "Exercises":
        this.visibleExercisesProjects = !this.visibleExercisesProjects;
        this.toggleVisibility(false, false, false,     this.visibleExercisesProjects,false );
        break;
     case "GameDev":
        this.visibleGameDevProjects = !this.visibleGameDevProjects;
        this.toggleVisibility(false, false, false,false,this.visibleGameDevProjects);
        break;
      default:
    }
  }
  toggleVisibility(webDev:boolean, api:boolean, wpf:boolean, exercises:boolean, gameDev:boolean){
    this.visibleWebDevProjects = webDev;
    this.visibleApiProjects = api;
    this.visibleWpfProjects = wpf;
    this.visibleExercisesProjects = exercises;
    this.visibleGameDevProjects = gameDev;
  }
  // projects
  getWebDevProjects(){
    return this.projectService.projects.filter(x => x.subheading == "Web Development");
  }

  getApiProjects(){
    return this.projectService.projects.filter(x => x.subheading == "APi'S");
  }


  getWpfProjects(){
    return this.projectService.projects.filter(x => x.subheading == "Winforms / WPf");
  }

  getExercisesProjects(){
    return this.projectService.projects.filter(x => x.subheading == "Exercises");
  }

  getGameDevProjects(){
    return this.projectService.projects.filter(x => x.subheading == "Unity (Game development)");
  }
}
