import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useGeneral } from "../context/general.context";

export function Contact() {
  const {nav, setNav} = useGeneral()
  useEffect(() => {
    setNav(false)
  }, [])

  return (
    <div class="main">
      <Navbar nav={nav} setNav={setNav}/>
      <section class={`contact-section sec-padding ${nav ? "fade-out" : ""}`}>
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="contact-form">
              <form
                action="https://getform.io/f/a76f249c-0065-4e65-b322-f95ee8ceec4a"
                method="POST"
              >
                <div class="row">
                  <div class="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="input-cantrol"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      class="input-cantrol"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      class="input-cantrol"
                      required
                    />
                  </div>
                  <div class="input-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      class="input-cantrol"
                      cols="10"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="submit-btn">
                    <button type="submit" class="btn">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="contact-info">
              <div class="contact-info-item">
                <h3>Email</h3>
                <p>vishrutapatil2106@gmail.com</p>
              </div>
              <div class="contact-info-item">
                <h3>social links</h3>
                <div class="social-links">
                  <a
                    href="http://www.linkedin.com/in/vishruta-patil-30106b204"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://github.com/Vishruta-Patil" target="_blank">
                    <i class="fa fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://vishrutapatil2106.medium.com/"
                    target="_blank"
                  >
                    <i class="fa fa-medium fa-2x"></i>
                  </a>
                  <a
                    href="https://twitter.com/vishruta_patil?s=08"
                    target="_blank"
                  >
                    <i class="fa fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
