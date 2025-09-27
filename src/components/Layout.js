import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-neutral-400 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <Header />
    {children} {/* page-specific content */}
    <Footer />
  </div>
)

export default Layout
