import Nav from '../components/Nav'
import Logo from '../components/Logo'

const Header = () => (
  <header className="text-center bg-white p-6 shadow-xl m-0 flex justify-between">
    <Logo />
    <Nav />
  </header>
)

export default Header
