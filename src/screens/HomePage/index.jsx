import { Zap, Award, PhoneCall, ChevronsUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function HomePage() {
  const carouselImages = [
    "/car1.jpg?height=400&width=800&text=Carro+Elétrico+1",
    "/car2.jpg?height=400&width=800&text=Carro+Elétrico+2",
    "/car3.jpeg?height=400&width=800&text=Carro+Elétrico+3",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao ElectroDrive</h1>
          <p className="text-lg md:text-xl mb-8">Descubra o futuro da condução com nossos carros elétricos premium.</p>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Carro Elétrico ${index + 1}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
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
              <h2 className="mt-4 text-xl font-semibold text-center">Ecológico</h2>
              <p className="mt-2 text-center">Zero emissões para um planeta mais limpo. Nossos carros elétricos ajudam a reduzir a pegada de carbono.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Alta Performance</h2>
              <p className="mt-2 text-center">Tecnologia de ponta para uma condução otimizada. Experimente aceleração rápida e manuseio suave.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <PhoneCall className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Suporte 24/7</h2>
              <p className="mt-2 text-center">Nossa equipe dedicada oferece suporte ininterrupto para suas necessidades.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Por que escolher o ElectroDrive?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tecnologia Inovadora</h3>
              <p>Nossos carros elétricos estão equipados com os mais recentes avanços em tecnologia automotiva.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ampla Autonomia</h3>
              <p>Viaje mais longe com nossa tecnologia avançada de baterias, reduzindo a ansiedade de autonomia.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Custo-Benefício</h3>
              <p>Economize dinheiro com combustível e manutenção. Custos operacionais mais baixos significam mais economia.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Opções de Personalização</h3>
              <p>Personalize seu carro elétrico com uma ampla gama de cores e pacotes de recursos.</p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Depoimentos de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <p className="italic">"A experiência de dirigir meu carro elétrico da ElectroDrive mudou minha visão sobre a mobilidade!"</p>
              <p className="font-semibold mt-2">— Ana Oliveira</p>
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-sm">
              <p className="italic">"Economizei tanto em combustível e a manutenção é mínima. Recomendo a todos!"</p>
              <p className="font-semibold mt-2">— Carlos Silva</p>
            </div>
          </div>
        </section>

      </main>

      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 bg-primary text-white py-4 px-4 rounded-full shadow-lg hover:bg-primary-dark transition"
      >
        <ChevronsUp />
      </button>
    </div>
  );
}
