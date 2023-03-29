
function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="./image/logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars nav-icon" />
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active p-2 p-lg-3" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 p-lg-3" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 p-lg-3" href="#">Portofolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 p-lg-3" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-2 p-lg-3" href="#">Contact</a>
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block">
            <i className="fa-solid fa-magnifying-glass nav-search" />
          </div>
          <a className="btn main-btn rounded-pill fw-bold" href="#">Login</a>
        </div>
      </div>
    </nav>
    {/* /* end navbar----------------------------------------------- * / */}
    {/* start landing     -------------------------------------*/}
    <div className="landing d-flex justify-content-center align-items-center">
      <div className="text-center text-light">
        <h1 className="fw-light">Taste the Creativity</h1>
        <p className="fw-lighter fs-6 text-white-50 mb-4">We make awesome graphic and web design</p>
        <a className="btn main-btn rounded-pill fw-bold" href="#">Get Started</a>
      </div>
    </div>
    {/* End landing     -------------------------------------*/}
    {/* start features     -------------------------------------*/}
    <div className="features pt-5 pb-5">
      <div className="container">
        <div className="main-title text-center mb-5 mt-3 position-relative">
          <i className="fa-regular fa-pen-to-square fs-1 feat-icon mb-4" />
          <h2 className="fw-bold mb-3">We are Good at</h2>
          <p className="fw-normal fs-6 text-black-50">SOME OF THESE STUFF UNDER</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="feat text-center">
              <div className="feat-icon-box position-relative mb-5">
                <i className="fa-solid fa-1 number position-absolute" />
                <i className="fa-solid fa-pencil pen position-absolute fa-4x" />
              </div>
              <h4 className="fw-bold mb-3 mt-3">GRAPHIC DESIGN</h4>
              <p className="text-black-50 lh-3">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat text-center">
              <div className="feat-icon-box position-relative mb-5">
                <i className="fa-solid fa-2 number position-absolute" />
                <i className="fa-solid fa-tv pen position-absolute fa-4x" />
              </div>
              <h4 className="fw-bold mb-3 mt-3">GRAPHIC DESIGN</h4>
              <p className="text-black-50 lh-3">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="feat text-center">
              <div className="feat-icon-box position-relative mb-5">
                <i className="fa-solid fa-3 number position-absolute" />
                <i className="fa-solid fa-plug pen position-absolute fa-4x" />
              </div>
              <h4 className="fw-bold mb-3 mt-3">GRAPHIC DESIGN</h4>
              <p className="text-black-50 lh-3">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End features     -------------------------------------*/}
    {/* start Work     -------------------------------------*/}
    <div className="our-work">
      <div className="container">
        <div className="main-title text-center mb-5 mt-5 position-relative">
          <i className="fa-regular fa-pen-to-square fs-1 feat-icon mb-4 mt-5" />
          <h2 className="fw-bold mb-3">We Make This</h2>
          <p className="fw-normal fs-6 text-black-50">PREPARE TO BE AMAZED</p>
        </div>
        <ul className="d-flex justify-content-center list-unstyled mb-5">
          <li className="active rounded-start-pill">All</li>
          <li className>Design</li>
          <li className>Code</li>
          <li className>Photo</li>
          <li className>App</li>
        </ul>
        <div className="row text-center mt-3">
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-01.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-02.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-03.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-04.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-05.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-06.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-07.jpg" alt="" />
            </div>
          </div>
          <div className="image-work col-sm-6 col-md-4 col-lg-3">
            <div className="image-box mb-3 bg-white">
              <img className="img-fluid" src="./image/work-08.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a className="btn main-btn rounded-pill fw-bold mb-5 text-uppercase" href="#">I Want More</a>
        </div>
      </div>
    </div>
    {/* End Work     -------------------------------------*/}
    {/* start Stuff     -------------------------------------*/}
    <div className="stuff">
      <div className="container">
        <div className="main-title text-center mb-5 mt-5 position-relative">
          <i className="fa-regular fa-pen-to-square fs-1 feat-icon mb-4 mt-5" />
          <h2 className="fw-bold mb-3">Some Stuff About Us</h2>
          <p className="fw-normal fs-6 text-black-50">THE GREAT TEAM</p>
        </div>
        <p className="fw-normal fs-6 text-center col-lg-5 mt-4 m-auto">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
        <div className="row mt-5">
          <div className="col-lg-4 text-center text-md-start align-items-center">
            <div className="text">
              <h3 className="fw-bold mb-3 my-name">MAHMOUD Design</h3>
              <p className="text-black-50 mb-3">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
              <p className="text-black-50 mb-3">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
            </div>
            <div className="div-btn-stuff mt-sm-3">
              <a className="btn main-btn rounded-pill fw-bold text-uppercase mt-sm-2 btn-stuff" href="#">ORDER ME ONE</a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="image">
              <img className="image-fluid big-photo" src="./image/laptop.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Stuff       -------------------------------------*/}
    {/* start Team      -------------------------------------*/}
    <div className="team pt-5 pb-5 text-center">
      <div className="container pt-4 pb-4">
        <div className="text mb-5">
          <h2 className="mb-2 fw-bolder">Meet The Team</h2>
          <p className="text-black-50 fw-normal">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="box">
              <img className="img-fluid modal-sm" src="./image/team-1.png" alt="" />
              <h4 className="p-3 mb-0 fw-bold">MAHMOUD ADEL</h4>
              <blockquote className="p-4 fw-normal taxt-black-50 bg-white">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box">
              <img className="img-fluid" src="./image/team-2.png" alt="" />
              <h4 className="p-3 mb-0 fw-bold fs-4">HOSSAM El ARABI</h4>
              <blockquote className="p-4 fw-normal taxt-black-50 bg-white">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box">
              <img className="img-fluid" src="./image/team-3.png" alt="" />
              <h4 className="p-3 mb-0 fw-bold fs-4">AHMED  ElAHMADI</h4>
              <blockquote className="p-4 fw-normal taxt-black-50 bg-white">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box">
              <img className="img-fluid" src="./image/team-4.png" alt="" />
              <h4 className="p-3 mb-0 fw-bold">Luke Skywalker</h4>
              <blockquote className="p-4 fw-normal taxt-black-50 bg-white">“I don't understand how we got by those troops. I thought we were dead.“</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Team      -------------------------------------*/}
    {/* srart Teatch      -------------------------------------*/}
    <div className="tech pt-5 pb-5 text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid " src="./image/./tech-1.png" alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src="./image/./tech-2.png" alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src="./image/./tech-3.png" alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src="./image/./tech-4.png" alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src="./image/./tech-1 (1).png" alt="" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
            <img className="img-fluid" src="./image/./tech-2 (1).png" alt="" />
          </div>
        </div>    
      </div>
    </div>
    {/* End Teatch          -------------------------------------*/}
    {/* start project          -------------------------------------*/}
    <div className="project text-center pb-5 pt-5">
      <div className="container">
        <h2 className="fw-bold mb-2">Start Your Project Now</h2>
        <p className="mb-5 text-white-50">Leave your description and we start the engine.Don't worry,you can cancel anytime</p>
        <a className="btn main-btn rounded-pill fw-bold mb-5 text-uppercase" href="#">START PROJECT</a>
      </div>
    </div>
    {/* End project          -------------------------------------*/}
    {/* start read           -------------------------------------*/}
    <div className="read text-center pt-5 pb-5">
      <div className="container pt-3">
        <div className="main-title text-center mb-5 mt-3 position-relative">
          <i className="fa-regular fa-pen-to-square fs-1 feat-icon mb-4" />
          <h2 className="fw-bold mb-3">Read Our Blog</h2>
          <p className="fw-normal fs-6 text-black-50">NEW STORIES</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 text-lg-start">
            <div className="card">
              <img src="./image/blog-1.jpg" className="card-img-top" alt="Plog Post" />
              <div className="card-body">
                <p className="card-text text-black-50 fw-bold">Jan 17, 2022</p>
                <h5 className="card-title fw-bold">Some Awesome Blog Title Here</h5>
              </div>
            </div>          
          </div>
          <div className="col-md-6 col-lg-4 text-lg-start">
            <div className="card">
              <img src="./image/blog-2.jpg" className="card-img-top" alt="Plog Post" />
              <div className="card-body">
                <p className="card-text text-black-50 fw-bold">Jan 17, 2022</p>
                <h5 className="card-title fw-bold fs-5">Some Awesome Blog Title Here</h5>
              </div>
            </div>          
          </div>
          <div className="col-md-6 col-lg-4 text-lg-start">
            <div className="card">
              <img src="./image/blog-3.jpg" className="card-img-top" alt="Plog Post" />
              <div className="card-body">
                <p className="card-text text-black-50 fw-bold">Jan 17, 2022</p>
                <h5 className="card-title fw-bold">Some Awesome Blog Title Here</h5>
              </div>
            </div>          
          </div>
          <div className="btn">
            <a className="btn main-btn rounded-pill fw-bold mb-0 mt-5" href="#">MORE STORIES</a>
          </div>  
        </div>
      </div>
    </div>
    {/* End read           -------------------------------------*/}
    {/* start Subscribe           -------------------------------------*/}
    <div className="subscribe pt-5 pb-5 text-center">
      <div className="container pt-3 pb-3">
        <div className="row align-items-center text-md-start">
          <div className="col-lg-3 col-md-6 ">
            <h5 className="fw-bolder ms-md-2">Subscribe to our Newsletter:</h5>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="inp position-relative pb-2">
              <input className="w-75 border-0 p-2" type="email" name id placeholder="Enter Email Address" />
            </div>
          </div>
          <div className="col-lg-2 text-md-start mt-md-3">
            <div className="btn2">
              <a className="btn main-btn rounded-pill fw-bold" href="#">Subscribe</a>
            </div>  
          </div>
        </div>
      </div>
    </div>
    {/* End Subscribe          -------------------------------------*/}
    {/* start Footer          -------------------------------------*/}
    <div className="footer pt-5 pb-0 mb-0 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <img className="img-fluid mb-4 image-footer" src="./image/logo.png" alt="" />
            <p className="mb-5 text-white-50 fw-bold">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
            <div className="created">
              <p className="text-white-50 fw-bold">Created By <span className="name1">MAHMOUD ADEL</span></p>
              <p className="mb-5 text-white-50 fw-bold">© 2022 - <span className="name2">M.ADel</span></p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 text-lg-start mb-sm-5">
            <ul className="navbar-nav p-0 ul-footer">
              <li className="nav-item">
                <a className="nav-link fw-bold fs-4 pt-0" aria-current="page" href="#">LINKS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" href="#">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" href="#">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 fw-bold" href="#">Terms and Condition</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 text-lg-start mt0 mb-sm-5">
            <ul className="navbar-nav text-white-50">
              <li className="nav-item fw-bold mb-3 text-light fs-4">About Us</li>
              <li className="nav-item fw-bold mb-3">Sign In</li>
              <li className="nav-item fw-bold mb-3">Register</li>
              <li className="nav-item fw-bold mb-3">About Us</li>
              <li className="nav-item fw-bold mb-3">Blog</li>
              <li className="nav-item fw-bold mb-3">Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 text-lg-start">
            <h5 className="mb-3  text-white fw-bold fs-4">Contact Us</h5>
            <p className="mb-4 text-white-50 fw-bold lh-lg">Get in touch with us via mail phone.We are waiting for your call or message</p>
            <div className="btn mb-4 w-100">
              <a className="btn main-btn rounded-pill fw-bold ps-4 pe-4 w-100" href="#">M.ADEL@gmail.com</a>
            </div>  
            <ul className="list-unstyled d-flex gap-4 icon-footer justify-content-center">
              <li><a className="d-block text-light" href><i className="fa-brands fa-facebook rounded-circle p-2" /></a></li>
              <li><a className="d-block text-light" href><i className="fa-brands fa-twitter rounded-circle p-2" /></a></li>
              <li><a className="d-block text-light" href><i className="fa-brands fa-linkedin rounded-circle p-2" /></a></li>
              <li><a className="d-block text-light" href><i className="fa-brands fa-youtube rounded-circle p-2" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;
