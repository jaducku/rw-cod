import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/home"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/myLecture"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        강의중인 목록
      </Link>
      <Link
        href="/myEnrollment"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        수강중인 과목
      </Link>
    </nav>
  )
}