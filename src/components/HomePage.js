import Layout from './Layout'
import Hero from './Hero'
import PostCard from './PostCard'
import posts from '../data/posts'

const HomePage = () => (
  <Layout>
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
  </Layout>
)

export default HomePage
