import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">MindFlow</span>
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Features
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/waitlist" 
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
