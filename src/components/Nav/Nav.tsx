import { MoonIcon } from "@heroicons/react/24/solid";

type NavProps = {
  theme: string;
  isdark: boolean;
  reverse: string;
  setDark: (value: boolean) => void;
};
function Nav({ theme, reverse, isdark, setDark }: NavProps) {
  //scroll to bookmarked section
  function smoothScroll(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const targetElementId = (event.target as HTMLAnchorElement).getAttribute(
      "href"
    );

    if (targetElementId) {
      const targetId = targetElementId.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <div className=" sticky top-0  z-20" style={{ backgroundColor: theme }}>
      <nav
        className=" flex flex-row justify-evenly items-center text-base font-semibold p-2 font-custom"
        style={{ color: reverse }}
      >
        <h1>rain</h1>
        <ul className=" space-x-6 text-sm">
          <a
            href="#about_me"
            onClick={(event) => smoothScroll(event)}
            target=""
            className=" ease-linear"
          >
            About Me
          </a>
          <a href="" target="">
            TechStacks
          </a>
          <a href="" target="">
            Projects
          </a>
        </ul>
        <button onClick={() => setDark(!isdark)}>
          <MoonIcon className="h-4 w-4" style={{ color: reverse }} />
        </button>
      </nav>
    </div>
  );
}

export default Nav;
