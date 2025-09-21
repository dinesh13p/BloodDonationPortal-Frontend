import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

const donateSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(7, 'Valid phone is required'),
  bloodType: z.string().min(1, 'Blood type is required'),
  location: z.string().min(2, 'Location is required'),
});

const Donate = () => {
  const form = useForm<DonateForm>({
    resolver: zodResolver(donateSchema),
    defaultValues: { fullName: '', phone: '', bloodType: '', location: '' },
  });

  const onSubmit = (values) => {
    console.log('Donate submission', values);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-gradient-accent">
        <div className="container py-12">
          <h1 className="text-3xl font-bold">Become a Donor</h1>
          <p className="text-muted-foreground max-w-2xl">Fill out the form and we’ll verify your details to notify you when a match needs help.</p>
        </div>
      </section>
      <div className="container py-12 grid gap-8 md:grid-cols-2">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="98XXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bloodType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood Type</FormLabel>
                    <FormControl>
                      <Input placeholder="A+, O-, AB+ ..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, District" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-gradient-primary">Submit</Button>
            </form>
          </Form>
        </div>
        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            <p><strong>Eligibility:</strong> 18-60 years, 45kg+, healthy, no recent illness or medication affecting donation.</p>
            <p className="mt-2"><strong>Frequency:</strong> Whole blood: every 3 months. Platelets/plasma differ.</p>
            <p className="mt-2"><strong>Process:</strong> Registration → Verification → Notification when matched → Hospital donation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;

