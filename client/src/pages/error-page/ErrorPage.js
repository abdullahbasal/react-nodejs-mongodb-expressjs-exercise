import "../home-page/HomePage.css";
import "./ErrorPage.css";

import error from "../../assets/images/error.jpg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main>
      <div className="container error-page-container">
        <div className="row w100">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="section">
                <Link to={"/"}>
                  <img src={error} alt="error" />
                </Link>
              </div>
              <Link to={"/"}>
                <div className="return-home">
                  Click to return to the home page
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
