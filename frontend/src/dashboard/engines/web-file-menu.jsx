import {Button} from '../../components/ui/button'
import {ArrowLeft,Smartphone,Tablet,Laptop,Eye,Save} from 'lucide-react'
import { Separator } from "../../components/ui/separator"
import {Tabs, TabsList, TabsTrigger} from '../../components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '../../components/ui/tooltip'
const WebFileMenu =() =>{
  return(
    <header className='flex items-center justify-between px-4 py-2 bg-black/60 border-b border-red-400/20 backdrop-blur-sm'>
      <div className="flex items-center justify-between px-4 py-2 bg-black/60 border-b border-red-400/20 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-red-400/10 hover:text-red-400">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-pink-500"
            >
              <path d="M22 8.5a8.5 8.5 0 0 1-17 0 8.5 8.5 0 0 1 17 0Z" />
              <path d="m17 4 3 3" />
              <path d="m14 7 3-3" />
              <path d="M22 17.5a8.5 8.5 0 0 1-17 0 8.5 8.5 0 0 1 17 0Z" />
              <path d="m17 13 3 3" />
              <path d="m14 16 3-3" />
              <path d="M8 4h8" />
              <path d="M8 20h8" />
            </svg>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
              SiteForge
            </span>
          </div>

          <Separator orientation="vertical" className="h-6 mx-2 bg-red-400/20" />
          <div className="text-sm text-gray-300">
            <span className="font-medium text-white">Business Website</span> / Home Page
          </div>

        </div>

        <div className="flex items-center gap-2">
          <Tabs defaultValue="desktop" className="w-auto">
            <TabsList className="h-8 bg-black/40 border border-red-400/20">
              <TabsTrigger
                value="mobile"
                className="h-7 px-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-400"
              >
                <Smartphone className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tablet"
                className="h-7 px-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-400"
              >
                <Tablet className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger
                value="desktop"
                className="h-7 px-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-400"
              >
                <Laptop className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-red-400/10 hover:text-red-400">
                  <Eye className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-red-400/10 hover:text-red-400">
                  <Save className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white border-none">
            Publish
          </Button>
        </div>
      </div>
    </header>
  )
}
export default WebFileMenu