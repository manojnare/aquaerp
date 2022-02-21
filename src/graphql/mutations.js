/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPonds = /* GraphQL */ `
  mutation CreatePonds(
    $input: CreatePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    createPonds(input: $input, condition: $condition) {
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
export const updatePonds = /* GraphQL */ `
  mutation UpdatePonds(
    $input: UpdatePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    updatePonds(input: $input, condition: $condition) {
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
export const deletePonds = /* GraphQL */ `
  mutation DeletePonds(
    $input: DeletePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    deletePonds(input: $input, condition: $condition) {
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
