export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-6xl font-bold">TOM</p>
        <img className="flex sm:hidden" src="Navbar.png" />
        <div className="hidden sm:flex">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <img src="/Dipslay/Sun.svg" />
          <button className="rounded-lg">Downlaod CV</button>
        </div>
      </div>
    </div>
  );
};
