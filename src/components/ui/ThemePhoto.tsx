import Image from "next/image";

type ThemePhotoProps = {
  daySrc: string;
  nightSrc: string;
  dayAlt: string;
  nightAlt: string;
  className: string;
  sizes: string;
  preload?: boolean;
};

export function ThemePhoto({
  daySrc,
  nightSrc,
  dayAlt,
  nightAlt,
  className,
  sizes,
  preload = false,
}: ThemePhotoProps) {
  return (
    <>
      <Image
        className={`${className} theme-photo-day`}
        src={daySrc}
        alt={dayAlt}
        fill
        sizes={sizes}
        preload={preload}
      />
      <Image
        className={`${className} theme-photo-night`}
        src={nightSrc}
        alt={nightAlt}
        fill
        sizes={sizes}
      />
    </>
  );
}
