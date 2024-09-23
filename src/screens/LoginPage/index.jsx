import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('isLoggedIn', 'true')
      toast({
        title: "Login Successful",
        description: "You have been logged in successfully.",
      })
      navigate('/registrar-produto')
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
        <main className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </div>
                <div>
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" /> Log In
                </Button>
            </form>

              <Badge className="mt-4 mr-2">Login: admin</Badge>
              <Badge>Pass: password</Badge>
            </div>

            
        </main>
        </div>
    </>
  )
}