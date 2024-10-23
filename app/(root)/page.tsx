import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';
import { GuestStatistic } from "../_components/guest-statistic";
import { Courses } from "../_components/courses";
import { Title } from "../_components/title";
import { Faq } from "../_components/faq";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <div className="w-11/12 2xl:flex items-center justify-around gap-x-5 border-b border-slate-800 max-[450px]:px-0 p-16">
        <div className="h-auto items-center">
          <h1 className="flex-1 text-5xl max-[480px]:text-3xl font-medium leading-tight w-11/12">Start your <span className="text-[#455be7]">programming Journey</span> with our Dedicated community!</h1>
          <sub className="text-lg text-slate-400">Begin your coding adventure in our community, where learning is always appreciated and valued.</sub>
          <div className="pt-10">
            <Button size="lg" className="bg-sky-800 rounded-full text-lg font-medium hover:bg-sky-900 transition-all">Explore Resources</Button>
          </div>
        </div>
          <img src="banner.svg" className="lg:pt-0 pt-10" />
      </div>
    </div>
    <div className="flex items-center justify-center pt-32 relative">
        <h1 className="items-center justify-center w-2/3 text-center max-[440px]:text-3xl text-5xl font-normal leading-tight">
        We support your programming journey in our community. Let’s have a look at <span className="text-[#455be7]">how to navigate</span> the Becodemy website effectively.
        </h1>
    </div>
      <div className="flex justify-center  items-center pt-24 text-xl ">
        <sub className="flex cursor-pointer gap-x-3 text-center items-center text-lg text-slate-200"><Play className="border border-slay-500 max-[370px]:w-10 max-[370px]:h-10 max-[370px]:p-2 w-14 h-14 p-4 rounded-full" /> Click here to preview the video</sub>
      </div>
      <div className="flex items-center justify-center md:pt-36 pt-20">
        <GuestStatistic />
      </div>

      <div>

        <Title
        title="Popular"
        subTitle="Courses"
        description="our comprehensive project based courses"
        active
        />

        <div className="pt-5 flex justify-center">
          <Courses />
        </div>

      </div>

      <Title
       title="Common"
       subTitle="FAQ"
       description="Frequently asked questions"
       active
      />

      <Faq />
    </>
  );
}
