import Header from './Header'
import Footer from './Footer'
import PostCard from './PostCard'
import Hero from './Hero'
import posts from '@/data/posts'

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
