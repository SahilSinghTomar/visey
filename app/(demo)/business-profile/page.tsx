import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

import {
  PhoneCall,
  HeartStraight,
  ShareFat,
  Star,
} from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import About from '../../../components/profile/_components/about';
import Services from '../../../components/profile/_components/services';
import Achievements from '../../../components/profile/_components/achivements';
import Opportunities from '../../../components/profile/_components/opportunities';
import Gallery from '../../../components/profile/_components/gallery';
import RatingReview from '../../../components/profile/_components/rating-review';
export default function BusinessProfile() {
  return (
    <section className="flex gap-x-12">
      <div className="flex-1 max-w-screen-md rounded-xl overflow-hidden">
        <div className="h-24 md:h-40 bg-neutral-400"></div>
        <div className="-mt-10  md:-mt-20 flex justify-center">
          <Avatar className="size-36 md:size-44 border-[6px] border-white  rounded-full overflow-hidden">
            <AvatarImage src="https://picsum.photos/100" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-0.5">
            <div className="flex gap-x-6 justify-between items-start">
              <p className="text-xl md:text-2xl">Business Name</p>
              <p className="text-sm px-4 py-0.5 bg-secondary-200 rounded-full">
                Promoted
              </p>
            </div>
            <p className="text-linkBlue text-sm">Company Registered Name</p>
            <p className="">We make decor homes</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold text-sm">4.1</p>
            <div className="flex justify-center gap-x-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>⭐</span>
              ))}
            </div>
            <p className="text-sm">439 ratings</p>
          </div>

          <Button
            variant="outline"
            size="md"
            className="shrink-0 border flex items-center gap-x-2 font-normal sm:py-3"
          >
            <PhoneCall size={20} />
            <span>Show contact Details</span>
          </Button>

          <div className="-translate-y-1 flex gap-x-2 items-center">
            <Button variant="ghost" size="icon">
              <HeartStraight size={24} />
            </Button>

            <Button variant="ghost" size="icon">
              <ShareFat size={24} />
            </Button>
          </div>
        </div>

        <Separator />

        <div className="py-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <About />
              <Separator />
              <Services />
              <Separator />
              <Achievements />
              <Separator />
              <Opportunities />
              <Separator />
              <Gallery />
              <Separator />
              <RatingReview />
            </TabsContent>
            <TabsContent value="services">
              <Services />
            </TabsContent>
            <TabsContent value="reviews">
              <RatingReview />
            </TabsContent>
            <TabsContent value="gallery">
              <Gallery />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="hidden lg:flex max-w-64 flex-col gap-y-12">
        <div className="space-y-2">
          <h2 className="font-medium">Categories Listed In</h2>
          <div className="flex gap-2 flex-wrap">
            <Button size="sm" variant="outline">
              Accelerator
            </Button>
            <Button size="sm" variant="outline">
              Legal
            </Button>
            <Button size="sm" variant="outline">
              Registration
            </Button>
          </div>
        </div>

        <div className="p-2 border rounded-lg  mx-auto">
          <div className="bg-neutrals-400 rounded-lg w-32 aspect-[1/4]"></div>
        </div>

        <div className="border rounded-xl p-6 space-y-2">
          <Button className="w-full">Contact Business</Button>
          <Button variant="outline" className="gap-x-2 items-center w-full">
            <Star className="shrink-0 -translate-y-[1.5px]" size={16} />
            <span>Rate this business</span>
          </Button>
        </div>

        <div className="p-2 border rounded-lg  mx-auto">
          <div className="bg-neutrals-400 rounded-lg w-32 aspect-[1/4]"></div>
        </div>
      </div>
    </section>
  );
}