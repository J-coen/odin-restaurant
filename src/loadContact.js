const loadContact = function() {
    const content = document.getElementById('content');

    content.innerHTML = `
    <nav class="navbar">
    <img src="https://img.icons8.com/officel/40/000000/aquarius.png"/>
    
    <ul>
              <li><a class="nav-home" href="#">HOME</a></li>
        <li><a class="nav-menu" href="#">MENU</a></li>
        <li><a class="nav-contact" href="#">CONTACT</a></li>

    </ul>
    
    
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
  
  <article class="contact-title main-cont">
    <p>FIND US HERE</p>
  </article>
  
  <section class="contact-info-container main-cont">
    <article class="address">
      <p class="visit">Come and visit us</p>
      <p>11 Downing St,</p>
      <p>Westminster,</p>
      <p>London,</p>
      <p>SW1A 2AA</p>
      <p>Tel: 0168 252 4526</p>
      <button class="book-c">BOOK A TABLE</button>
    </article>
    <article class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.536888160307!2d-0.12998484850110326!3d51.503365479534544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c5417786eb%3A0xad7bf42ed9c1f5bb!2s11%20Downing%20St%2C%20Westminster%2C%20London%20SW1A%202AB!5e0!3m2!1sen!2suk!4v1596874759693!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

export { loadContact }