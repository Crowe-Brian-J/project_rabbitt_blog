import { useState } from 'react'

const NewPostForm = () => {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just log the values to see them
    console.log({ title, excerpt, content, image })
    alert('Post submitted! (not saved yet)')
    // Later: submit to backend
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            required
          />
        </label>

        <label className="flex flex-col">
          Excerpt
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="mt-1 p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            rows={3}
            required
          />
        </label>

        <label className="flex flex-col">
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            rows={8}
            required
          />
        </label>

        <label className="flex flex-col">
          Featured Image URL (optional)
          <input
            type="text"
            value={image || ''}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Post
        </button>
      </form>
    </div>
  )
}

export default NewPostForm
