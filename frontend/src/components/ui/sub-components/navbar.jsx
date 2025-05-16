import {Button} from '../button'
import {Link} from 'react-router-dom'
import {Rocket} from 'lucide-react'
const Navbar =() =>{
  return(
    <header className="relative z-10 border-b border-red-400/20 backdrop-blur-sm">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Rocket className="h-8 w-8 text-pink-500" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
          SiteForge
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#features" className="text-white hover:text-red-400 transition-colors">
          Features
        </Link>
        <Link href="#templates" className="text-white hover:text-red-400 transition-colors">
          Templates
        </Link>
        <Link href="#pricing" className="text-white hover:text-red-400 transition-colors">
          Pricing
        </Link>
        <Link href="#testimonials" className="text-white hover:text-red-400 transition-colors">
          Testimonials
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:text-red-400 hover:bg-red-400/10">
          Login
        </Button>
        <Button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white border-none">
          Sign Up Free
        </Button>
      </div>
    </div>
  </header>
  )
}
export default Navbar