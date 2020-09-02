import { useLocalStorage } from 'react-use'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/main.css'

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const toggleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark')

  return (
    <>
      <Navbar transparent />
      {children}
      <Footer />
    </>
  )
}

export default Layout
