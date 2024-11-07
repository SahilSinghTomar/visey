import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { CaretRight, PencilSimple } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

export default async function Gallery() {
  const session = await auth();
  const user = session?.user;

  const business = user?.business;

  return (
    <div className="space-y-6 pt-6 pb-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">Gallery</p>
        <div className="flex items-center gap-x-2">
          <Button size="icon" variant="secondary">
            <CaretRight size={20} />
          </Button>
          <Button size="icon" variant="ghost" className="text-linkBlue">
            <PencilSimple size={20} />
          </Button>
        </div>
      </div>

      <div className="flex gap-x-4 oveflow-x-auto">
        {business?.gallery.length === 0 && (
          <div className="text-gray-400">No images to display</div>
        )}

        {business?.gallery.map((image, idx) => (
          <div key={idx}>
            <div className="bg-gray-200 rounded-lg">
              <Image
                src={
                  'https://archive.org/download/placeholder-image/placeholder-image.jpg'
                }
                height={144}
                width={96}
                alt="Gallery Image"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}