import React, { useState, useEffect } from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listExpenses } from '../graphql/queries';
import { createExpenses as createExpensesMutation, deleteExpenses as deleteExpensesMutation} 
  from '../graphql/mutations';

import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

let today = new Date();
let edate = moment(today).format('YYYY-MM-DD')

const initialFormState = { exp_type: 'exptype', exp_date: edate, exp_desc: '' , expense: '' }

function Expenses() {

  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  const [expdate, setExpDate] = useState(new Date());

  useEffect(() => {
    fetchExpenses();
  }, []);

  const set_Date = (date) => {
    setExpDate(date);
    setFormData({ ...formData, 'exp_date': moment(date).format('YYYY-MM-DD')});
}

const setExpType = (e) => {
  let ie = e.target.value;
  setFormData({ ...formData, 'exp_type': ie});
  if (ie !== "exptype") {fExpType(ie)} else {fetchExpenses()};
}

async function fExpType(exp) {
  const apiData = await API.graphql({ query: listExpenses });
  const nApiData = apiData.data.listExpenses.items;
  setExpenses(nApiData.filter(expense => expense.exp_type === exp));
}

  async function fetchExpenses() {
    const apiData = await API.graphql({ query: listExpenses });
    setExpenses(apiData.data.listExpenses.items);
  }

  async function createExpenses() {
    if (formData.exp_type === "exptype") alert("Please Select Expense Type");
    if (!formData.exp_type || !formData.exp_date || !formData.exp_desc || !formData.expense) return;
    await API.graphql({ query: createExpensesMutation, variables: { input: formData } });
    setExpenses([ ...expenses, formData ]);
    setFormData(initialFormState);
  }

  async function deleteExpenses({ id }) {
    const newExpensesArray = expenses.filter(expenses => expenses.id !== id);
    setExpenses(newExpensesArray);
    await API.graphql({ query: deleteExpensesMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Expenses Details</h1>
      <table className="table table-striped">
      <tbody>
        <tr>
        <td>
        <select onChange={e => setExpType(e)}>
              <option value="exptype">Expense Type</option>
              <option value="Feed">Feed</option>
              <option value="Seed">Seed</option>
              <option value="Meds & Chems">Meds & Chems</option>
              <option value="Motors">Motors</option>
              <option value="Boys">Boys</option>
              <option value="Water Tanker">Water Tanker</option>
              <option value="Elec Bills">Elec Bills</option>
              <option value="Others">Others</option>
            </select>
          </td>          
          <td>
          <DatePicker
              dateFormat="dd/MMM/yyyy"
              selected={expdate}
              onChange={(date) => {set_Date(date)}}
              value={expdate}
            />
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'exp_desc': e.target.value})}
              placeholder="Expense Description"
              value={formData.exp_desc}
            />
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'expense': e.target.value})}
              placeholder="Expense"
              value={formData.expense}
            />
          </td>
          <td><button onClick={createExpenses}>Add Expense</button></td>      
        </tr>

      </tbody>
    </table>

      <table className="table table-striped">
                  <thead>
            <tr>
              <th width="20%">Expense Type</th>
              <th width="20%">Expense Date</th>
              <th width="20%">Expense Desccription</th>
              <th width="20%">Expense (Rs. {expenses.reduce((a, v) =>  Number(a) + Number(v.expense), 0 )})</th>
              <th width="20%">Action</th>
            </tr>
          </thead>
      </table>

      <div style={{marginBottom: 10}}>
              {
                expenses.map(expenses => (
                  <div key={expenses.id || expenses.exp_type}>
                  <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td width="20%">{expenses.exp_type}</td>
                      <td width="20%">{moment(expenses.exp_date).format("DD-MMM-YYYY")}</td>
                      <td width="20%">{expenses.exp_desc}</td>
                      <td width="20%">{expenses.expense}</td>
                      <td width="20%">
                        <button onClick={() => deleteExpenses(expenses)}>Delete</button></td>
                    </tr>
                  </tbody>
                  </table>
      </div>
          ))
        }
      </div>
    </div>
  );
}

export default withAuthenticator(Expenses);