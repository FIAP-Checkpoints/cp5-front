import { useState, useEffect } from 'react'
import { Car, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterProductPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    range: '',
    chargingTime: '',
    description: '',
    imageUrl: '',
  })
  const [file, setFile] = useState(null)
  const { toast } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    const loginStatus = sessionStorage.getItem('isLoggedIn')
    setIsLoggedIn(loginStatus === 'true')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let imageUrl = product.imageUrl

    if (file) {
      imageUrl = URL.createObjectURL(file)
    }

    const newProduct = {
      ...product,
      id: Date.now(),
      imageUrl,
    }
    
    const existingProducts = JSON.parse(sessionStorage.getItem('products') || '[]')
    const updatedProducts = [...existingProducts, newProduct]
    sessionStorage.setItem('products', JSON.stringify(updatedProducts))
    
    toast({
      title: "Product Registered",
      description: "The new product has been successfully added.",
    })
    
    setProduct({
      name: '',
      price: '',
      range: '',
      chargingTime: '',
      description: '',
      imageUrl: '',
    })
    setFile(null)
    
    navigate('/products')
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="mb-4">You must be logged in to access this page.</p>
          <Button onClick={() => navigate('/login')}>Go to Login</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <header className="w-full p-4 border-b">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="h-6 w-6" />
            <span className="text-xl font-bold">ElectroDrive</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost"><Link to="/">Home</Link></Button>
            <Button variant="ghost"><Link to="/products">Products</Link></Button>
            <Button variant="outline" onClick={() => {
              sessionStorage.removeItem('isLoggedIn')
              setIsLoggedIn(false)
              navigate('/')
            }}>Logout</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Register New Product</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="range">Range (miles)</Label>
              <Input
                id="range"
                name="range"
                value={product.range}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="chargingTime">Charging Time (hours)</Label>
              <Input
                id="chargingTime"
                name="chargingTime"
                value={product.chargingTime}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={product.imageUrl}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </div>
            <div>
              <Label htmlFor="imageFile">Or upload an image</Label>
              <Input
                id="imageFile"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="cursor-pointer"
              />
            </div>
            <Button type="submit" className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Register Product
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
