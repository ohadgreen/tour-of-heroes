import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  private site100 = '100';

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
  }

}
