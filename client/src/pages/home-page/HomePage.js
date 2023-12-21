import "./HomePage.css";
import cat from "../../assets/images/cat.png";
import xpafyPlayingGame from "../../assets/images/xpafyPlayingGame.jpg";
import xpafyApps from "../../assets/images/xpafyApps.jpg";
import xpafyCat from "../../assets/images/xpafyCat.png";
import console from "../../assets/images/console.png";
import robocop from "../../assets/images/robocop.jpg";
import phoneApps from "../../assets/images/phoneApps.png";
import mobileApps from "../../assets/images/mobileApps.jpg";
import xpafyAboutImage from "../../assets/images/xpafyAboutImage.png";

import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlay.png";
import discord from "../../assets/images/discord.png";
import { useContext } from "react";
import { UserContext } from "../../components/user-context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import Post from "../../components/post/Post";
import { API_URL } from "../../config";

export default function HomePage() {
  const { about, games, apps, contact, blogs } = useContext(UserContext);
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
    <div className="container home-page-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content mt-0">
            <div className="d-flex flex-column align-items-center">
              <h1 className="slogan">
                Unique Applications, Unlimited enjoy xPafy is with you
              </h1>
              <img src={cat} style={{ maxHeight: "600px" }} alt="cat" />
            </div>
            <div className="container section" ref={about}>
              <div className="card mb-3">
                <div className="row g-0 gap-20 section-row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h1 className="linear-text">xPafy About</h1>
                      <p className="card-text">
                        xPafy was launched in 2024 to provide you with a unique
                        gaming experience and develop applications that will
                        make your life easier.
                        <br />
                        <br />
                        On this site, you can see all the applications and games
                        together, explore the blog page, and join the Discord
                        channel anytime you want.
                      </p>
                      <img src={xpafyAboutImage} alt="about" />
                    </div>
                  </div>
                  <div className="col-md-5 image-div">
                    <img
                      src={mobileApps}
                      style={{ height: "100%", maxHeight: 500 }}
                      alt="mobile apps"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container section" ref={games}>
              <div className="card mb-3">
                <div className="row g-0 gap-20 section-row">
                  <div className="col-md-5 image-div">
                    <img
                      src={xpafyPlayingGame}
                      style={{ height: "100%", maxHeight: 500 }}
                      alt="xpafy games"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h1 className="linear-text">Games</h1>
                      <p className="card-text">
                        Have you ever gotten bored of scrolling through social
                        media when you pick up your phone? Then, why not
                        discover xPafy's enjoyful games and enjoy the taste of
                        this magical world with pleasure.
                        <br />
                        <br />
                        Moreover, by joining the Discord channel, you can both
                        have fun and enjoy meeting new people.
                      </p>
                      <img src={console} alt="console" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section background">
              <div
                className="row gap-20 justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
              </div>
              <div className="row gap-20 justify-content-center">
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
              </div>
            </div>

            <div className="container section" ref={apps}>
              <div className="card mb-3">
                <div className="row g-0 gap-20 section-row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h1 className="linear-text">Apps</h1>
                      <p className="card-text">
                        Applications that offer innovations in many aspects of
                        your life and can accompany you at any moment are now
                        available on the Google Play Store.
                        <br />
                        <br />
                        You can find the suitable application for you on the
                        Google Play Store and download it for free.
                      </p>
                      <img src={phoneApps} alt="phone apps" />
                    </div>
                  </div>
                  <div className="col-md-5 image-div">
                    <img
                      src={xpafyCat}
                      style={{ height: "100%", maxHeight: 500 }}
                      alt="xpafy cat"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section background ">
              <div
                className="row gap-20 justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
              </div>
              <div className="row gap-20 justify-content-center">
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
                <div className="col-md-2">
                  <img src={xpafyApps} alt="xpafy apps" />
                </div>
              </div>
            </div>

            <div className="container section join-us-container" ref={contact}>
              <div className="card mb-3">
                <div className="row g-0 gap-20">
                  <div className="col-md-5 image-div">
                    <img
                      src={robocop}
                      style={{ height: "100%" }}
                      alt="robocop"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h1 className="linear-text">Join us</h1>
                      <p className="card-text">
                        Take action now to join us and open the doors to this
                        unique world!
                        <br />
                        Come on! The xPafy family is looking forward to seeing
                        you among them.
                        <br />
                        <br />
                        <div className="row">
                          <div className="col-12 d-flex justify-content-center">
                            <a
                              href="https://discord.com/invite/bSUGrGD"
                              target="_blank"
                            >
                              <img
                                src={discord}
                                className="logo"
                                style={{ width: 130, height: 130 }}
                                alt="logo"
                              />
                            </a>
                          </div>
                        </div>
                      </p>
                      <div className="col-12 d-flex gap-20">
                        <div className="col-6 d-flex justify-content-center flex-column">
                          <img
                            src={googlePlay}
                            alt="Google play"
                            className="pointer"
                          />
                        </div>
                        <div className="col-6  d-flex justify-content-center flex-column">
                          <img
                            src={appStore}
                            style={{
                              cursor: "not-allowed",
                            }}
                            alt="App Store Coming Soon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section background " ref={blogs}>
              <div
                className="row gap-20 justify-content-center"
                style={{ marginBottom: "20px" }}
              >
                <div className="col-md-12 text-center">
                  <h1 className="linear-text">Blogs</h1>
                </div>
                {posts
                  .filter((post) =>
                    post.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .slice(0, 3)
                  .map((post) => (
                    <Post key={post._id} {...post} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
