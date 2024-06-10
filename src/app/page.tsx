import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:px-36 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image height={60} width={60} src="/snake-1.png" alt="logo" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone
              </h1>
              <p className="mt-8 text-lg lg:pr-10 mx-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span>CaseBeauty
                allows you to protect your memories not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High Quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern Iphone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    height={36}
                    width={36}
                    className="iniline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <Image
                    height={36}
                    width={36}
                    className="iniline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user"
                  />
                  <Image
                    height={36}
                    width={36}
                    className="iniline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user"
                  />
                  <Image
                    height={36}
                    width={36}
                    className="iniline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user"
                  />
                  <Image
                    height={36}
                    width={36}
                    className="iniline-block object-cover rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p className="sm:text-sm">
                    <span className="font-semibold">1,250 </span>happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex  justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                height={100}
                width={100}
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt="your-image"
                src="/your-image.png"
              />
              <Image
                height={80}
                width={80}
                className="absolute -left-6 -bottom-6 select-none"
                alt="line"
                src="/line.png"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
