import { 
  Component, 
  OnInit } 
  from '@angular/core';

import { Pull } 
from '../model/pull.model';

import { PullService } 
from '../services/pull.service';

@Component({
  selector: 'app-pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.css']
})
export class PullsComponent implements OnInit {

  pulls : Pull[]; //un tableau de Pull
  constructor(private pullService: PullService ) {
  this.pulls = pullService.listePulls();
    }

  supprimerPull(p: Pull){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.pullService.supprimerPull(p.idPull).subscribe(() => {
      console.log("pull supprimé");
      this.SuprimerPullDuTableau(p);
    });
  }

  SuprimerPullDuTableau(prod : Pull) {
    this.pulls.forEach((cur, index) => {
    if(prod.idPull=== cur.idPull) {
    this.pulls.splice(index, 1);
    }
    });
    }
    
}
   
  ngOnInit(): void {
    this.pullService.listePull().subscribe(prods => {
      console.log(prods);
      this.pulls = prods;
    });
  }

}
