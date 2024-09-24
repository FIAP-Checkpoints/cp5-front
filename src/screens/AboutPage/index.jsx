import { useState } from 'react';
import { Car, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GithubIcon } from 'lucide-react'; 
import { Cta } from '@/components/Cta';

const developers = [
  {
    name: 'Matheus Montovaneli',
    role: 'Frontend Developer',
    description: 'Matheus foi responsavel pela interface e desenvolvimento do Front.',
    image: '/matheus.jpeg', 
    github: 'https://github.com/imneli',
  },
  {
    name: 'André Nakamatsu',
    role: 'Backend Developer',
    description: 'André foi responsavel pelo funcionamento do sistema de registro.',
    image: 'https://avatars.githubusercontent.com/u/103290037?v=4', 
    github: 'https://github.com/andrenakarocha',
  },
  {
    name: 'Caio Suzano',
    role: 'UI/UX Designer',
    description: 'Caio foi responsavel por pegar assets e imagens para nosso projeto, além de dar ideias para UX.',
    image: '/caio.png', 
    github: 'https://github.com/',
  },
  {
    name: 'Guilherme, Gozzi',
    role: 'Project Manager',
    description: 'Guilherme foi responsavel pela organização do repositório.',
    image: 'url_todana_image', 
    github: 'https://github.com/',
  },
  {
    name: 'Lucas Vasquez',
    role: 'UI/UX Designer',
    description: 'Lucas foi responsavel por buscar icons para utilização no projeto.',
    image: 'url_to_image', 
    github: 'https://github.com/',
  },
  {
    name: 'Wellington Cidade',
    role: 'Professor',
    description: 'Cidade foi o professor que passou este projeto para nós.',
    image: 'https://avatars.githubusercontent.com/u/28817008?v=4', 
    github: 'https://github.com/welltecnc',
  },
];

const faqs = [
  {
    question: "O que vocês usaram para estilização?",
    answer: "TailwindCSS & Shadcn.",
  },
  {
    question: "Como fizeram a página de produtos?",
    answer: "Fizemos uma data e utilizamos um map().",
  },
  {
    question: "Quais tecnologias utilizaram para Rotas?",
    answer: "Utilizamos React Router DOM.",
  },
];




export default function About() {
  const [activeTab, setActiveTab] = useState("developers");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">About ElectroDrive</h1>
        <p className="mb-6">
        Bem-vindo à ElectroDrive, sua loja preferida de todos os itens de carros elétricos! Nossa missão é fornecer os melhores veículos elétricos e uma experiência de compra perfeita.
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="developers" className="mr-2">Desenvolvedores</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="developers">
            <div className="flex items-center justify-center mb-4">
              <Car className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold"> Conheça nossos desenvolvedores</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {developers.map((developer, index) => (
                <div key={index} className="flex flex-col items-center p-4 border rounded-lg bg-card">
                  <img src={developer.image} alt={developer.name} className="w-32 h-32 rounded-full mb-2" />
                  <h3 className="text-lg font-semibold">{developer.name}</h3>
                  <p className="text-sm text-muted-foreground">{developer.role}</p>
                  <p className="mt-2">{developer.description}</p>
                  <Button variant="link" className="mt-2" asChild>
                    <a href={developer.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="inline h-5 w-5 mr-1" /> GitHub Profile
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faqs">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border p-4 rounded-lg bg-card">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Button variant="outline" className="mt-6" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>

      <Cta/>
    </div>

    
  );
}
