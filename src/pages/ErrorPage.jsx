import React from "react";

function ErrorPage() {
  return (
    <>
      <div className="error-page">
        <h1> An error occured. Please go back to the main page.</h1>
        <h2 className="centered">404</h2>
        <img src={"/images/hommer.gif"} alt="404" />
      </div>
    </>
  );
}

export default ErrorPage;
