import React from "react";
import "./Plugin.css";

const Plugin = () => {
  return (
    <div className="plugin">
      <h1>Upload plugin</h1>
      <p>
        Add image uploading to your website, blog or forum by installing our
        upload plugin. It provides image uploading to any website by placing a
        button that will allow your users to directly upload images to our
        service and it will automatically handle the codes needed for insertion.
        All features included like drag and drop, remote upload, image resizing
        and more.
      </p>
      <h2>Supported software</h2>
      <p>
        The plugin works in any website with user-editable content and for
        supported software, it will place an upload button that will match the
        target editor toolbar so no extra customization is needed.
      </p>
      <h2>Add it to your website</h2>
      <p>
        Copy and paste the plugin code into your website HTML code (preferably
        inside the head section). There are plenty options to make it fit better
        to your needs.
      </p>

      <input
        type="text"
        placeholder="<script async src=https:size=100 //imgbb.com/upload.js></script>"
        maxlength="100"
      />
      <button>Upload images</button>
    </div>
  );
};

export default Plugin;
