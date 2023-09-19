import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Facebook",
    href: "https://facebook.com",
    image: "/images/brands/facebook.svg",
  },
  {
    id: 2,
    name: "Twitter-X",
    href: "https://twitter.com",
    image: "/images/brands/twitter-x.svg",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://instagram.com",
    image: "/images/brands/instagram.svg",
  },
  {
    id: 4,
    name: "LinkedIn",
    href: "https://linkedin.com",
    image: "/images/brands/linkedin.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow bg-[#101032] fadeInUp flex flex-wrap items-center justify-center rounded-md  px-8 py-8   sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
