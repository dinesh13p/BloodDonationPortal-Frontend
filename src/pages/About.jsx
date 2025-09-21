import { HeartPulse, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-gradient-hero text-white">
        <div className="container py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SABAIKO Blood Bank</h1>
          <p className="text-white/90 max-w-3xl">
            Our mission is to eliminate blood deficiency in Nepal by connecting donors and patients in seconds,
            not hours. Together, we can save more lives.
          </p>
          <div className="mt-6">
            <Button className="bg-black hover:bg-black/80">Join</Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-12 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-muted-foreground">Registered Donors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold">1.2k</div>
            <div className="text-muted-foreground">Successful Matches</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold">75+</div>
            <div className="text-muted-foreground">Partner Hospitals</div>
          </CardContent>
        </Card>
      </section>

      {/* Mission / Vision */}
      <section className="container pb-16 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-primary" /> Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Connect every patient in need with an eligible donor nearby through fast, reliable, and secure technology.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Safety</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            We prioritize safety and privacy. Verified donors, secure data handling, and guidance from medical partners.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Community</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            A community-driven platform supported by volunteers, NGOs, and hospitals across Nepal.
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;

