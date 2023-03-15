import {gql} from 'apollo-angular'

const GET_TODOS = gql`
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




export {GET_TODOS}
