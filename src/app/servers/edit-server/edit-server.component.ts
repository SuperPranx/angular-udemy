import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router, UrlTree} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => this.allowEdit = params.allowEdit === '1'
    );
    // this.activatedRoute.fragment.subscribe();
    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params.id);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params.id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    return this.changesSaved;
  }

}
