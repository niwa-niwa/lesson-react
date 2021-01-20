import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


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
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 20:38"
                    content="Nice blog post"
                    img="https://source.unsplash.com/random"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="yesterday at 4:00"
                    content="Hell yeah"
                    img="https://source.unsplash.com/random"
                />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
