const NavMenu = () => {
  const OpenMenu = () => {
    document.querySelector("nav").classList.toggle("fade-in-nav");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <div id="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavMenu;
