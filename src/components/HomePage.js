import Header from './Header'
import Footer from './Footer'
import PostCard from './PostCard'
import Hero from './Hero'

const posts = [
  {
    title: 'Post One',
    excerpt: 'This is a short description of the first post.',
    date: 'Sep 16, 2025',
    image: '/example1.jpg'
  },
  {
    title: 'Post Two',
    excerpt: "Here's a teaser for the second post.",
    date: 'Sep 15, 2025',
    image: '/example2.jpg'
  },
  {
    title: 'Post Three',
    excerpt: 'A brief look at what the third post is about.',
    date: 'Sep 14, 2025',
    image: '/example3.jpg'
  }
]

const HomePage = () => (
  <div className="min-h-screen bg-neutral-400 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
    <Header />
    <Hero />
    <main
      className="flex flex-col items-center flex-grow px-4 py-8 w-full"
      id="latest-posts"
    >
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {posts
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
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

export default HomePage
