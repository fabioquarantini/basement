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
      <li>
        <ActiveLink activeClassName="active" href="/products">
          <a className="nav-link">Products</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/productsgql">
          <a className="nav-link">Products GQL</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/animations">
          <a className="nav-link">Animations</a>
        </ActiveLink>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {

      }
      nav > ul {
        padding: 0px 16px;
      }
      li {
        display: inline-block;
        padding: 0px 8px;
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
