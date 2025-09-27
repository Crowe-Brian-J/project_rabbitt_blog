const Hero = () => (
  <section className="w-full bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 text-gray-800 py-20 px-6 flex flex-col items-center text-center">
    <div className="pt-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Rabbitt Blog
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl">
        Insights, tutorials, and strategies for professional growth and modern
        web development.
      </p>
      <a
        href="#latest-posts"
        className="bg-rose-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Read Latest Posts
      </a>
    </div>
  </section>
)

export default Hero
