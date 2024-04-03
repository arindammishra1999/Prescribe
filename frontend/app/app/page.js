import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
      <h1
        className={`text-4xl sm:text-5xl mb-4 text-teal-700 font-bold font-fredoka`}
      >
        Prescribe
      </h1>
      <div className="flex flex-row gap-3 w-full justify-center items-center">
        <button className="px-4 py-2 w-40 bg-teal-900 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300">
          Sign In
        </button>
        <button className="px-4 py-2 w-40 bg-teal-900 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300">
          Sign Up
        </button>
      </div>
    </main>
  );
}
