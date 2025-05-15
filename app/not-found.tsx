import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px-200px)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Return to Home</Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
