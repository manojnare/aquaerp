/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPonds = /* GraphQL */ `
  query GetPonds($id: ID!) {
    getPonds(id: $id) {
      id
      name
      capacity
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPonds = /* GraphQL */ `
  query ListPonds(
    $filter: ModelPondsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPonds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        capacity
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
