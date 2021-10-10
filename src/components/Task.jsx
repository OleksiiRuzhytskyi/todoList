import React from 'react';



class Task extends React.Component {

     render () {
            // console.log('props in Task: ', this.props)
        return (
            <>
            <li className="liItems">
                <input type="checkbox" className="input-checkbox" />
                {this.props.inputValue}                
            </li>
            </>
        )
    }
}


export default Task