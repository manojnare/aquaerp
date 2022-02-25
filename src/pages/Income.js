import React, { useState, useEffect } from 'react';
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listIncomes } from '../graphql/queries';
import { createIncome as createIncomeMutation, deleteIncome as deleteIncomeMutation} 
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
let idate = moment(today).format('YYYY-MM-DD')

const initialFormState = { inc_type: 'inctype', inc_date: idate, inc_desc: '' , income: '' }

function Income() {

  const [income, setIncome] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  const [incdate, setIncDate] = useState(new Date());

  useEffect(() => {
    fetchIncome();
  }, []);

  const set_Date = (date) => {
    setIncDate(date);
    setFormData({ ...formData, 'inc_date': moment(date).format('YYYY-MM-DD')});
  }

  const setIncType = (e) => {
    let ie = e.target.value;
    setFormData({ ...formData, 'inc_type': ie});
    if (ie !== "inctype") {fIncType(ie)} else {fetchIncome()};
  }
  
  async function fIncType(inc) {
    const apiData = await API.graphql({ query: listIncomes });
    const nApiData = apiData.data.listIncomes.items;
    setIncome(nApiData.filter(income => income.inc_type === inc));
  }

  async function fetchIncome() {
    const apiData = await API.graphql({ query: listIncomes });
    setIncome(apiData.data.listIncomes.items);
  }

  async function createIncome() {
    if (formData.inc_type === "inctype") alert("Please Select Income Type");
    if (!formData.inc_type || !formData.inc_date || !formData.inc_desc || !formData.income) return;
    await API.graphql({ query: createIncomeMutation, variables: { input: formData } });
    setIncome([ ...income, formData ]);
    setFormData(initialFormState);
  }

  async function deleteIncome({ id }) {
    const newIncomeArray = income.filter(income => income.id !== id);
    setIncome(newIncomeArray);
    await API.graphql({ query: deleteIncomeMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Income Details</h1>
      <table className="table table-striped">
      <tbody>
        <tr>
        <td>
        <select onChange={e => setIncType(e)}>
              <option value="inctype">Income Type</option>
              <option value="Harvest">Harvest</option>
              <option value="Others">Others</option>
            </select>
          </td>          
          <td>
          <DatePicker
              dateFormat="dd/MMM/yyyy"
              selected={incdate}
              onChange={(date) => {set_Date(date)}}
              value={incdate}
            />
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'inc_desc': e.target.value})}
              placeholder="Income Description"
              value={formData.inc_desc}
            />
          </td>
          <td>
            <input
              onChange={e => setFormData({ ...formData, 'income': e.target.value})}
              placeholder="Income"
              value={formData.income}
            />
          </td>
          <td><button onClick={createIncome}>Add Income</button></td>      
        </tr>

      </tbody>
    </table>

      <table className="table table-striped">
                  <thead>
            <tr>
              <th width="20%">Income Type</th>
              <th width="20%">Income Date</th>
              <th width="20%">Income Description</th>
              <th width="20%">Income (Rs. {income.reduce((a,v) => Number(a) + Number(v.income), 0)})</th>
              <th width="20%">Action</th>
            </tr>
          </thead>
      </table>

      <div style={{marginBottom: 30}}>
              {
                income.map(income => (
                  <div key={income.id || income.inc_type}>
                  <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td width="20%">{income.inc_type}</td>
                      <td width="20%">{moment(income.inc_date).format("DD-MMM-YYYY")}</td>
                      <td width="20%">{income.inc_desc}</td>
                      <td width="20%">{income.income}</td>
                      <td width="20%">
                        <button onClick={() => deleteIncome(income)}>Delete</button></td>
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

export default withAuthenticator(Income);