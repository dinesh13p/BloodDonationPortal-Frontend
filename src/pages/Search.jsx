import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockResults = [
  { id: 1, name: 'Ram Bahadur', bloodType: 'A+', location: 'Kathmandu', lastDonated: '2 months ago' },
  { id: 2, name: 'Sita Koirala', bloodType: 'O-', location: 'Lalitpur', lastDonated: '1 month ago' },
  { id: 3, name: 'Hari Sharma', bloodType: 'B+', location: 'Bhaktapur', lastDonated: '3 weeks ago' },
];

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const Search = () => {
  const query = useQuery();
  const q = query.get('q') || '';
  const location = query.get('location') || '';

  const results = mockResults.filter((r) => {
    const matchesBlood = q ? r.bloodType.toLowerCase().includes(q.toLowerCase()) : true;
    const matchesLocation = location ? r.location.toLowerCase().includes(location.toLowerCase()) : true;
    return matchesBlood && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-2xl font-bold mb-2">Search Results</h1>
        <p className="text-muted-foreground mb-6">Blood type: {q || 'Any'} {location ? `• Location: ${location}` : ''}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <CardTitle>{r.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Blood Type: {r.bloodType}</div>
                <div className="text-sm text-muted-foreground">Location: {r.location}</div>
                <div className="text-sm text-muted-foreground">Last donated: {r.lastDonated}</div>
              </CardContent>
            </Card>
          ))}
          {results.length === 0 && <div className="text-muted-foreground">No matching donors found.</div>}
        </div>
      </div>
    </div>
  );
};

export default Search;

