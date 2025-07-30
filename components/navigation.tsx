import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu"
import { MenuIcon, BookOpen, GraduationCap, HomeIcon, InfoIcon, MailIcon } from "lucide-react"

export function Navigation() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 border-b bg-white">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
        <BookOpen className="h-6 w-6 text-blue-600" />
        <span className="sr-only">EduHub</span>
        <span className="text-blue-600">STUDY CENTER</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link className="text-gray-600 hover:text-blue-600" href="/">
          <HomeIcon className="mr-1 inline-block h-4 w-4" />
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-gray-600 hover:text-blue-600" variant="ghost">
              <GraduationCap className="mr-1 inline-block h-4 w-4" />
              Classes
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select a Class</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/6">
                Class 6
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/7">
                Class 7
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/8">
                Class 8
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/9">
                Class 9
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/10">
                Class 10
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/11">
                Class 11
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/12">
                Class 12
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href="/classes/btech-cse">
                BTech CSE
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="text-gray-600 hover:text-blue-600" href="/about">
          <InfoIcon className="mr-1 inline-block h-4 w-4" />
          About
        </Link>
        <Link className="text-gray-600 hover:text-blue-600" href="/contact">
          <MailIcon className="mr-1 inline-block h-4 w-4" />
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden bg-transparent" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Link className="flex items-center gap-2 text-lg font-semibold mb-6" href="/">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600">Study Center</span>
          </Link>
          <nav className="grid gap-4 text-base font-medium">
            <Link className="text-gray-600 hover:text-blue-600" href="/">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-gray-600 hover:text-blue-600 justify-start px-0" variant="ghost">
                  Classes
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuLabel>Select a Class</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/6">
                    Class 6
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/7">
                    Class 7
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/8">
                    Class 8
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/9">
                    Class 9
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/10">
                    Class 10
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/11">
                    Class 11
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/12">
                    Class 12
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/classes/btech-cse">
                    BTech CSE
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className="text-gray-600 hover:text-blue-600" href="/about">
              About
            </Link>
            <Link className="text-gray-600 hover:text-blue-600" href="/contact">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
