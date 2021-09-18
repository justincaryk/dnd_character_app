import gql from 'graphql-tag'

export default gql`
  query SubclassNamesByClassId($classId: UUID!) {
    query {
      allSubclasses(condition: {
        classId: $classId
      },
      orderBy: NAME_ASC) {
        nodes {
          id
          name
        }
      }
    }
  }
`
