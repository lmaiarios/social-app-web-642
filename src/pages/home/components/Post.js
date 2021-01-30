import { useState, useContext } from 'react'
import UserContext from '../../../contexts/UserContext'
import './Post.css'

function Post({profilePic, fullName}){
    const [text, setText] = useState('')
    const [comments, setComments] = useState([])
    const { user } = useContext(UserContext)

    const handleComment = e => {
        e.preventDefault()

        const newComment = {
            fullName: user.fullName,
            profilePic: user.thumbnail,
            date: new Date().toDateString(),
            content: text,
        }
        setText('')
        setComments([...comments, newComment])
    }

    return (
        <div className="post">
            <div className="post-header">
                <img
                    className="post-pic"
                    src={profilePic}
                    alt="Post thumbnail"
                />
                <span className="post-name">
                    {fullName}
                </span>
            </div>
            <div className="post-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec diam vel mauris vehicula sollicitudin eget non dui. Integer vitae orci est. Curabitur quam est, volutpat at hendrerit vitae, auctor eget erat. Ut mollis nisl ac feugiat consectetur. Nam sed condimentum enim, sed tincidunt erat. Integer nec semper velit. Maecenas sodales sit amet ligula sodales tempor. Integer consequat viverra eleifend. Cras viverra laoreet consectetur. Sed mattis cursus elit. Donec venenatis iaculis congue. Pellentesque vitae posuere augue, in tincidunt erat. Quisque sagittis lobortis nisl eu posuere.

                Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac dolor pharetra, commodo mi commodo, fermentum eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae rhoncus orci. Nullam iaculis ex non tortor egestas consequat. Sed vitae ligula fermentum metus interdum malesuada. Donec nec ullamcorper ligula, non maximus metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ut lectus lectus. Nunc quis diam dui. Donec eleifend sagittis mi, in consectetur mauris commodo et. Donec et quam imperdiet, porttitor lacus ut, elementum sem. Duis congue nulla id placerat placerat.

                Nulla dapibus ac magna ac varius. Sed sit amet vulputate dolor. Praesent eget lacus nibh. Fusce quis lacus vitae quam consequat finibus ut vitae odio. Proin eu ipsum eu neque accumsan aliquam. Nulla consequat elit felis, quis convallis massa malesuada vel. Etiam mattis enim in enim feugiat, placerat aliquet justo viverra. Nullam nec scelerisque arcu, vel lacinia metus. Nam et sollicitudin lacus. Suspendisse rutrum et augue vitae auctor. Suspendisse potenti.
                
            </div>
            <div className="comments-holder">
                {comments.map( (comment, index) => <Comment key={index} {...comment} /> )}
            </div>
            <form className="comment-form" onSubmit={handleComment}>
                <textarea className="comment-text" value={text} onChange={e => setText(e.target.value)}></textarea>
                <button className="submit-comment" type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default Post

function Comment({profilePic, fullName, content, date}){
    return (
        <div className="comment">
            <div className="comment-header">
                <img className="comment-pic" src={profilePic} alt="Comment profile pic" />
                <span className="comment-name">
                    {fullName}
                </span>
            </div>
            <div className="content-holder">
                <p>{content}</p>
                <span className="comment-date">{date}</span>
            </div>
            <hr/>
        </div>
    )
}