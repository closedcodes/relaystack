import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          RelayStack
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-300">News</Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-gray-300">Community</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-300">Events</Link>
            </li>
            <li>
              <Link href="/docs" className="hover:text-gray-300">Docs</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">About</Link>
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
