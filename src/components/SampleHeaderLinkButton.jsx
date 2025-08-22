// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const baseBtn = `
//   rounded
//   text-xs
//   xxs:text-sm
//   xs:text-base
//   h-8
//   xxs:h-9
//   xs:h-10
//   lg:h-[2.7rem]
//   px-3
//   xxs:px-4
//   lg:px-5
//   lg:py-5
//   min-w-[80px]
//   xxs:min-w-[90px]
//   xs:min-w-[100px]
//   lg:min-w-[144px]
//   4xl:min-w-[180px]
//   flex
//   items-center
//   justify-center
//   font-medium
//   duration-400
//   transition-all
//   ease-linear
//   whitespace-nowrap
// `;

// const variants = {
//   default:
//     "uppercase text-[15px] lg:text-[14px] 2xl:text-base leading-[1em] font-extralight text-[#2B2B2B] hover:text-primary",
//   contained: "bg-white border border-white text-white",
//   outlined: "border-2 border-white text-white bg-transparent",
//   primary:
//     "!bg-primary !h-12 lg:!h-[2.8rem] 2xl:!h-[3.5rem] !rounded-none font-semibold !tracking-wider hover:border-primary hover:!bg-transparent hover:!text-primary",
//   blackHover:
//     "!bg-transparent !h-12 lg:!h-[2.8rem] 2xl:!h-[3.5rem] font-semibold !tracking-wider !text-baseblack !border !border-baseblack px-6 py-2 !rounded-[8px] hover:!bg-black hover:!text-white",
//   whiteHover:
//     "!bg-white !h-12 lg:!h-[2.8rem] 2xl:!h-[3.5rem] font-semibold !tracking-wider !text-baseblack !border !border-baseblack px-6 py-2 !rounded-[8px] hover:!bg-black hover:!text-white",
//   transparentHover:
//     "!bg-transparent py-3 px-4 font-semibold !tracking-wider !text-white !border !border-white !rounded-[4px] hover:!bg-white hover:!text-black",
//   gray: "!bg-[#E5E5E5] !text-black text-lg font-medium uppercase !h-12 lg:!h-[2.8rem] 2xl:!h-[3.5rem]",
//   grayHover:
//     "!text-[#7d7d7d] !rounded-none !bg-transparent hover:!bg-[#7d7d7d14] border !border-[#7d7d7d8a] hover:!border-transparent text-black text-lg font-medium uppercase !h-12 lg:!h-[2.8rem] 2xl:!h-[3.5rem]",
// };

// /**
//  * Unified HeaderLinkButton
//  *
//  * @param {*} href - link target
//  * @param {*} variant - "default" | "contained" | "outlined" | "primary" | "blackHover" | "whiteHover" | "transparentHover" | "gray" | "grayHover"
//  * @param {*} asButton - renders <button> instead of <Link>
//  * @param {*} activeItem - force active state
//  */
// export const SampleHeaderLinkButton = ({
//   href = "#",
//   className = "",
//   children,
//   variant = "default",
//   asButton = false,
//   activeItem,
//   ...rest
// }) => {
//   const pathname = usePathname();
//   const isActive =
//     pathname === href || activeItem
//       ? "text-primary font-semibold"
//       : "!font-normal";

//   const classes = `${
//     variants[variant] || variants.default
//   } ${baseBtn} ${isActive} ${className}`;

//   if (asButton) {
//     return (
//       <button className={classes} {...rest}>
//         {children}
//       </button>
//     );
//   }

//   return (
//     <Link href={href} rel="noopener noreferrer" className={classes} {...rest}>
//       {children}
//     </Link>
//   );
// };

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Header link button with active state
 *
 * @param {string} href - The link URL
 * @param {string} className - Extra custom classes
 * @param {boolean} activeItem - Force active state
 * @param {React.ReactNode} children - Link text/content
 */
const SampleHeaderLinkButton = ({
  href = "#",
  className = "",
  activeItem,
  children,
  ...rest
}) => {
  const pathname = usePathname();

  const isActive =
    pathname === href || activeItem
      ? "text-primary font-semibold"
      : "!font-normal";

  return (
    <Link
      href={href}
      rel="noopener noreferrer canonical"
      className={`uppercase text-[15px] lg:text-[14px] 2xl:text-base leading-[1em] font-extralight text-[#2B2B2B] px-6  2xl:px-8 hover:text-primary transition-all duration-300 ${isActive} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default SampleHeaderLinkButton;
