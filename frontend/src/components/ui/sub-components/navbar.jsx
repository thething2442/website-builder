import {Button} from '../button'
import {FileText} from 'lucide-react'
const Navbar = () =>{
  return(
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur">
         <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <FileText className="h-6 w-6 text-red-500" />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">InvoiceFlow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white"
              asChild
            >
              <a href="/sign-in">Log in</a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0"
              asChild
            >
              <a href="/sign-up">Sign up</a>
            </Button>
          </div>
        </div>
    </header>
  )
}
export default Navbar