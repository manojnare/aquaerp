/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPonds = /* GraphQL */ `
  mutation CreatePonds(
    $input: CreatePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    createPonds(input: $input, condition: $condition) {
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
export const updatePonds = /* GraphQL */ `
  mutation UpdatePonds(
    $input: UpdatePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    updatePonds(input: $input, condition: $condition) {
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
export const deletePonds = /* GraphQL */ `
  mutation DeletePonds(
    $input: DeletePondsInput!
    $condition: ModelPondsConditionInput
  ) {
    deletePonds(input: $input, condition: $condition) {
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
export const createExpenses = /* GraphQL */ `
  mutation CreateExpenses(
    $input: CreateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    createExpenses(input: $input, condition: $condition) {
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
export const updateExpenses = /* GraphQL */ `
  mutation UpdateExpenses(
    $input: UpdateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    updateExpenses(input: $input, condition: $condition) {
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
export const deleteExpenses = /* GraphQL */ `
  mutation DeleteExpenses(
    $input: DeleteExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    deleteExpenses(input: $input, condition: $condition) {
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
export const createIncome = /* GraphQL */ `
  mutation CreateIncome(
    $input: CreateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    createIncome(input: $input, condition: $condition) {
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
export const updateIncome = /* GraphQL */ `
  mutation UpdateIncome(
    $input: UpdateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    updateIncome(input: $input, condition: $condition) {
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
export const deleteIncome = /* GraphQL */ `
  mutation DeleteIncome(
    $input: DeleteIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    deleteIncome(input: $input, condition: $condition) {
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
export const createFeedTime = /* GraphQL */ `
  mutation CreateFeedTime(
    $input: CreateFeedTimeInput!
    $condition: ModelFeedTimeConditionInput
  ) {
    createFeedTime(input: $input, condition: $condition) {
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
export const updateFeedTime = /* GraphQL */ `
  mutation UpdateFeedTime(
    $input: UpdateFeedTimeInput!
    $condition: ModelFeedTimeConditionInput
  ) {
    updateFeedTime(input: $input, condition: $condition) {
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
export const deleteFeedTime = /* GraphQL */ `
  mutation DeleteFeedTime(
    $input: DeleteFeedTimeInput!
    $condition: ModelFeedTimeConditionInput
  ) {
    deleteFeedTime(input: $input, condition: $condition) {
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
