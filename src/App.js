import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import data from "./data/db.json";
import "./App.css";
import SearchForm from "./components/SearchForm";

class App extends React.Component{
  state = {
    data,
    search: ""
  }
  resetFilterClick = event =>{
    this.setState({
      data: data
    })
  }

  handleButtonClick = event =>{
    const value = event.target.value;
    const name = event.target.name;
    const dataSorted = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      data: dataSorted
    })
  }
  handleInputChange = event => {
    // const value = event.target.value; 
    // const name = event.target.name; 
    this.setState({ search: event.target.value })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.search);
    var filter = this.state.search
    console.log(filter); 
    const dataFiltered = data.filter(employee =>{
      return employee.role === filter
    })
    this.setState({
      data: dataFiltered
    })

  };
  render() {
    return (
      <div employeeName ="containter">
        <SearchForm 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          resetFilterClick={this.resetFilterClick}
        />
        <EmployeeTable
          employees={this.state.data}
          handleButtonClick={ this.handleButtonClick }
        />
      </div>  
    )
  }
}

export default App;
