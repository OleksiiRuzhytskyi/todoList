import React from 'react';
import Task from './Task';


class List extends React.Component {

    render() {
        const listItems = this.props.inputValueArrayFromApp
            .map((item, index) => {
                return (
                    <Task 
                        id={item.id}
                        inputValue={item}
                        key={index} 
                    />
                )
            })
        return (
            <div className="list-container">
                {listItems}
            </div>
           
            
        )
    }
}

export default List