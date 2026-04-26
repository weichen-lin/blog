import Logo from "@/data/logo.svg";
import siteMetadata from "@/data/siteMetadata";
import Link from "./Link";
import SearchButton from "./SearchButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-white/20 dark:border-white/10 shadow-sm">
      <div className="flex items-center w-full justify-between py-3 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <SearchButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
