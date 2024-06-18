import React from "react";
import "./Bottom.css";
const Bottom = () => {
  return (
    <>
      <div className="main">
        <div className="side1">
          <h3>image</h3>
          <p>Uploaded 10 months ago</p>
        </div>
        <div className="side2">
          <div className="d1">
            <button className="btn0">
              <p>
                <i class="bi bi-download"></i>
              </p>
            </button>
            <button className="btn11">
              <p>
                <i class="bi bi-heart"></i>Like
              </p>
            </button>
            <button className="btn22">
              <p>
                <i class="bi bi-share-fill"></i>Share
              </p>
            </button>
          </div>
          <div className="d">
            <p>98 views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
