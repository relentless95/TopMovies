import React, { useState } from "react";
import Comments from "../Components/Comments";
import commentsJson from "../comments.json";

function DetailsPage() {
  const [commentsData, setComments] = useState(commentsJson);
  // console.log(commentsData);
  const [newmessage, setAddComment] = useState("");
  const [newname, setAddName] = useState("");
  let newimage =
    "https://pbs.twimg.com/profile_images/789138937574981632/Us7EZG3q_400x400.jpg";
  let newtimestamp = new Date().toLocaleString();
  console.log(newimage, newtimestamp);

  const appendComment = (someComment) => {
    const toAdd = [...commentsData, someComment];
    setComments(toAdd);
    console.log("last food added is:", commentsData[commentsData.length - 1]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newComment = {
      user: { name: newname, image: newimage },
      timestamp: newtimestamp,
      message: newmessage,
    };
    appendComment(newComment);
  };

  const deleteComment = (commentAuthor) => {
    const remainingComments = commentsData.filter((comment) => {
      return comment.user.name !== commentAuthor;
    });
    setComments(remainingComments);
  };

  return (
    <>
      {/* <div>DetailsPage</div> */}
      <div className="comment-label">Comments</div>
      {commentsData.map((oneComment, index) => {
        return (
          <Comments
            key={index}
            name={oneComment.user.name}
            image={oneComment.user.image}
            timestamp={oneComment.timestamp}
            message={oneComment.message}
            deleteComment={deleteComment}
          />
        );
      })}
      <form className="comment-section" onSubmit={handleSubmit}>
        <p>Leave your comment below</p>
        <label htmlFor="add-name">
          Name:
          <input
            id="add-name"
            className="add-name-comment"
            value={newname}
            type="text"
            onChange={(e) => setAddName(e.target.value)}
            placeholder="enter your name"
          />
        </label>
        <label htmlFor="textarea">comment:</label>
        <textarea
          id="textarea"
          name="textarea"
          className="add-comment"
          value={newmessage}
          type="text"
          onChange={(e) => setAddComment(e.target.value)}
          cols="100"
          rows="6"
        />
        <button disabled={!(newmessage && newname)}>Add comment</button>
      </form>
    </>
  );
}

export default DetailsPage;
