import { Link } from "@/components/ui/Link"
import { frontRoutes } from "@/models/routes.model"

export default function Home() {
  return (
    <main className="h-full p-1 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-7xl">URLS</h1>
        <p className="text-zinc-700 text-center max-w-2xl text-balance text-xl">
          <span>
            Simplify link management, a custom URL shortener born from a{' '}
          </span>
          <a
            href='https://supabase.com/blog/supabase-oss-hackathon'
            target='_blank'
            rel='noopener noreferrer'
            className="text-[#34b17b] decoration-[#34b17b]"
          >
            Supabase hackathon
          </a>
        </p>
      </div>
      <Link
        href={frontRoutes.dashboard.path}
        className="no-underline text-white bg-[#0f172a] p-2 px-4 hover:no-underline rounded-lg text-lg"
      >
        Create a link
      </Link>
    </main>
  )
}
