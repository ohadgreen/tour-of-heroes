import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SitesService } from '../services/sites.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  private subscription: Subscription;
  private allSites: number[];
  private currentSite = 100;

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.getSitesBs();
  }

  getSitesBs(): void {
    this.subscription = this.sitesService.sitesListBs.subscribe(
      sites => {
        console.log('single site component: ', sites);
        this.allSites = sites;
        if (this.allSites.indexOf(this.currentSite) > -1) {
          console.log(`site ${this.currentSite} is in the list`);
        } else {
          console.log('not in list');
        }
      }
    );
  }

}
