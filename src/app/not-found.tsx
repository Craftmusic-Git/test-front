import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center py-20 px-4 min-h-[calc(100vh-280px)] container mx-auto font-sans">
      <h1 className="block text-9xl font-bold text-blue-800">404</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
      <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <Link className="w-full sm:w-auto py-3 px-4 transition-all inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/">
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to home
        </Link>
      </div>
      </div>
  )
}

export default NotFound;