// import React from 'react'
import { Zap, Award, PhoneCall } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HomePage() {
  const carouselImages = [
    "/car1.jpg?height=400&width=800&text=Electric+Car+1",
    "/car2.jpg?height=400&width=800&text=Electric+Car+2",
    "/car3.jpeg?height=400&width=800&text=Electric+Car+3",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to ElectroDrive</h1>
          <p className="text-xl mb-8">Discover the future of driving with our premium electric cars.</p>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Electric Car ${index + 1}`} className="w-full h-auto rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Zap className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Eco-Friendly</h2>
              <p className="mt-2 text-center">Zero emissions for a cleaner planet. Our electric cars help reduce carbon footprint and contribute to a sustainable future.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Top Performance</h2>
              <p className="mt-2 text-center">Cutting-edge technology for optimal driving. Experience rapid acceleration, smooth handling, and long-range capabilities.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <PhoneCall className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">24/7 Support</h2>
              <p className="mt-2 text-center">Always here to assist you. Our dedicated team provides round-the-clock support for all your electric vehicle needs.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose ElectroDrive?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovative Technology</h3>
              <p>Our electric cars are equipped with the latest advancements in automotive technology, ensuring a smooth, efficient, and enjoyable driving experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Extensive Range</h3>
              <p>With our advanced battery technology, you can travel further on a single charge, reducing range anxiety and making long trips a breeze.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
              <p>Save money on fuel and maintenance with our electric vehicles. Lower operating costs mean more savings in your pocket over time.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
              <p>Personalize your electric car with a wide range of colors, interiors, and feature packages to suit your individual style and needs.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}