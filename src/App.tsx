import airCarLogo from "./images/air-car-logo.webp";
import diamondLogo from "./images/diamond-logo.webp";
import makroHardLogo from "./images/makro-hard-logo.webp";
import robinwoodLogo from "./images/robinwood-logo.webp";
import swapDoLogo from "./images/swapdo-logo.webp";
import wanNainLogo from "./images/wan-nain-logo.webp";

type LogoProps = {
  src: string;
  alt: string;
};

const logos: LogoProps[] = [
  { src: wanNainLogo, alt: "Wan Nain" },
  { src: robinwoodLogo, alt: "Robinwood" },
  { src: swapDoLogo, alt: "SwapDo" },
  { src: diamondLogo, alt: "Diamond" },
  { src: airCarLogo, alt: "Air Car" },
  { src: makroHardLogo, alt: "Makro Hard" }
];

type LogoStripeProps = {
  "aria-hidden"?: boolean;
};

function LogoStripe({ "aria-hidden": ariaHidden = false }: LogoStripeProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className='animate-marquee group-hover:animate-pause flex shrink-0 flex-row gap-8 first:pl-12'
    >
      {logos.map(logo => (
        <div
          key={logo.alt}
          className='p-6'
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className='h-12 w-auto'
          />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div
      id='page-body'
      className='mx-auto flex min-h-dvh w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'
    >
      <div className='flex w-full flex-1 flex-col items-center justify-center rounded-md bg-white'>
        <main className='flex w-full flex-col items-center gap-8'>
          <h1
            id='marquee-heading'
            className='text-base text-neutral-600'
          >
            Used by teams that you love
          </h1>
          <div className='group flex w-full overflow-hidden select-none'>
            <LogoStripe />
            <LogoStripe aria-hidden />
            <LogoStripe aria-hidden />
          </div>
        </main>
      </div>
    </div>
  );
}

export { App };
