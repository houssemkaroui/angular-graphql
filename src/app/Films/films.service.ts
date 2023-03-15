import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { FILMS_LIST } from '../graphql/graphql.queries';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private apollo: Apollo) { }
  filmsList() {
  return  this.apollo.query({
      query: FILMS_LIST,
      fetchPolicy: 'network-only',
    })
  }
}
