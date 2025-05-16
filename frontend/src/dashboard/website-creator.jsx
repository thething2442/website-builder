import WebFileMenu from "./engines/web-file-menu"
import Toolbarcomp from './engines/toolbar'
export default function WebsiteCreator() {
  return(
    <div className="flex flex-col h-screen bg-gradient-to-br from-red-600 via-black to-orange-500">
      <WebFileMenu />
      <Toolbarcomp />
    </div>
  )
}