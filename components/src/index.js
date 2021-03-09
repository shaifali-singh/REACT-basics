// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from  './CommentDetail';
import ApprovalCard from './ApprovalCard';
//create a react component
const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
            author="ria" 
            timeAgo="Today at 4:34PM" 
            imagedata={faker.image.image()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Mathew"  
            timeAgo="Today at 4:00PM" 
            imagedata={faker.image.image()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="JOHN"  
            timeAgo="Today at 2:34PM" 
            imagedata={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));