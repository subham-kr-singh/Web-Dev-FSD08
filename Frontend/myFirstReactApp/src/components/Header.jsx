function Header() {
  return (
    <>
      <div
        id="header"
        className="bg-light text-black border border-1 bottom-2 d-flex justify-content-between align-items-center">
        <ul className="d-flex justify-content-around align-items-center gap-3  list-unstyled">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <div className="d-flex align-items-center justify-content-center gap-3">
          <button className="btn btn-success">Login</button>
          <button className="btn btn-outline-success">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Header;
