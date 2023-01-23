import { Navbar } from "../components/Navbar";
import { PROFILE_IMAGE } from "../utils/imageConstants";
import {Link} from "react-router-dom"
import { useGeneral } from "../context/general.context";
import { useEffect } from "react";

export function Home() {
  const {nav, setNav} = useGeneral()
  useEffect(() => {
    setNav(false)
  }, [])
  
  return (
    <div class={`main`}>
      <Navbar nav={nav} setNav={setNav}/>
      <section class={`home-section align-items-center ${nav ? "fade-out" : ""}`}>
        <div class="container">
          <div class="row align-items-center">
            <div class="home-text">
              <p>Hello, I'm</p>
              <h1>Vishruta Patil</h1>
              <h2>
                <span></span>
              </h2>
              <Link to="/about" class="btn link-item">
                About
              </Link>
              <Link to="/projects" class="btn link-item">
                Projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1LXiWtgKUw_r_IoiEvsJATKcsu-kT7WL_/view?usp=share_link"
                target="_blank"
                class="btn link-item"
              >
                Resume
              </a>
            </div>
            <div class="home-img">
              <div class="img-box">
                <img src={PROFILE_IMAGE} alt="Profile photo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
