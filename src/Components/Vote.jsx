import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'

import React from "react";

const Vote = ({ data }) => {
  const percentage = data ? data.toFixed(1) * 10 : null;

  return (
    <div className="circular-vote-bar">
      {data ? (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}`}
          styles={{
            text: {
              fill: "#1e78d2",
              fontWeight: "bold",
              fontSize: "40px",
            },
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Vote;
