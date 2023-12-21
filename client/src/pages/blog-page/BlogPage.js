import "./BlogPage.css";
import Post from "../../components/post/Post";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`${API_URL}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <div className="container home-page-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content mt-0">
              <input
                type="text"
                className="search-bar"
                value={search}
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="section">
                <div
                  className="row  justify-content-center"
                  style={{ marginBottom: "20px" }}
                >
                  {posts
                    .filter((post) =>
                      post.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(0, 8)
                    .map((post) => (
                      <Post key={post._id} {...post} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
