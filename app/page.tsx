import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/hero-background"
import AppCard from "@/components/app-card"
import CategorySection from "@/components/category-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Header with Account Button */}
      <Navbar />

      {/* Hero Section with Entrance Animation */}
      <section className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Averra
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mb-10">
          Discover, download, and customize apps, AI models, and news from our curated collection. Build your perfect
          digital environment with AppHub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-800 to-black dark:from-white dark:to-gray-200 text-white dark:text-gray-900 hover:opacity-90"
          >
            Explore Apps <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Featured Apps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AppCard
            title="PhotoEditor Pro"
            description="Professional photo editing with AI-powered features"
            icon="image"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
            downloads="250K+"
          />
          <AppCard
            title="AI Assistant"
            description="Your personal AI assistant for everyday tasks"
            icon="bot"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
            downloads="1M+"
          />
          <AppCard
            title="CodeStudio"
            description="Powerful IDE with AI code completion"
            icon="code"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
            downloads="100K+"
          />
          <AppCard
            title="MusicMaker"
            description="Create music with advanced AI algorithms"
            icon="music"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
            downloads="500K+"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 mt-8">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategorySection
            title="Productivity"
            count={42}
            icon="laptop"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
          <CategorySection
            title="AI Models"
            count={28}
            icon="brain"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
          <CategorySection
            title="Entertainment"
            count={35}
            icon="film"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
          <CategorySection
            title="Education"
            count={24}
            icon="book-open"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
          <CategorySection
            title="Development"
            count={31}
            icon="code-2"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
          <CategorySection
            title="News"
            count={19}
            icon="newspaper"
            color="from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-8">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">AppHub</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your ultimate app ecosystem platform for discovering and customizing applications.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/apps" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link href="/ai-models" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    AI Models
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/developer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Developer Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 AppHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/about"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
