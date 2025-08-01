import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define the shape of a single banner item
interface BannerItem {
  altText: string; // Used for img alt, and video poster alt
  title: string;
  description: string;
  linkHref: string;
  linkText: string;

  mediaType: 'image' | 'video'; // New property to determine what to render

  // Image properties (optional for video type)
  imgSrc?: string; // Fallback or default image source if not using responsive images
  imgSrcMobile?: string; // Optional mobile-specific image source
  imgSrcDesktop?: string; // Optional desktop-specific image source

  // Video properties (optional for image type)
  videoSources?: { src: string; type: string; }[]; // Array for different video formats (e.g., MP4, WebM)
  posterSrc?: string; // Image to show while video loads or if video fails (recommended for video backgrounds)
}

// Define props for the BannerCarousel component
interface BannerCarouselProps {
  banners: BannerItem[]; // Array of banner data
  children?: React.ReactNode; // Optional children to render inside the banner content area
  autoSlideInterval?: number; // Optional interval for auto-sliding in milliseconds
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners, children, autoSlideInterval = 5000 }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Effect for automatic sliding
  useEffect(() => {
    if (banners.length > 1 && autoSlideInterval > 0) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
      }, autoSlideInterval);
      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [banners.length, autoSlideInterval]);

  const goToNextBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToBanner = (index: number) => {
    setCurrentBannerIndex(index);
  };

  if (!banners || banners.length === 0) {
    return null; // Or render a placeholder if no banners are provided
  }

  const currentBanner = banners[currentBannerIndex];

  return (
    <section className="relative text-white px-4 overflow-hidden h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
      {/* Conditional Media Rendering (Image or Video) */}
      {currentBanner.mediaType === 'video' ? (
        <video
          key={currentBanner.videoSources?.[0]?.src || currentBanner.title} // Key helps React re-mount video for smooth transition
          autoPlay
          loop
          muted // Crucial for autoplay without user interaction
          playsInline // Recommended for mobile browsers
          poster={currentBanner.posterSrc} // Image to display while video loads or if it fails
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: 1 }}
        >
          {currentBanner.videoSources?.map((source, idx) => (
            <source key={idx} src={source.src} type={source.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          {/* Mobile image - shown on small screens, hidden on md and up */}
          {currentBanner.imgSrcMobile && (
            <Image
              src={currentBanner.imgSrcMobile}
              alt={currentBanner.altText}
              width={768} // Typical mobile width
              height={462} // Maintain aspect ratio (e.g., 16:9 for 768px width)
              className="absolute inset-0 w-full h-full  z-0 transition-opacity duration-700 ease-in-out md:hidden"
              style={{ opacity: 1 }}
            />
          )}
          {/* Desktop image - hidden on small screens, shown on md and up */}
          {currentBanner.imgSrcDesktop && (
            <Image
              src={currentBanner.imgSrcDesktop}
              alt={currentBanner.altText}
              width={720} // Typical desktop width
              height={480} // Maintain aspect ratio (e.g., 16:9 for 1920px width)
              className="absolute inset-0 w-full h-full object-scale-down z-0 transition-opacity duration-700 ease-in-out hidden md:block"
              // style={{ opacity: 1 }}
            />
          )}
          {/* Fallback image if neither mobile nor desktop specific images are provided */}
          {!currentBanner.imgSrcMobile && !currentBanner.imgSrcDesktop && currentBanner.imgSrc && (
            <Image
              src={currentBanner.imgSrc}
              alt={currentBanner.altText}
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: 1 }}
            />
          )}
        </>
      )}

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-10"></div>

      {/* Content Wrapper */}
      <div key={currentBannerIndex} className="relative z-20 max-w-4xl mx-auto text-center
                  transition-opacity duration-700 ease-out opacity-100">
        {children ? (
          children
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentBanner.title}
            </h1>
            {/* <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
              {currentBanner.description}
            </p>
            <a
              href={currentBanner.linkHref}
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
            >
              {currentBanner.linkText}
            </a> */}
          </>
        )}
      </div>

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={goToPreviousBanner}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-75 transition"
            aria-label="Previous banner"
          >
            &#10094;
          </button>
          <button
            onClick={goToNextBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-75 transition"
            aria-label="Next banner"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30 ">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBanner(index)}
              className={`w-3 h-4 rounded-full transition-all duration-300
                ${index === currentBannerIndex ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-75'}`}
              aria-label={`Go to banner ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default BannerCarousel;