import { Component } from '@angular/core';
interface Todo {
  task : string;
  completed : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   
    taskObject : Todo [] = [
      {
        task: "Wash clothes",
        completed: false
      },
      {
        task: "Cook meals",
        completed: true
      },
      {
        task: "Pay bills",
        completed: true
      }
    ]

    getListClass(index :number){
      if(this.taskObject[index].completed){
        return "completed-li";
      }
      else {
         return "not-completed-li";
      }  
    
    }

   }

   


