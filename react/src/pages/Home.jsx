import React from "react";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image6 from "../assets/image6.png";
import image0 from "../assets/image0.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <section className="relative mx-auto max-w-screen-2xl ">
        <div className="flex flex-col justify-center h-screen px-3 pt-16 lg:pt-28">
          <div className="relative w-full md:h-[540px] h-[181px]">
            <img alt="" src={image1} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl tracking-wide text-white font-baskervville md:text-9xl">
                LOREM IPSUM
              </h1>
            </div>
          </div>
          <div className="pt-1 md:grid-cols-12 md:grid gap-x-4">
            <div className="hidden leading-7 md:block md:col-end-8 md:col-start-1">
              <p className="font-normal leading-7 font-baskervville">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eget vehicula ipsum. Donec tempus venenatis ante, vel
                vestibulum dui suscipit vitae. Praesent imperdiet convallis
                felis vitae malesuada. Phasellus a facilisis lectus. Sed ut
                ipsum ut justo dapibus commodo. Curabitur quis magna placerat
                risus tristique venenatis. Pellentesque nec orci scelerisque,
                pretium nisl non, porttitor diam. Vivamus maximus nisi et
                sollicitudin porta. <br></br> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                Donec tempus venenatis ante, vel vestibulum dui suscipit vitae.
                Praesent imperdiet convallis felis vitae malesuada. Phasellus a
                facilisis lectus. Sed ut ipsum ut justo dapibus commodo.
                Curabitur quis magna placerat risus tristique venenatis.
                Pellentesque nec orci scelerisque, pretium nisl non, porttitor
                diam. Vivamus maximus nisi et sollicitudin porta.
              </p>
            </div>
            <div className=" md:col-end-13 md:col-start-9">
              <p className="font-normal leading-7 font-baskervville">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eget vehicula ipsum. Donec tempus venenatis ante, vel
                vestibulum dui suscipit vitae. Praesent imperdiet convallis
                felis vitae malesuada. Phasellus a facilisis lectus. Sed ut
                ipsum ut justo dapibus commodo. Curabitur quis magna placerat
                risus tristique venenatis. Pellentesque nec orci scelerisque,
                pretium nisl non, porttitor diam. Vivamus maximus nisi et
                sollicitudin porta.{" "}
                <span className="block lg:hidden">
                  Curabitur quis magna placerat risus tristique venenatis.
                  Pellentesque nec orci scelerisque, pretium nisl non, porttitor
                  diam. Vivamus maximus nisi et sollicitudin porta.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="relative w-full h-full px-3 py-14 md:py-24 ">
          <div className="relative font-light text-[7.625vw] lg:text-[6.9vw] h-[2em] xl:pt-0 block ">
            <div className="block text-right lg:text-left leading-[0.84em] ">
              <div className="text-right lg:text-left">
                <span className=" pr-[0.36em] lg:pr-0 font-[HVMuseRegular]">
                  LEADING
                </span>
                <span className="lg:w-[0.20em] lg:inline-block"></span>
                <span className=" font-[HVMuseRegular] pr-[0.05em] lg:pr-0 lg:ml-0 ml-[-.05em]">
                  NEWSPAPER,
                </span>
              </div>
              <div className="relative text-left lg:text-right">
                <span className="absolute lg:relative lg:top-0 lg:left-0 top-[0.64em]  inline-block font-[HVMuseRegular] ">
                  MAGAZINE INDONESIA
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>
          <div className="pt-5 md:grid md:grid-cols-12 gap-x-4">
            <div className="col-end-5 md:col-start-1 xl:col-start-2">
              <div className="">
                <div className="lg:w-[393px] relative">
                  <img
                    alt=""
                    className="relative w-full h-auto"
                    src="https://images.unsplash.com/photo-1508426494465-6ff39a96b4c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  ></img>
                </div>
                <div className="lg:w-[20rem]">
                  <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                    LOREM IPSUM
                  </h1>
                  <p className="text-sm font-kaisei">
                    Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                    Donec tempus
                  </p>
                  <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                    BY MONALISA MORALLES
                  </h2>
                </div>
              </div>
              <div className="py-4">
                <div className="lg:w-[393px] relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1718040506078-5a7b90746511?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="relative w-full h-auto"
                  ></img>
                </div>
                <div className="lg:w-[20rem]">
                  <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                    LOREM IPSUM
                  </h1>
                  <p className="text-sm font-kaisei">
                    Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                    Donec tempus
                  </p>
                  <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                    BY MONALISA MORALLES
                  </h2>
                </div>
              </div>
              <div className="py-4">
                <div className="lg:w-[393px] relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="relative w-full h-auto"
                  ></img>
                </div>
                <div className="lg:w-[20rem]">
                  <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                    LOREM IPSUM
                  </h1>
                  <p className="text-sm font-kaisei">
                    Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                    Donec tempus
                  </p>
                  <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                    BY MONALISA MORALLES
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-start-6 col-end-12">
              <div className="pb-9">
                <p className="text-lg text-justify font-baskervville md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                  Sed ut ipsum ut justo dapibus commodo. Curabitur quis magna
                  placerat risus tristique venenatis. Pellentesque nec orci
                  scelerisque, pretium nisl non, porttitor diam. Vivamus maximus
                  nisi et sollicitudin porta.
                </p>
                <div className="relative ">
                  <img
                    alt=""
                    src={image1}
                    className="relative w-full h-full"
                  ></img>
                </div>
              </div>
              <div>
                <p className="text-lg text-justify font-baskervville md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                  Sed ut ipsum ut justo dapibus commodo. Curabitur quis magna
                  placerat risus tristique venenatis. Pellentesque nec orci
                  scelerisque, pretium nisl non, porttitor diam. Vivamus maximus
                  nisi et sollicitudin porta.
                </p>
                <div className="relative ">
                  <img
                    alt=""
                    src={image3}
                    className="relative w-full h-full"
                  ></img>
                </div>
                <p className="text-lg text-justify font-baskervville md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                  Sed ut ipsum ut justo dapibus commodo. Curabitur quis magna
                  placerat risus tristique venenatis. Pellentesque nec orci
                  scelerisque, pretium nisl non, porttitor diam. Vivamus maximus
                  nisi et sollicitudin porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="h-full">
          <div className="max-w-7xl mx-auto  mb-5  h-[1px] bg-[#401D01] "></div>
          <div className="flex justify-center font-[HVMuseRegular] text-3xl ">
            TOP TREND
          </div>
          <div className="max-w-7xl mx-auto  mt-5  h-[1px] bg-[#401D01] "></div>
          <div className="px-3 lg:grid py-9 md:grid-cols-12">
            <div className="grid col-start-2 col-end-5">
              <div className="flex flex-col">
                <h1 className="text-2xl font-baskervville ">
                  <span className="italic">Consectetur </span> elit. Curabitur
                  eget{" "}
                  <span className="block ">
                    {" "}
                    vehicula <span className="font-semibold"> ipsum.</span>
                  </span>
                </h1>
                <p className="mt-5 font-baskervville">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                </p>
                <div className="flex items-center mt-5 ">
                  <p className="w-full text-xs italic">
                    From : Maira /6/21/2024
                  </p>
                  <div className="w-full lg:mt-0 h-[1px] bg-[#401D01] "></div>
                </div>
              </div>
              <div className="flex flex-col py-8">
                <h1 className="text-2xl font-baskervville ">
                  <span className="italic">Consectetur </span> elit. Curabitur
                  eget{" "}
                  <span className="block ">
                    {" "}
                    vehicula <span className="font-semibold"> ipsum.</span>
                  </span>
                </h1>
                <img src={image4} className="mt-5" alt="" />
                <p className="mt-5 font-baskervville">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                </p>
                <div className="flex items-center mt-5 ">
                  <p className="w-full text-xs italic">
                    From : Maira /6/21/2024
                  </p>
                  <div className="w-full lg:mt-0 h-[1px] bg-[#401D01] "></div>
                </div>
              </div>
            </div>
            <div className="grid col-start-6 col-end-9">
              <div className="flex flex-col ">
                <h1 className="text-2xl font-baskervville ">
                  <span className="italic">Consectetur </span> elit. Curabitur
                  eget{" "}
                  <span className="block ">
                    {" "}
                    vehicula <span className="font-semibold"> ipsum.</span>
                  </span>
                </h1>
                <img src={image4} className="mt-5" alt="" />
                <p className="mt-5 font-baskervville">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                </p>
                <div className="flex items-center mt-5 ">
                  <p className="w-full text-xs italic">
                    From : Maira /6/21/2024
                  </p>
                  <div className="w-full lg:mt-0 h-[1px] bg-[#401D01] "></div>
                </div>
              </div>
              <div className="flex flex-col py-8">
                <h1 className="text-2xl font-baskervville ">
                  <span className="italic">Consectetur </span> elit. Curabitur
                  eget{" "}
                  <span className="block ">
                    {" "}
                    vehicula <span className="font-semibold"> ipsum.</span>
                  </span>
                </h1>
                <p className="mt-5 font-baskervville">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget vehicSula ipsum. Donec tempus venenatis ante,
                  vel vestibulum dui suscipit vitae. Praesent imperdiet
                  convallis felis vitae malesuada. Phasellus a facilisis lectus.
                </p>
                <div className="flex items-center mt-5 ">
                  <p className="w-full text-xs italic">
                    From : Maira /6/21/2024
                  </p>
                  <div className="w-full lg:mt-0 h-[1px] bg-[#401D01] "></div>
                </div>
              </div>
            </div>
            <div className="grid col-start-10 col-end-12">
              <div className="flex items-center w-full ">
                <div className="hidden md:block">
                  <img src={image6} alt="" />
                </div>
                <div className="block md:hidden">
                  <img src={image0} alt6="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:max-w-6xl mx-auto pb-9 ">
        <div className="max-w-7xl mx-auto  mb-5  h-[1px] bg-[#401D01] "></div>
        <h2 className="text-3xl text-center font-baskervville">TOP FASHION </h2>
        <div className="max-w-7xl mx-auto  mt-5  h-[1px] bg-[#401D01] "></div>
        <div className="gap-4 px-4 py-8 mx-auto md:grid md:grid-cols-12 ">
          <div className="col-start-1 col-end-4">
            <div className="">
              <div className="relative ">
                <img
                  src="https://assets.vogue.com/photos/660f06a1bdcb88bbe9068164/1:1/w_640,c_limit/emily-wang-a5917t2ea8I-unsplash.jpg"
                  className="w-full h-full"
                  alt=""
                ></img>
              </div>
              <div className="p-2">
                <p className="text-xs lg:text-base font-kaisei">
                  Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                  Donec tempus
                </p>
                <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville hover:underline underline-offset-1">
                  BY MONALISA MORALLES
                </h2>
              </div>
            </div>
            <div className=" pt-9">
              <img
                src="https://images.unsplash.com/photo-1703585222667-89afb3f98fd3?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
              <div className="p-2">
                <p className="text-xs lg:text-base font-kaisei">
                  Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                  Donec tempus
                </p>
                <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville hover:underline underline-offset-1">
                  BY MONALISA MORALLES
                </h2>
              </div>
            </div>
          </div>

          <div className="col-start-4 col-end-10">
            <div className=" lg:pt-0 pt-9">
              <img
                src="https://images.unsplash.com/photo-1648634362534-238cb091708b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
              <div className="text-center p-2">
                <p className="text-xs lg:text-base font-kaisei">
                  Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                  Donec tempus
                </p>
                <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville hover:underline underline-offset-1">
                  BY MONALISA MORALLES
                </h2>
              </div>
            </div>
          </div>

          <div className="md:col-start-10 md:col-end-13">
            <div className=" lg:pt-0 pt-9">
              <img
                src="https://assets.vogue.com/photos/660f06a1bdcb88bbe9068164/1:1/w_640,c_limit/emily-wang-a5917t2ea8I-unsplash.jpg"
                alt="1"
              ></img>
              <div className="p-2">
                <p className="text-xs lg:text-base font-kaisei">
                  Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                  Donec tempus
                </p>
                <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville hover:underline underline-offset-1">
                  BY MONALISA MORALLES
                </h2>
              </div>
            </div>
            <div className=" pt-9">
              <img
                src="https://images.unsplash.com/photo-1715112845275-9bf2f802d12c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="1"
              ></img>
              <div className="p-2">
                <p className="text-xs lg:text-base font-kaisei">
                  Consectetur adipiscing elit. Curabitur eget vehicula ipsum.
                  Donec tempus
                </p>
                <h2 className="text-sm tracking-widest md:mt-5 md:text-base font-baskervville hover:underline underline-offset-1 text ">
                  BY MONALISA MORALLES
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-screen-xl px-3 pb-3 mx-auto ">
        <div className="flex items-end justify-between w-full py-3">
          <h1 className="text-2xl font-medium tracking-wide font-kaisei lg:text-5xl">
            <div>MORALES</div>
            <div>ILUSTRATION</div>
            <div className="text-right">SPONSORS</div>
          </h1>
          <div className="flex text-xs gap-x-1">
            <div className="text-black hover:text-gray-400 ">
              <h1>JOIN</h1>
            </div>
            <span>/</span>
            <div className="text-black hover:text-gray-400 ">
              <h1>ORDER</h1>
            </div>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current?.stop()}
          onMouseLeave={() => plugin.current?.play()}
        >
          <CarouselContent>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="w-full h-full p-2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1452022449339-59005948ec5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 1"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="w-full h-full p-2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1452022449339-59005948ec5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 2"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="w-full h-full p-2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1617862516441-a9a5cf5284c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 3"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="w-full h-full p-2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1617862516441-a9a5cf5284c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 3"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
}
