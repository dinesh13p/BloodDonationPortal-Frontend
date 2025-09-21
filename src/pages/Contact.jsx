import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="max-w-xl space-y-4">
            <Input placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
            <Textarea placeholder="Your message" rows={5} />
            <Button className="bg-gradient-primary">Send Message</Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            <p><strong>Address:</strong> Kathmandu, Nepal</p>
            <p className="mt-2"><strong>Email:</strong> support@hamrobloodbank.org</p>
            <p className="mt-2"><strong>Phone:</strong> +977-9800000000</p>
            <p className="mt-4">We usually respond within 24 hours.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

