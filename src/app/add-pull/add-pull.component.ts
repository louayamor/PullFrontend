import {
   Component,
    OnInit
} 
from '@angular/core';

import { Pull } 
from '../model/pull.model';

import { PullService } 
from '../services/pull.service';


@Component({
  selector: 'app-add-pull',
  templateUrl: './add-pull.component.html',
  styleUrls: ['./add-pull.component.css']
})

export class AddPullComponent implements OnInit {

  newPull = new Pull();
  constructor(private pullService: PullService) { }
  
  addPull(){
    this.pullService.ajouterPull(this.newPull)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['pulls']);
    }
    
    

  ngOnInit(): void {
  }

}
