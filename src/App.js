import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    Name1 : "",
    Department : "",
    Rating : "",
    employees : []
  }
  changeHandler = (e) => {
    console.log("Changed");
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state)
 
  }

  submitHandler = (e) => {
e.preventDefault(); //it prevent the default nature of the button
console.log('Submit');
const employeeObj = {
  Name : this.state.Name1,
  Department : this.state.Department,
  Rating : this.state.Rating
} 
const arr = this.state.employees;
arr.push(employeeObj);
this.setState({employees : arr})



  }
  render() {
    return (
      <div>
        <h1 className='heading'>Employee Feedback Form</h1>
        <div className='form-container'>
        <form >
          <label for="Name">Name :</label>
          <br />
          <input type="text" name="Name1" value={this.state.Name1} onChange={this.changeHandler}></input>
        <br />
        <label>Department :</label>
        <br />
          <input type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}></input>
        <br />
        <label>Rating :</label>
        <br />
          <input type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input>
        <br />
        <button onClick={this.submitHandler}>Submit</button>
        </form>
        </div>
        <div className='inserted-image'>
          {this.state.employees.map((value,index)=>{
            return (
            
              <span key={index}>Name : {value.Name} Department : {value.Department} Rating : {value.Rating}</span>
              
            )

          })}
        </div>
      </div>
    )
  }
}
