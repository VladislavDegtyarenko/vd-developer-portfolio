import gsap from "gsap";
import { ReactNode, ForwardedRef, Ref, RefObject } from "react";
import { StaticImageData } from "next/image";

export type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T,
  timeout?: number
) => (...args: Parameters<T>) => void;

export interface BurgerButtonProps {
  isOpen: boolean;
  toggleMenu: ToggleMenu;
}

export type IsDarkMode = boolean;
export type ToggleMenu = () => void;
export type ToggleDarkMode = () => void;
export type PreviewProject = (url: string) => void;
export type GetScrollbarWidth = number;
export type MenuIsOpen = boolean;
export type HeaderRef = HTMLElement | null;
export type SkillCardRef = HTMLDivElement | null;
export type ExpCardRef = HTMLDivElement | null;
export type ReviewCardRef = HTMLDivElement | null;
export type SectionTitleRef = HTMLHeadingElement | null;
export type SectionSubtitleRef = HTMLHeadingElement | null;
export type SectionDescriptionRef = HTMLParagraphElement | null;
export type ProjectModalRef = HTMLIFrameElement | null;
export type ContactIconRef = HTMLDivElement | null;
export type DownloadBtnRef = HTMLAnchorElement | null;
export type TimeoutRef = ReturnType<typeof setInterval> | undefined;
export type IsMobile = boolean;
export type CloseProjectModal = () => void;

export interface HeaderProps {
  menuIsOpen: MenuIsOpen;
  toggleMenu: ToggleMenu;
  scrollbarWidth: GetScrollbarWidth;
  isDarkMode: IsDarkMode;
  toggleDarkMode: ToggleDarkMode;
  ref: RefObject<HeaderRef>;
}

export interface MenuLinksProps {
  isMobile?: IsMobile;
  toggleMenu?: ToggleMenu;
}

export interface StyledLinksProps {
  isMobile: IsMobile;
}

export interface DarkModeToggleProps {
  isDarkMode: IsDarkMode;
  toggleDarkMode: ToggleDarkMode;
}

export interface NextjsImageAssetProps {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
}

export interface Icon extends NextjsImageAssetProps {
  alt: string;
}

// DATA
export interface Skill {
  icon: NextjsImageAssetProps;
  title: string;
  description?: string;
}

export interface Project {
  img: StaticImageData;
  title: string;
  description?: string;
  previewLink?: string;
  codeLink?: string;
}

export interface Experience {
  timerange: string;
  position: string;
  company: string;
  chips: string[];
  description: string;
  icons?: Icon[];
}

export interface ContactBtn {
  href: string;
  ariaLabel?: string;
  icon: string;
}

// UI

export interface SkillCardProps extends Skill {
  alt?: string;
  animationOptions?: gsap.TweenVars;
}

export interface ExperienceCardProps extends Experience {
  animationOptions?: gsap.TweenVars;
}

export interface SectionTitleProps {
  children: string;
  id?: string;
}

export interface SectionSubtitleProps {
  children: string;
  className?: string;
}

export interface SectionDescriptionProps {
  className?: string;
  children: string | ReactNode;
  animationOptions?: gsap.TweenVars;
}

export interface ProjectModalProps {
  projectSrc: string;
  closeProjectModal: CloseProjectModal;
}

export interface ProjectSlideProps extends Project {
  previewProject: PreviewProject;
}

export interface StyledMenuProps {
  headerHeight: number;
}

export interface MobileMenuProps {
  scrollbarWidth: GetScrollbarWidth;
  toggleMenu: ToggleMenu;
  headerRef: RefObject<HeaderRef>;
}

export interface StyledThemeProviderProps {
  children: ReactNode;
  isDarkMode: IsDarkMode;
}

// Functions
export type ThrottleCallback = (...args: any[]) => void;