import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../components/editor/Editor";
import { API_URL } from "../../config";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    if (files !== "") {
      const data = new FormData();
      data.set("title", title);
      data.set("summary", summary);
      data.set("content", content);
      data.set("file", files[0]);
      ev.preventDefault();
      const response = await fetch(`${API_URL}/post`, {
        method: "POST",
        body: data,
        credentials: "include",
      });
      if (response.ok) {
        setRedirect(true);
      }
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container home-page-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="col-12 footer">
            <div className="section background ">
              <div
                className="row gap-20 justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <form onSubmit={createNewPost}>
                  <input
                    type="title"
                    placeholder={"Title"}
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  <input
                    type="summary"
                    placeholder={"Summary"}
                    value={summary}
                    onChange={(ev) => setSummary(ev.target.value)}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                  <input
                    type="file"
                    onChange={(ev) => setFiles(ev.target.files)}
                  />
                  <Editor value={content} onChange={setContent} />
                  <button
                    style={{
                      marginTop: "5px",
                      width: "100%",
                      marginBottom: "10px",
                      backgroundColor: "#F11A7B",
                      color: "white",
                    }}
                  >
                    Create post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
