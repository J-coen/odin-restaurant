const loadHome = function() {
    const content = document.getElementById('content');

    content.innerHTML = `
    <nav class="navbar">
    <img src="https://img.icons8.com/officel/40/000000/aquarius.png"/>
    <ul>
      <li><a class="nav-home" href="#">HOME</a></li>
      <li><a class="nav-menu" href="#">MENU</a></li>
      <li><a class="nav-contact" href="#">CONTACT</a></li>
    </ul>

    <!-- BURGER & SIDE NAV -->
    <article class="side-nav">

      <article class="burger-container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </article>
      
      <ul>
        <li><a class="nav-home" href="#">HOME</a></li>
        <li><a class="nav-menu" href="#">MENU</a></li>
        <li><a class="nav-contact" href="#">CONTACT</a></li>
      </ul>
    </article>

  </nav>
  
  
  <section id="banner-sect" class="banner-sect main-cont">
      <article class="main-banner-img"></article>
      <section class="banner-text">
          <article class="main-words">THE<br>RA<span class="underscore">_</span><br>MEN</article>
           <article class="location">
              <p class="desc"><img src="https://img.icons8.com/officel/40/000000/aquarius.png"/><br>
                  RAMEN SHOP &<BR> BAR</p>
              <p class="address-line"></p>
          </article>
      </section>
  </section>
  
  <section class="intro-sect main-cont">
    <article class="box-pic-container">
      <article class="back-box"></article>
      <article class="intro-sect-pic"></article>
    </article>
    <article class="intro-text-container">
      <p class="intro-text">We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients and the most advanced techniques developed by our master artisans.</p>
      <button class="book">BOOK A TABLE</button>
    </article>
  </section>
  
  <footer class="footer">
      <article class="footer-address">
          <p class="footer-titles">Address</p>
          <p>11 Downing St,</p>
          <p>Westminster,</p>
          <p>London,</p>
          <p>SW1A 2AA,</p>
      </article>
      <article class="footer-food">
          <p class="footer-titles">Our Food</p>
          <p>Allergens</p>
          <p>Our Mission</p>
          <p>Gift Cards</p>
      </article>
      <article class="footer-socials">
          <p class="footer-titles">Connect With Us: </p>
          <article class="social-icons-container">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
            </article>
      </article>
  </footer>

    `;
}

export { loadHome }