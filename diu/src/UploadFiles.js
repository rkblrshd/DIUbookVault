import React, { useState } from "react";
import axios from "axios";

function UploadFiles() {
  const [files, setFiles] = useState({});
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState("");
  const [term, setTerm] = useState("");
  const [name,setName] = useState('')
  const [examtype, setexamtype] = useState("");
  const fileonChange = e => {
    setFiles(e.target.files[0]);
  };
  const fileonimgaeChange = e => {
    setFiles(e.target.files[0]);
  };

  const upload = e => {
    let formData = new FormData();
    formData.append("avatar", files);
    formData.append("filename", name);
    formData.append("term", term);
    formData.append("level", level);
    formData.append("examtype", examtype);
    fetch("http://localhost:3001/uploadBook", {
      method: "post",
      body: formData
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <input type="file" onChange={fileonChange} />
      {/* <input type="file" onChange={fileonimgaeChange} /> */}
      <input
        type="text"
        onChange={e => setLevel(e.target.value)}
        placeholder="Level"
      />
      <input
        type="text"
        onChange={e => setTerm(e.target.value)}
        placeholder="Term"
      />
      <input
        type="text"
        onChange={e => setexamtype(e.target.value)}
        placeholder="Examtype"
      />
    <input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />

      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadFiles;
