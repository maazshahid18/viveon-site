import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold text-blue-600">
            Viveon
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}