import { Home, Info, Mail } from 'lucide-react'

const posts = [
  {
    title: 'Post One',
    excerpt: 'This is a short description of the first post.',
    date: 'Sep 16, 2025'
  },
  {
    title: 'Post Two',
    excerpt: "Here's a teaser for the second post.",
    date: 'Sep 15, 2025'
  },
  {
    title: 'Post Three',
    excerpt: 'A brief look at what the third post is about.',
    date: 'Sep 14, 2025'
  }
]

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        Rabbitt Blog
      </div>

      <nav className="flex gap-6 items-right">
        <a
          href="/"
          aria-label="Home"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Home className="text-zinc-400 hover:text-zinc-200" size={22} />
        </a>
        <a
          href="#"
          aria-label="About"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Info className="text-zinc-400 hover:text-zinc-200" size={22} />
        </a>
        <a
          href="#"
          aria-label="Contact"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail className="text-zinc-400 hover:text-zinc-200" size={22} />
        </a>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-inner py-4 px-6 mt-auto z-50">
      <div className="flex justify-center items-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Rabbitt Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const PostCard = ({ title, excerpt, date, image }) => (
  <article className="bg-gray-800 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 w-full max-w-2xl mx-auto flex">
    {/* Left-side image */}
    <img
      src={image}
      alt={title}
      className="w-24 h-24 object-cover rounded-lg flex-shrink-0 mr-4"
    />

    {/* Text content */}
    <div className="flex flex-col justify-between">
      <h3 className="text-xl font-bold text-rose-400 dark:text-rose-400">
        {title}
      </h3>
      <p className="text-slate-300 dark:text-slate-300 mb-2">{excerpt}</p>
      <span className="text-sm text-amber-200 dark:text-amber-200">{date}</span>
    </div>
  </article>
)

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-400 dark:bg-neutral-400 text-gray-900 dark:text-gray-100 flex flex-col">
      <Header />

      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20 px-6 flex flex-col items-center text-center">
        <div className="pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Rabbitt Blog
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            Insights, tutorials, and strategies for professional growth and
            modern web development.
          </p>
          <a
            href="#latest-posts"
            className="bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Read Latest Posts
          </a>
        </div>
      </section>

      <main className="flex flex-col items-center flex-grow px-4 py-8 w-full">
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          {posts
            .slice() // copy array to avoid mutating original
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
            .map((post, idx) => (
              <PostCard
                key={idx}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
              />
            ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
