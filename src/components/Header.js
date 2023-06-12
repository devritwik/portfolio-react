
function Header(){
    return (
        <header>
      <div class="nav-bar">
        <div class="logo-holder">
          <span class="logo-text">Portfolio</span>
        </div>

        <div class="nav-container">
          <nav>
            <ul>
              <li><a class="active" href="#">Home</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="experience.html">Experience</a></li>
              <li><a href="about.html">About</a></li>
            </ul>
          </nav>
        </div>
        <div class="theme-container">
          <button class="theme-button" onclick="toggleDarkMode()">
            <img src="./icons/theme.svg" />
          </button>
          <div class="align-horizontal">
            <img src="./icons/india.svg" class="small-icon" />
            <h3 class="ml2">India</h3>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;