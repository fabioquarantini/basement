import Nav from '../components/Nav'
import Logo from '../components/Logo'

const Header = () => (
  <header className="header">

    <Logo />
    <Nav />
    <Logo />

    <style jsx>{`
      .header {
        text-align: center;
        background: white;
        padding: 20px;
        box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        display: flex;
        margin:0;
        justify-content: space-between;
      }
    `}</style>

  </header>
)

export default Header
