import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const posts = [
  { id: 1, title: 'Why Donate Blood?', excerpt: 'Your single donation can save up to three lives.', date: 'Mar 4, 2025' },
  { id: 2, title: 'Preparing for Donation', excerpt: 'Hydration, sleep, and a healthy meal make a difference.', date: 'Feb 21, 2025' },
  { id: 3, title: 'After Donation Care', excerpt: 'What to do post-donation to recover quickly.', date: 'Jan 30, 2025' },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="container py-16">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground mb-6">Stories, updates, and tips about blood donation.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">{p.date}</div>
                <p className="text-sm">{p.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

