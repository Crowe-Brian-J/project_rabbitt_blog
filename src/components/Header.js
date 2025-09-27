import { Home, Info, Mail, Plus } from 'lucide-react'

const Header = ({ onNewPostClick }) => (
  <header className="w-full bg-white dark:bg-gray-800 shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50">
    <div className="text-2xl font-bold text-gray-900 dark:text-white">
      Rabbitt Blog
    </div>
    <nav className="flex gap-6 items-center">
      <button
        onClick={onNewPostClick}
        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        <Plus size={16} />
        New Post
      </button>
      <a href="/" aria-label="Home">
        <Home size={22} className="text-zinc-400 hover:text-zinc-200" />
      </a>
      <a href="#about" aria-label="About">
        <Info size={22} className="text-zinc-400 hover:text-zinc-200" />
      </a>
      <a href="#contact" aria-label="Contact">
        <Mail size={22} className="text-zinc-400 hover:text-zinc-200" />
      </a>
    </nav>
  </header>
)

export default Header
