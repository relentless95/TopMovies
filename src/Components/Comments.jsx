import React from "react";

// for the user image use: https://source.unsplash.com/random/?person
let timestamp = new Date();
console.log(timestamp);
console.log(typeof timestamp);
console.log({ timestamp });
console.log(timestamp.length);
console.log(timestamp.toDateString());
let c = timestamp.toDateString();

function Comments({name, image, timestamp, message}) {
  return (
    <>

      <div className="comment-container">
        {/* <img
          src={"https://source.unsplash.com/random/?person"}
          alt="random person"
          className="profile-image"
        /> */}
        <div className="comment-body">
          <div className="comment-top">
            <div className="experiment">
              <img
                src={image}
                alt="random person"
                className="profile-image"
              />
              <span className="user">
                <span className="name">{name}</span>
                {/* <span className="handle"></span> */}
              </span>
            </div>

            <span className="timestamp">{timestamp}</span>

            {/* <User userData ={user}/>
            <Timestamp time={timestamp}/> */}
          </div>
          {/* <Message/> */}
        </div>
        <p className='message'>{message}</p>
        <div className="actions">
          <button>delete</button>
        </div>
      </div>
    </>
  );
}

export default Comments;
