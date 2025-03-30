import headerNavLinks from '@/data/headerNavLinks';
import logo from '@/data/left-logo.png';
import Logo from '@/data/logo.svg';
import siteMetadata from '@/data/siteMetadata';
import Link from './Link';
import MobileNav from './MobileNav';
import SearchButton from './SearchButton';
import ThemeSwitch from './ThemeSwitch';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header
      className={cn(
        'flex items-center w-full justify-between py-10 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 bg-transparent',
        siteMetadata.stickyNav && 'sticky top-0 z-50'
      )}
    >
      <Link href='/' aria-label={siteMetadata.headerTitle}>
        <div className='flex items-center justify-between'>
          <div className='mr-3'>
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className='hidden h-6 text-2xl font-semibold sm:block'>
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className='flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6'>
        <div className='no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96'>
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100'
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
