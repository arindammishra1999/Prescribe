import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
      <h1 className="text-4xl sm:text-5xl mb-4 text-teal-700 font-bold font-fredoka">
        Prescribe
      </h1>
      <div className="flex flex-row gap-3 w-full justify-center items-center md:flex-col">
        <Link href="/signin" passHref>
        <button
          className="px-4 py-2 bg-teal-900 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 md:w-64"
        >
          Sign In
        </button>
        </Link>
        <Link href="/signup" passHref>
        <button
          className="px-4 py-2 bg-teal-900 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 md:w-64"
        >
          Sign Up
        </button>
        </Link>
      </div>
    </main>
  );
}
