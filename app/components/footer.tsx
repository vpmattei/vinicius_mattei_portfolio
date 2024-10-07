import ArrowIcon from './ArrowIcon';

export default function Footer() {
  return (
    <footer className="mb-16 ml-8 mr-8">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vpmattei/vinicius_mattei_portfolio"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-300">
        Website Developed by Vinícius Mattei - © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
