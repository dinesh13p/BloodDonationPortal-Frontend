import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (location) params.set('location', location);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-glow p-6 border border-white/20">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Blood Type/Search Input */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search blood type (A+, B+, O+, AB+...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base border-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Location Input */}
          <div className="flex-1">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 text-base border-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="bg-gradient-primary hover:bg-primary-dark h-12 px-8 text-base font-semibold shadow-primary"
          >
            Search Blood
          </Button>
        </div>

        {/* Quick Blood Type Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Quick search:</span>
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bloodType) => (
            <Button
              key={bloodType}
              variant="outline"
              size="sm"
              onClick={() => setSearchTerm(bloodType)}
              className="text-primary border-primary hover:bg-primary hover:text-white"
            >
              {bloodType}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;