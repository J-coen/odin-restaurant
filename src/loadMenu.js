const loadMenu = function() {
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
  
  <article class="menu-title main-cont">
    <p>MENU</p>
  </article>
  
  <section class="menu-container main-cont">
    <article class="baos">
      <p class="menu-section-title">Bao</p>
      <p class="dish-title">Pork Belly</p>
      <article class="dish-and-price">
        <p class="dish-desc">Red brasied pork, pickled mustard greens, crushed peanut & coriander</p>
        <p class="price">£6</p>
      </article>
      <p class="dish-title">Chicken</p>
      <article class="dish-and-price">
        <p class="dish-desc">White cut chicken, ginger, spring onion, Sichuan chilli oil & sesame chicken crackle</p>
        <p class="price">£6</p>
      </article>
      <p class="dish-title">Beef Shin</p>
      <article class="dish-and-price">
        <p class="dish-desc">Braisd with chilli, black vinegar, oyster mushrooms & a cured egg yolk</p>
        <p class="price">£6</p>
      </article>
      <p class="dish-title">
Tofu & Aubergine (ve)</p>
      <article class="dish-and-price">
        <p class="dish-desc">Fragrant aubergine, ginger & spring onion </p>
        <p class="price">£6</p>
      </article>
    </article>
    
    <article class="ramen">
      <p class="menu-section-title">Ramen</p>
      <p class="dish-title">Miso Tonkotsu</p>
      <article class="dish-and-price">
        <p class="dish-desc">Slow cooked pork belly marinated in bulgogi sauce served on top of noodles in a chicken broth</p>
        <p class="price">£11</p>
      </article>
      <p class="dish-title">Shoyu</p>
      <article class="dish-and-price">
        <p class="dish-desc">Chicken broth, half chicken thigh, soy sprouts, mushroom, spring onions</p>
        <p class="price">£11</p>
      </article>
      <p class="dish-title">Short Rib</p>
      <article class="dish-and-price">
        <p class="dish-desc">Tender short rib served on the bone on top of noodles in a rich chicken broth </p>
        <p class="price">£12</p>
      </article>
      <p class="dish-title">Kare Burosu (ve)</p>
      <article class="dish-and-price">
        <p class="dish-desc">Shichimi-coated tofu + grilled mixed mushrooms on a bed of udon noodles in a curried vegetable broth</p>
        <p class="price">£10</p>
      </article>
    </article>
    
    <article class="desserts">
      <p class="menu-section-title">Desserts</p>
      <p class="dish-title">White chocolate & matcha cheesecake (ve)</p>
      <article class="dish-and-price">
        <p class="dish-desc">With vanilla ice cream. chocolate sauce. mixed sesame seeds. fresh mint</p>
        <p class="price">£6</p>
      </article>
      <p class="dish-title">Smoked chocolate caramel cake (ve)</p>
      <article class="dish-and-price">
        <p class="dish-desc">Smoked chocolate mousse. salted caramel. crushed biscuits. chocolate fudge brownier</p>
        <p class="price">£6</p>
      </article>
      <p class="dish-title">Chocolate & orange blossom ice cream (ve)</p>
      <article class="dish-and-price">
        <p class="dish-desc">With passion fruit coulis + fresh mint </p>
        <p class="price">£6</p>
      </article>
      </article>
    </article>
  
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

export { loadMenu }