import { 
  Component, 
  OnInit 
} 
from '@angular/core';
import {
  ActivatedRoute, 
  Router 
} 
from '@angular/router';
import { PullService } 
from '../services/pull.service';
import { Pull } 
from '../model/pull.model';

@Component({
  selector: 'app-update-pull',
  templateUrl: './update-pull.component.html',
  styles: []
})
export class UpdatePullComponent implements OnInit {
  currentPull = new Pull();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private pullService: PullService) { 

  }
  updatePull() {
    this.pullService.updatePull(this.currentPull).subscribe(prod => {
    this.router.navigate(['pulls']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
    

  ngOnInit() {
    this.pullService.consulterPull(this.activatedRoute.snapshot.params.id).
     subscribe( prod =>{ this.currentPull = prod; } ) ;
    }
    
  
}
