import { Card, CardContent } from "@/components/ui/Card"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export interface TestimonialItemProps {
  type: 'video' | 'text';
  src: StaticImageData;
  // videoSrc?: string;
  poster?: string;
  videoId?: string;
  data?: string;
  name: string;
}

function TestimonialItem({ type, src, poster, videoId, data, name }: TestimonialItemProps) {
  return (
    <Card className={cn("bg-dark border-none shadow-none rounded-2xl lg:!rounded-40 h-full", type == 'video' ? "" : "")}>
      <CardContent className="p-4 h-full flex flex-col justify-between">
        {type == 'video' ?
          <div className="rounded-3xl overflow-hidden min-h-80 relative h-full">
            {poster && <Image
              src={poster}
              alt="Video Poster"
              layout="fill"
              objectFit="cover"
              className="z-[1]"
            />}
            <Dialog>
              <DialogTrigger className="absolute inset-0 z-[1] size-14 rounded-full flex items-center justify-center bg-card/25 m-auto ring-0 outline-0">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_443_413)">
                      <path d="M5.10533 0.529181C2.9416 -0.711968 1.18738 0.304796 1.18738 2.79837V21.1999C1.18738 23.6959 2.9416 24.7114 5.10533 23.4714L21.1892 14.2474C23.3536 13.0059 23.3536 10.9943 21.1892 9.753L5.10533 0.529181Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_443_413">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </DialogTrigger>
              <DialogContent className="border-none p-0">
                <DialogTitle className="hidden"></DialogTitle>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="h-full object-cover w-full"
                ></iframe>
              </DialogContent>
            </Dialog>

          </div>
          :
          <div className="p-4">
            <div className="flex justify-end">
              <svg width="43" height="27" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.043457 10.1393C0.043457 4.75096 4.4116 0.382812 9.79998 0.382812C15.1884 0.382812 19.5565 4.75096 19.5565 10.1393C19.5565 15.5277 12.9043 26.1046 1.37389 26.9915C1.37389 26.9915 8.91302 19.0089 6.69563 18.5654C4.47824 18.1219 0.043457 16.7915 0.043457 10.1393Z" fill="#DEE5EE" fillOpacity="0.08" />
                <path d="M23.1044 10.1393C23.1044 4.75096 27.4725 0.382812 32.8609 0.382812C38.2493 0.382812 42.6174 4.75096 42.6174 10.1393C42.6174 15.5277 35.9652 26.1046 24.4348 26.9915C24.4348 26.9915 31.9739 19.0089 29.7565 18.5654C27.5392 18.1219 23.1044 16.7915 23.1044 10.1393Z" fill="#DEE5EE" fillOpacity="0.08" />
              </svg>
            </div>
            <div className="relative">
              <Typography as='span' variant='body' size='lg' className='line-clamp-6 mt-4'>{data}</Typography>
              <Dialog>
                <DialogTrigger className="absolute bottom-0 pt-1 right-0 bg-dark ps-2 !outline-0 !ring-0">
                  <Typography as='span' variant='body' size='lg' className="text-primary">... Read More</Typography>
                </DialogTrigger>
                <DialogContent className="border-foreground/30">
                  <DialogTitle className="hidden"></DialogTitle>
                  <Typography variant='body' size='lg' className=''>{data} </Typography>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        }
        <div className={cn("flex gap-4 items-center pt-4", type == 'text' && 'px-4 border-t border-foreground/10')}>
          <Image src={src} alt={name} className="size-12 rounded-full object-cover" />
          <Typography variant='title' size='sm' className='text-foreground'> {name} </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialItem