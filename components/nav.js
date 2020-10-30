import ActiveLink from './ActiveLink'

const Nav = () => (
  <nav>

    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
        background: white;
        padding: 20px;
        box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }
      ul {
        display: flex;
        margin:0;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-transform: uppercase;
        font-weight:bold;
        text-decoration: none;
        font-size: 13px;
      }

      .active {
        color: blue;
      }
    `}</style>

  </nav>
)

export default Nav
