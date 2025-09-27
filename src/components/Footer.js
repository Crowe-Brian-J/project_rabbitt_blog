const Footer = () => (
  <footer className="w-full bg-white dark:bg-gray-800 shadow-inner py-4 px-6 mt-auto z-50">
    <div className="flex justify-center items-center">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Rabbitt Blog. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
