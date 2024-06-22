export interface NavbarItems {
  navbarItems: NavbarObject[];
}

export interface NavbarObject {
  icon:
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
          title?: string;
          titleId?: string;
        } & React.RefAttributes<SVGSVGElement>
      >
    | string;
  link: string;
  title: string;
}
