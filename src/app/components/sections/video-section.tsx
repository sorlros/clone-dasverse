import React from 'react';
import { Button } from '@/components/ui/button';

interface VideoSectionProps {
  videoNumber: number;
  title: string;
  subtitle: string;
  content: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

const VideoSection = ({
  videoNumber, title, subtitle, content, textColor = 'white', buttonColor = 'white', buttonTextColor = 'black'
}: VideoSectionProps) => {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="sticky top-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={`/videos/content-${videoNumber}-bg-video.mp4`} />
        </video>
      </div>
      <div className={`absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center text-${textColor} font-bold w-full`}>
        <div className="text-2xl">{title}</div>
        <h1 className="text-6xl mt-6 mb-8">{subtitle}</h1>
        <div className="text-2xl">{content}</div>
      </div>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2">
        <Button 
          className={`bg-transparent outline outline-2 rounded-full text-${buttonTextColor} text-[16px] hover:text-white`}
          style={{ outlineColor: buttonColor }}
          size="lg">
          LEARN MORE
        </Button>
      </div>
    </div>
  )
}

export default VideoSection;
