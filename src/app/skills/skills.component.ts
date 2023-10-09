import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: any = {
    technologies: [
      {
        'skill': 'Java, C',
        'proficiency': '80%'
      },
      {
        'skill': 'SpringBoot',
        'proficiency': '80%'
      },
      {
        'skill': 'Python',
        'proficiency': '60%'
      },
      {
        'skill': 'AngularJs, NodeJs, JavaScript',
        'proficiency': '90%'
      },
      {
        'skill': 'SQL, MongoDB,  PL/SQL',
        'proficiency': '80%'
      }
    ],
    tools:[
      {
        'name': 'VsCode, Eclipse, Postman',
        'proficiency': '80%'
      },
      {
        'name': 'Windows, Linux',
        'proficiency': '90%'
      },
      {
        'name': 'JIRA',
        'proficiency': '80%'
      },
      {
        'name': 'Git, GitHub Actions',
        'proficiency': '70%'
      },
      {
        'name': 'DevOps',
        'proficiency': '50%'
      }
    ]
  }
}
