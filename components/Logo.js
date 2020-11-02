import ActiveLink from './ActiveLink'

const Logo = () => (

  <span className="logo">

    <ActiveLink activeClassName="active" href="/">
      <a className="nav-link">Logo</a>
    </ActiveLink>

    <style jsx>{`
      .logo {
        border: 1px solid blue;
      }
    `}</style>

  </span>
)

export default Logo
