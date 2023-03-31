class Myfooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

<section class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4">
              <h3>KEY LINKS</h3>

              <p>About us</p>
              <p>Delivery Information</p>

              <button class="btn-all" type="button" name="btn">SHOP NOW</button>
            </div>
            <div class="col-12 col-lg-4">
              <h3>CONTACT</h3>
              <p>Cake Delivery Center</p>
              <p>Address: Kathmandu Nepal</p>
              <p>E-Mail: puja@gmail.com</p>
            </div>
            <div class="col-12 col-lg-4">
              <h3>Get in Touch</h3>
              <div class="icon">
                <button class="social-icons">
                  <i class="bi bi-facebook"></i>
                </button>
                <button class="social-icons">
                  <i class="bi bi-messenger"></i>
                </button>
                <button class="social-icons">
                  <i class="bi bi-envelope-at"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
      ;
      }
    }
    customElements.define("my-footer", Myfooter);