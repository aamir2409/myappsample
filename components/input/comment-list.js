import classes from './comment-list.module.css';
import {useEffect, useState} from "react";

function CommentList(props) {


  

 
  
  return (
    <ul className={classes.comments}>
      {props.items.map(item => {
        return(
          <li>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        );
      })}
      {/* <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li> */}
    </ul>
  );
}

export default CommentList;
