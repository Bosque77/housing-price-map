import Link from "next/link";

const SideNav = () => {
  return (
    <nav className=" h-full w-64 bg-gray-100">
      <ul className="list-none p-0 m-0 mt-12">
        <li>
          <Link className="block text-black py-3 px-6 hover:bg-blue-600" href="/admin/houses">Houses</Link>
        </li>
        <li>
          <Link className="block text-black py-3 px-6 hover:bg-blue-600" href="admin/regions">
            Regions
          </Link>
        </li>
        <li>
          <Link className="block text-black py-3 px-6 hover:bg-blue-600" href="admin/cities">Cities</Link>
        </li>
        <li>
          <Link className="block text-black py-3 px-6 hover:bg-blue-600" href="admin/zillow-estimates">
            Zillow Estimates
          </Link>
        </li>
        <li>
          <Link className="block text-black py-3 px-6 hover:bg-blue-600" href="admi/region-statistics">
            Region Statistics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
