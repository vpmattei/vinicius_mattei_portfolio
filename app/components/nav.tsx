import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/page/games': {
    name: 'Games',
  },
  '/page/art': {
    name: 'Art'
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 p-5 tracking-tight text-zinc-50 dark:text-zinc-950 bg-lime-700 dark:bg-lime-200">
      <div className="lg:sticky lg:top-20 ">
        <h1 className="text-8xl font-medium tracking-tight mt-6 mb-2">Vinícius Mattei</h1>
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-3xl transition-all hover:text-pink-300 dark:hover:text-pink-500 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
