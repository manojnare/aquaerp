/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPonds = /* GraphQL */ `
  query GetPonds($id: ID!) {
    getPonds(id: $id) {
      id
      pond_area
      pond_no
      pond_name
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
        pond_area
        pond_no
        pond_name
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
export const getExpenses = /* GraphQL */ `
  query GetExpenses($id: ID!) {
    getExpenses(id: $id) {
      id
      exp_type
      exp_date
      exp_desc
      exp_info1
      exp_info2
      exp_info3
      exp_info4
      exp_info5
      expense
      createdAt
      updatedAt
    }
  }
`;
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exp_type
        exp_date
        exp_desc
        exp_info1
        exp_info2
        exp_info3
        exp_info4
        exp_info5
        expense
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIncome = /* GraphQL */ `
  query GetIncome($id: ID!) {
    getIncome(id: $id) {
      id
      inc_type
      inc_date
      inc_desc
      inc_info1
      inc_info2
      inc_info3
      inc_info4
      inc_info5
      income
      createdAt
      updatedAt
    }
  }
`;
export const listIncomes = /* GraphQL */ `
  query ListIncomes(
    $filter: ModelIncomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        inc_type
        inc_date
        inc_desc
        inc_info1
        inc_info2
        inc_info3
        inc_info4
        inc_info5
        income
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeedTime = /* GraphQL */ `
  query GetFeedTime($id: ID!) {
    getFeedTime(id: $id) {
      id
      pond_no
      feed_date
      feed_time
      feed_type
      feed_quantity
      feed_info1
      feed_info2
      createdAt
      updatedAt
    }
  }
`;
export const listFeedTimes = /* GraphQL */ `
  query ListFeedTimes(
    $filter: ModelFeedTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pond_no
        feed_date
        feed_time
        feed_type
        feed_quantity
        feed_info1
        feed_info2
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
