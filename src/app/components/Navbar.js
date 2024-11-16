import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold tracking-wider">
        <Link href="/home">B</Link>
      </div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link href="/home" className="hover:text-teal-400 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-teal-400 transition">About</Link>
        </li>
        <li>
          <Link href="/project" className="hover:text-teal-400 transition">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-teal-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
