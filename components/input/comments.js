import { useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const[comments,setComments]= useState([]);

  useEffect(async ()=>{
    
    if(showComments){
      const getData= await fetch(`/api/comments/${eventId}`)
      .then(response =>  response.json())
      .then( (data) =>{ 
         setComments(data.comments);
      })

      getData;
    }
    
  }, [showComments])



  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);


  }

  function addCommentHandler(commentData) {
    // send data to API
    const comment = commentData;
 
    

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers:{
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList  items={comments} />}
    </section>
  );
}

export default Comments;
