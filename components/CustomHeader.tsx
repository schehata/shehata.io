import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';

export default function CustomHeader () {
  const nav = [
    {title: 'المدونة', url: '/blog'},
    {title:'المشروعات', url: encodeURIComponent('المشروعات')},
    {title: 'الخدمات', url: encodeURIComponent('الخدمات')}
  ]

  return (
    <header className="container mx-auto px-3 md:px-6 lg:px-12 align-center">
    <div className="">
      <div className="flex w-full pt-3 pb-3 items-center">
        <Link href="/" className="brand  align-middle">
          <h2 className="text-black">إسلام شحاته</h2>
        </Link>

        <nav className="flex list-none text-xl list-inside align-middle gap-4 flex-1 w-full justify-center items-center mx-auto">
          {nav.map((item) => 
            <Link key={item.url} href={item.url} className="hidden md:block text-gray-600 hover:text-[#481515] shadow-red"
            >{ item.title }</Link>
          )}
        </nav>

        <div className="justify-self-end items-center align-self-middle align-middle">
          <a className="bg-black rounded px-2.5 text-white align-middle" href="/feed.xml" target="_blank">
            <FontAwesomeIcon icon={faRss} className="text-white text-xs" size="xs" />
          </a>
        </div>
      </div>
    </div>
  </header>
  );
}
