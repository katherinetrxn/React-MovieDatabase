import React from 'react'

function Nav() {
  return (
    <div>
      <div class="navigation">
        <figure class="logo">
          <i class="fa-solid fa-photo-film"></i>
          <h1 class="logo__name" onclick="resetFilter()">cinema</h1>
        </figure>
        <ul class="nav__links">
          <li class="nav__link">
            <a class="nav__link--anchor link__hover-effect" href="">Home</a>
          </li>
          <li class="nav__link">
            <a class="nav__link--anchor link__hover-effect" href="">Latest</a>
          </li>
          <li class="nav__link">
            <a class="btn nav__link--anchor" href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
