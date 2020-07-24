import { Injectable } from '@angular/core';
import { DataProviderService } from './../providers/data-provider.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private dataService:DataProviderService) { }
  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.dataService.getData(id);
  }
}
