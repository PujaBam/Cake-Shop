class Myheader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

<header class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html"
            ><img
              src="image/logo.png"
              class="img fluid"
              height="80px"
              width="80px"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto gap-5 nav-fill">
              

              <li class="nav-item">
                <a class="nav-link" href="project.html"><b>HOME</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><b>OUR CAKE</b></a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>OUR SERVICE</b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Chocolate Items</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Cookie Items</a></li>
                  <li>
                    <a class="dropdown-item" href="cake-items.html"> Cake Items</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html"><b>CONTACT</b></a>
              </li>
            </ul>
          </div>
      </nav>
    </header>
    `
    ;
    }
  }
  customElements.define("my-header", Myheader);