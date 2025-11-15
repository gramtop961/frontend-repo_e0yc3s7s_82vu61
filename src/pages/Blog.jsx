import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    async function load() {
      const res = await fetch(`${baseUrl}/posts`)
      const data = await res.json()
      setPosts(data)
    }
    load()
  }, [])

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-green-50 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-semibold text-green-900">Blog</h1>
        <p className="mt-2 text-green-900/80">Stories, tips, and seasonal inspiration.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-green-900/70">No posts yet. Check back soon.</p>
          ) : (
            posts.map((p) => (
              <article key={p._id} className="rounded-xl overflow-hidden border border-green-900/10 bg-white">
                <img src={p.cover_image || 'https://source.unsplash.com/1200x800/?garden,plants'} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-green-900">{p.title}</h3>
                  {p.excerpt && <p className="text-green-900/70 text-sm mt-1">{p.excerpt}</p>}
                  <div className="mt-3">
                    <a href="#" className="text-green-800 hover:text-green-900 text-sm">Read more</a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
