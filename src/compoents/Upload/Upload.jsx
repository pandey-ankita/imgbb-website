import React from "react";

const UploadPage = () => {
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px", marginTop: "20%" }}>
        Drag and drop or paste images here to upload
      </p>
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        You can also{" "}
        <a href="#" style={{ color: "#007bff" }}>
          browse from your computer
        </a>{" "}
        or{" "}
        <a href="#" style={{ color: "#007bff" }}>
          add image URLs
        </a>
        .
      </p>
    </div>
  );
};

export default UploadPage;
