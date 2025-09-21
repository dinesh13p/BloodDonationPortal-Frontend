import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const logos = [
  'Bir Hospital',
  'Patan Hospital',
  'Teaching Hospital',
  'Red Cross Nepal',
  'Nepal Medicity',
  'Grande Hospital',
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-accent">
        <div className="container py-16">
          <h1 className="text-4xl font-bold">Our Partners</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Hospitals, NGOs, and organizations fueling our impact.</p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((name) => (
            <Card key={name}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Collaborative partner supporting blood donation and emergency response.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;

