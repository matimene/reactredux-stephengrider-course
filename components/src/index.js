import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail imgSrc={faker.image.avatar()} author="Sam" timeAgo="Today at 6:00PM" content="Hi there!" />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail imgSrc={faker.image.avatar()} author="Pedro" timeAgo="Today at 2:00AM" content="motherfucker" />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail imgSrc={faker.image.avatar()} author="Joe" timeAgo="Yesterday at 8:05PM" content="Wyd?" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));
