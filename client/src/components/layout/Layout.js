import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <div className="container home-page-container">
        <div className="row">
          <div className="col-lg-12">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
