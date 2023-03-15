import {gql} from 'apollo-angular'

const FILMS_LIST = gql`
query allFilms {

  allFilms {

    films {

      id

      director

      title

      releaseDate
      producers

      vehicleConnection {

        totalCount

        pageInfo {

          endCursor

        }

        vehicles {

          model
          vehicleClass
          name
          crew 

        }

      }
      characterConnection {
        characters {
          name
          gender
          eyeColor
          homeworld {
            name
          }
          skinColor
        }
      }
      
    

    }

  }

}

`

export {FILMS_LIST}
