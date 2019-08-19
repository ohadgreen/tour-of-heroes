import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-sites',
  templateUrl: './show-sites.component.html',
  styleUrls: ['./show-sites.component.css']
})
export class ShowSitesComponent implements OnInit {
  subscription: Subscription;
  sites: number[];
  sitesBs: number[];
  newSite: number;
  constructor(private sitesService: SitesService) { }

  getSitesBs(): void {
    this.subscription = this.sitesService.sitesListBs.subscribe(
      sites => {
        console.log(sites);
        this.sites = sites;
      }
    );
  }

  ngOnInit() {
    this.sitesService.getSitesFromApi();
    this.getSitesBs();
  }

  addSite() {
    this.sitesService.addSiteToListBs(+this.newSite);
    this.newSite = null;
  }

}
