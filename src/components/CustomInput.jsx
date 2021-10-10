import React from "react";


class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }

        this.changeInputValue = this.changeInputValue.bind(this)
        this.onKeyUpInput = this.onKeyUpInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    changeInputValue(event) {
        this.setState({ 
            inputValue: event.target.value
        })
    }

    onKeyUpInput(e) {
        if (e.keyCode === 13 && this.state.inputValue.lenght) {
            this.props.addTodo(this.state.inputValue);
            this.setState({ 
                inputValue: "" 
            });
            console.log(e.target)
        }
    }

    addTodo() {
        if (this.state.inputValue.length) {
            this.props.addTodo(this.state.inputValue)
               this.setState({ 
                inputValue: "" 
            });
        }
    }    
        

    render() {
        const {inputValue} = this.state

            return (            
                <div className="todo-input">
                    <label htmlFor="todoInput"></label>
                    <input type="text" 
                    className="inputValue" 
                    id="todoInput" 
                    value={inputValue} 
                    onChange={this.changeInputValue}
                    onKeyUpInput ={this.onKeyUpInput}
                    />

                    <input type="button" value = 'Add' onClick={this.addTodo} />
                </div>
           

        )
    }
}

    export default CustomInput;