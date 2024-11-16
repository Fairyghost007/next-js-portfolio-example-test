import Link from 'next/link';
export default function Page() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6">
      <p className="text-teal-400 mb-4 text-lg">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Birane Ndiaye.</h1>
      <h2 className="text-3xl md:text-5xl text-gray-400 mb-8">
        I build sleek, modern web experiences.
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl text-center mb-8">
        I’m a  software developer who enjoys creating  web applications.
      </p>
      <Link
        href="/project"
        className="px-6 py-3 bg-teal-400 text-gray-900 font-medium rounded shadow-md hover:bg-teal-500 transition"
      >
        Check Out My Projects
      </Link>
    </div>
  );
}


