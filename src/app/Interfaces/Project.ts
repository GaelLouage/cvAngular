export interface Project {
    subheading:string;
    projects:ProjectDetail[];
  }
  export interface ProjectDetail {
    route:string;
    image:string;
    alt:string;
    title:string;
    github:string;
    site:string;
    tools:string;
    about:string;
  }