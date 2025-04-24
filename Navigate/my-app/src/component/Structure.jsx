import { Link, Outlet } from 'react-router-dom';

function Structure() {
  return (
    <>
      <header>
        <nav>
          <h1>LOGO</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <hr />
      <main>
        <Outlet />
      </main>
      <hr />

      <footer>
        <h1>This is footer</h1>
      </footer>
    </>
  );
}

export default Structure;
