const Header = () => {
    return (
        <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-white font-bold text-2xl">Housing Prices Tracker</h1>
          <ul className="flex">
            <li>
              <a className="text-white hover:text-gray-200 px-3 py-2" href="#">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200 px-3 py-2" href="#">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200 px-3 py-2" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header