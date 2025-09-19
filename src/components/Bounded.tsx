import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={`max-w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...restProps}
    >
      <div className="max-w-3xl mx-auto  ">{children}</div>
    </Comp>
  );
}

export function Button({
  className,
  prefetch,
  ...restProps
}: PrismicNextLinkProps) { 
  return (
 

    <PrismicNextLink
      className={`block w-fit py-3 px-12 rounded-m font-semibold bg-green-500 text-white hover:bg-green-600 ${className}`}
      {...restProps}
      />
     
  

  );
}
