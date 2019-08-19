import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private sitesUrl = 'https://20f91516-ec4e-49f4-8bd8-5b338454381b.mock.pstmn.io/siteslist';
  private sitesList: number[] = [];
  sitesListBs: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor(private httpClient: HttpClient) { }

  getSiteListFromServer(): Observable<any> {
    return this.httpClient.get<string[]>(this.sitesUrl).pipe(
      tap(response => this.sitesList = response)
    );
  }

  getSitesFromApi(): void {
    this.httpClient.get<number[]>(this.sitesUrl).subscribe(response => {
      this.sitesListBs.next(response);
    });
  }

  addSiteToList(site: number) {
    const tempSites = this.sitesList;
    tempSites.push(site);
    this.sitesList = tempSites;
  }

  addSiteToListBs(site: number) {
    const tempSites = this.sitesListBs.value;
    const updatedSitesList = [...tempSites, site];
    this.sitesListBs.next(updatedSitesList);
  }
}
