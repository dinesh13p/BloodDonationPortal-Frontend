import Navigation from './Navigation';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { Download, Apple, Play } from 'lucide-react';
import phoneMockup1 from '@/assets/phone-mockup-1.png';
import phoneMockup2 from '@/assets/phone-mockup-2.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-md"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                HELPING
                <br />
                <span className="text-white/90">Blood Search</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                Blood deficiency is a life-threatening condition that forces people to 
                undergo trauma to find matching blood in a timely manner. We aim 
                to eliminate blood deficiency in Nepal.
              </p>
            </div>

            {/* Search Bar */}
            <div className="pt-4">
              <SearchBar />
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-black hover:bg-black/80 text-white h-14 px-6 rounded-xl flex items-center gap-3 shadow-glow"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs text-white/60">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button
                size="lg"
                className="bg-black hover:bg-black/80 text-white h-14 px-6 rounded-xl flex items-center gap-3 shadow-glow"
              >
                <Play className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs text-white/60">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* First Phone */}
              <div className="relative z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <img
                    src={phoneMockup1}
                    alt="Blood Search App Screenshot 1"
                    className="w-64 h-auto rounded-[2rem]"
                  />
                </div>
              </div>

              {/* Second Phone */}
              <div className="absolute top-16 left-32 z-10 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <img
                    src={phoneMockup2}
                    alt="Blood Search App Screenshot 2"
                    className="w-64 h-auto rounded-[2rem]"
                  />
                </div>
              </div>

              {/* Decorative Glow Effects */}
              <div className="absolute -inset-10 bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;