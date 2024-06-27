export const navbarClassname = {
  main: [
    "w-full",
    "flex",
    "flex-1",
    "justify-between",
    "items-center",
  ].join(" "),
  menuIcons: [
    "flex",
    "flex-col",
    "font-medium",
    "p-10",
    "gap-16",
    "border-r-2",
    "border-tertiary",
  ].join(" "),
  iconLink: [
    "homeLink",
    "hover:animate-bounce",
    "hover:text-secondary",
    "hover:border-b-[3px]",
    "border-secondary",
  ].join(" "),
  iconHover: ["w-6", " hover:text-secondary"].join(" "),
  socialIcons: [
    "flex",
    "flex-col",
    "gap-16",
    "p-10",
    "border-l-2",
    "border-tertiary",
  ].join(" "),
  socialIcon: ["w-6", " group-hover:hidden"].join(" "),
  socialIconHover: ["w-6", "hidden", "group-hover:block"].join(
    " "
  ),
};
