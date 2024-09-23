import { Zap, Award, PhoneCall } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HomePage() {
  const carouselImages = [
    "/car1.jpg?height=400&width=800&text=Carro+Elétrico+1",
    "/car2.jpg?height=400&width=800&text=Carro+Elétrico+2",
    "/car3.jpeg?height=400&width=800&text=Carro+Elétrico+3",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao ElectroDrive</h1>
          <p className="text-xl mb-8">Descubra o futuro da condução com nossos carros elétricos premium.</p>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index}>
                  <img src={src} alt={`Carro Elétrico ${index + 1}`} className="w-full h-auto rounded-lg" />
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
              <p className="mt-2 text-center">Zero emissões para um planeta mais limpo. Nossos carros elétricos ajudam a reduzir a pegada de carbono e contribuem para um futuro sustentável.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Alta Performance</h2>
              <p className="mt-2 text-center">Tecnologia de ponta para uma condução otimizada. Experimente aceleração rápida, manuseio suave e capacidades de longo alcance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <PhoneCall className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-xl font-semibold text-center">Suporte 24/7</h2>
              <p className="mt-2 text-center">Sempre aqui para ajudar. Nossa equipe dedicada oferece suporte ininterrupto para todas as suas necessidades de veículos elétricos.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Por que escolher o ElectroDrive?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tecnologia Inovadora</h3>
              <p>Nossos carros elétricos estão equipados com os mais recentes avanços em tecnologia automotiva, garantindo uma experiência de condução suave, eficiente e agradável.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ampla Autonomia</h3>
              <p>Com nossa tecnologia avançada de baterias, você pode viajar mais longe com uma única carga, reduzindo a ansiedade de autonomia e tornando longas viagens mais fáceis.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Custo-Benefício</h3>
              <p>Economize dinheiro com combustível e manutenção com nossos veículos elétricos. Custos operacionais mais baixos significam mais economia no seu bolso ao longo do tempo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Opções de Personalização</h3>
              <p>Personalize seu carro elétrico com uma ampla gama de cores, interiores e pacotes de recursos para atender ao seu estilo e necessidades individuais.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
