import "./topMenu.css";

export default function TopMenu() {
  return (
    <div class="topnav" id="studyBuddyTopNav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" class="icon" onClick={handleNavBar}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}

function handleNavBar() {
  var x = document.getElementById("studyBuddyTopNav");
  if (x == null) {
    return;
  } else {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
