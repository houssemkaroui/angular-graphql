import {gql} from 'apollo-angular'

const FILMS_LIST = gql`
query allFilms {

  allFilms {

    films {

      id

      director

      created

      title

      releaseDate

      edited

      episodeID

      openingCrawl

      vehicleConnection {

        totalCount

        pageInfo {

          endCursor

        }

        vehicles {

          model

        }

      }

    }

  }

}`

export {FILMS_LIST}
