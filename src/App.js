// import { render } from '@testing-library/react';
import React from 'react';
import CustomInput from './components/CustomInput';
import List from './components/List'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueArray: [],
      
    }
    this.addTodo = this.addTodo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  addTodo(inputValue) {
    console.log("addTodo:",inputValue)    
    this.setState({
      // inputValue: this.state.inputValueArray.concat(
      //  { inputValue } )    
    inputValueArray: [...this.state.inputValueArray, inputValue]  
  })
    localStorage.setItem('inputValue', JSON.stringify(inputValue))
  }
  render(){
        console.log(this.state.inputValueArray)
     return (

    <form  action="" onSubmit={this.handleSubmit}>
    <CustomInput addTodo={this.addTodo} />  
     <List inputValueArrayFromApp={this.state.inputValueArray}/>
     </form>

  );
  }
}
 


export default App;
