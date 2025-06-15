const Header = () => (
  <header className="flex flex-col items-center">
    <main className="flex flex-row items-center justify-between px-[0rem] py-[2rem] ">
      <h5 >My Portfolio.</h5>
      <nav className="flex flex-row justify-center space-x-10 items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
      </nav>
      <button>get in touch</button>
    </main>
  </header>
);

export default Header;
