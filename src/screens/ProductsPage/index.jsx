import { useState, useEffect } from 'react'
import { Battery, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const defaultProducts = [
  { id: 'default1', name: "Model E", price: "$39,900", range: "250 miles", chargingTime: "6 hours", imageUrl: "/car1.jpg?height=200&width=300" },
  { id: 'default2', name: "Eco Rider", price: "$45,000", range: "300 miles", chargingTime: "5 hours", imageUrl: "/car2.jpg?height=200&width=300" },
  { id: 'default3', name: "Thunderbolt", price: "$55,000", range: "350 miles", chargingTime: "4 hours", imageUrl: "/car3.jpeg?height=200&width=300" },
]

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const storedProducts = JSON.parse(sessionStorage.getItem('products') || '[]')
    const allProducts = [...defaultProducts, ...storedProducts]
    const uniqueProducts = allProducts.filter((product, index, self) =>
      index === self.findIndex((t) => t.id === product.id)
    )
    
    setProducts(uniqueProducts)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Nossos carros elétricos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>Electric Vehicle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={product.imageUrl || "/placeholder.svg?height=200&width=300"}
                    alt={product.name}
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Battery className="h-5 w-5 mr-2" />
                    <span>Range: {product.range}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    <span>Charging Time: {product.chargingTime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-2xl font-bold">{product.price}</span>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}