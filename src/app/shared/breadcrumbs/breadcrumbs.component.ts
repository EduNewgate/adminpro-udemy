import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe( data => {
      this.titulo = data.title;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoute(): Observable<any> {
    return this.router.events.pipe(
      filter( event => {
        return event instanceof ActivationEnd;
      }),
      filter( (event: ActivationEnd) => {
        return event.snapshot.firstChild == null;
      }),
      map( (event: ActivationEnd) => {
        return event.snapshot.data;
      })
    );
  }

}