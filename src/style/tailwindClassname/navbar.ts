export const navbarClassname = {
  main: [
    "w-full",
    "flex",
    // "flex-1",
    "gap-8",
    "flex-col",
    "justify-between",
    "items-center",
  ].join(" "),
  menuIcons: [
    "flex",
    // "flex-col",
    "font-medium",
    "justify-center w-full z-10 fixed top-0 rounded-md backdrop-blur-[6px] bg-opacity-10",
    // "bg-[#272e3640]",
    "bg-[#272e36db]",
    "p-3",
    "gap-24",
    "shadow-md",
    // "border-b-2",
    // "border-tertiary",
  ].join(" "),
  // iconLink: ["homeLink"].join(" "),
  // iconDimension: ["w-4 h-4 p-2"].join(" "),
  groupHoverIcon: ["group cursor-pointer content-center"].join(
    " "
  ),
  iconHover: [
    // "w-[1.4rem]",
    "rounded-md",
    "p-3",
    "hover:text-secondary",
    "hover:transition-all",
    "hover:duration-300",
    "hover:scale-125",
  ].join(" "),
  socialIcons: [
    "flex",
    //"flex-col",
    "gap-16",
    "p-4",
    //"border-l-2",
    //"border-tertiary",
  ].join(" "),
  socialIcon: ["w-6", " group-hover:hidden"].join(" "),
  socialIconHover: ["w-6", "hidden", "group-hover:block"].join(
    " "
  ),
};
