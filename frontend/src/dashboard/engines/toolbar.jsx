import { Button } from "../../components/ui/button"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,ImageIcon,Settings,Code,Type,ChevronDown,Palette } from "lucide-react"
import { Separator } from "../../components/ui/separator"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
const Toolbarcomp = () => {
  return (
    <div className="flex items-center px-4 py-1 bg-black/40 border-b border-red-400/20 backdrop-blur-sm">
      <div className="flex items-center gap-1 mr-4">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <Underline className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-1 mr-4">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-400/10 hover:text-red-400">
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6 mx-2 bg-red-400/20" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-white hover:bg-red-400/10 hover:text-red-400">
            <Type className="h-4 w-4 mr-1" />
            Heading
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black/80 backdrop-blur-sm border-red-400/20 text-white">
          <DropdownMenuItem className="hover:bg-red-400/10 hover:text-red-400 cursor-pointer">
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-red-400/10 hover:text-red-400 cursor-pointer">
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-red-400/10 hover:text-red-400 cursor-pointer">
            Heading 3
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-red-400/10 hover:text-red-400 cursor-pointer">
            Paragraph
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator orientation="vertical" className="h-6 mx-2 bg-red-400/20" />

      <Button variant="ghost" size="sm" className="text-white hover:bg-red-400/10 hover:text-red-400">
        <Palette className="h-4 w-4 mr-1" />
        Colors
      </Button>

      <Button variant="ghost" size="sm" className="text-white hover:bg-red-400/10 hover:text-red-400">
        <ImageIcon className="h-4 w-4 mr-1" />
        Images
      </Button>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-white hover:bg-red-400/10 hover:text-red-400">
          <Code className="h-4 w-4 mr-1" />
          Custom Code
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-red-400/10 hover:text-red-400">
          <Settings className="h-4 w-4 mr-1" />
          Settings
        </Button>
      </div>
    </div>

  )
}
export default Toolbarcomp