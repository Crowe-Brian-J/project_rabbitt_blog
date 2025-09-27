const PostList = ({ posts }) => (
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
)

export default PostList
