import { Icon } from "components/common";
import {
  AerolabLogo,
  AeropayFirst,
  AeropaySecond,
  AeropayThird,
  AeropayFourth,
  MenuActive,
  Menu,
  ArrowDown,
  GithubActive,
  Github,
  MenuDropdown,
} from "./icons";

export const AerolabLogoIcon = ({ ...rest }) => (
  <Icon src={AerolabLogo} alt="aerolab-logo-1.svg" {...rest} />
);

export const AeropayFirstIcon = ({ ...rest }) => (
  <Icon src={AeropayFirst} alt="aeropay-1.svg" {...rest} />
);

export const AeropaySecondIcon = ({ ...rest }) => (
  <Icon src={AeropaySecond} alt="aeropay-2.svg" {...rest} />
);

export const AeropayThirdIcon = ({ ...rest }) => (
  <Icon src={AeropayThird} alt="aeropay-3.svg" {...rest} />
);

export const AeropayFourthIcon = ({ ...rest }) => (
  <Icon src={AeropayFourth} alt="aeropay-4.svg" {...rest} />
);

export const MenuActiveIcon = ({ ...rest }) => (
  <Icon src={MenuActive} alt="chevron-active.svg" {...rest} />
);

export const MenuIcon = ({ ...rest }) => (
  <Icon src={Menu} alt="chevron-default.svg" {...rest} />
);

export const ArrowDownIcon = ({ ...rest }) => (
  <Icon src={ArrowDown} alt="arrow-down.svg" {...rest} />
);

export const GithubActiveIcon = ({ ...rest }) => (
  <Icon src={GithubActive} alt="github-active.svg" {...rest} />
);

export const GithubIcon = ({ ...rest }) => (
  <Icon src={Github} alt="github-default.svg" {...rest} />
);

export const MenuDropdownIcon = ({ ...rest }) => (
  <Icon src={MenuDropdown} alt="menu-dropdown.svg" {...rest} />
);
