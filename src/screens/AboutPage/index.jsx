// import React from 'react';
import { Car, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const developers = [
  {
    name: 'Matheus Montovaneli',
    role: 'Frontend Developer',
    description: 'Matheus is responsible for creating beautiful and responsive user interfaces.',
  },
  {
    name: 'Andre Nakamatsu',
    role: 'Backend Developer',
    description: 'Andre handles the server-side logic and database management for the application.',
  },
  {
    name: 'Caio Suzano',
    role: 'UI/UX Designer',
    description: 'Caio designs the user experience and ensures the app is user-friendly.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          About ElectroDrive
        </h1>
        <p className="mb-6">
          Welcome to ElectroDrive, your go-to shop for all things electric cars! Our mission is to provide the best electric vehicles and a seamless shopping experience.
        </p>
        <div className="flex items-center justify-center mb-4">
          <Car className="h-6 w-6 mr-2" />
          <h2 className="text-xl font-semibold">Meet Our Developers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {developers.map((developer, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg bg-card">
              <Users className="h-8 w-8 mb-2 mx-auto text-primary" />
              <h3 className="text-lg font-semibold">{developer.name}</h3>
              <p className="text-sm text-muted-foreground">{developer.role}</p>
              <p className="mt-2">{developer.description}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-6">
          <Link to="/">Go Back</Link>
        </Button>
      </div>
    </div>
  );
}
