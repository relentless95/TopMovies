import React, { useState } from "react";
import Comments from "../Components/Comments";
import commentsJson from "../comments.json";

function DetailsPage() {
  const [commentsData, setComments] = useState(commentsJson);
  console.log(commentsData);
  return (
    <>
      <div>DetailsPage</div>
      <div className="comment-label">Comments</div>
      {commentsData.map((oneComment) => {
        return (
          <Comments
            name={oneComment.user.name}
            image={oneComment.user.image}
            timestamp={oneComment.timestamp}
            message={oneComment.message}
          />
        );
      })}
    </>
  );
}

export default DetailsPage;
