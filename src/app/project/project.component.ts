import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetail } from '../Interfaces/Project';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  public project:ProjectDetail | undefined = {} as ProjectDetail;
  public title:string = "";
  constructor(private route:ActivatedRoute, private projectService:ProjectService) {}

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.project = this.projectService.getProjectByTitle(data["title"]);
    });
  }
}
