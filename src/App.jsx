import Header from './Components/layout/header'
import Footer from './Components/layout/footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
