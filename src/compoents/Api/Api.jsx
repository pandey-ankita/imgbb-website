import React from "react";
import "./Api.css";

function Api() {
  return (
    <div className="contain">
      <h1>API version 1</h1>
      <p>Imgbb's API v1 allows to upload pictures.</p>
      <button className="get">Get API key</button>
      <h2>Request method</h2>
      <p>
        API v1 calls can be done using the POST or GET request methods but since
        GET request are limited by the maximum allowed length of an URL you
        should prefer the POST request method.
      </p>
      <h2>Image Upload</h2>
      <p>
        <input type="text" placeholder="https://api.imgbb.com/1/upload" />
      </p>
      <h2>Parameters</h2>
      <h3>key (required)</h3>
      <p>The API key.</p>
      <h3>image (required)</h3>
      <p>A binary file, base64 data, or a URL for an image. (up to 32 MB)</p>
      <h3>name (optional)</h3>
      <p>
        The name of the file, this is automatically detected if uploading a file
        with a POST and multipart/form-data
      </p>
    </div>
  );
}

export default Api;
