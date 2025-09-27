const PostCard = ({ title, excerpt, date, image }) => (
  <article className="bg-neutral-800 dark:bg-neutral-400 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 w-full max-w-2xl mx-auto flex">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-lg flex-shrink-0 mr-4"
      />
    )}
    <div className="flex flex-col justify-between">
      <h3 className="text-xl font-bold text-rose-950 dark:text-rose-600">
        {title}
      </h3>
      <p className="text-slate-300 dark:text-slate-800 mb-2">{excerpt}</p>
      <span className="text-sm text-amber-200 dark:text-amber-200">{date}</span>
    </div>
  </article>
)

export default PostCard
