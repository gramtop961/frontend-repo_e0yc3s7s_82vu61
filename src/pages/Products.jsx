import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('category') || ''
    setCategory(cat)
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      const url = category ? `${baseUrl}/products?category=${category}` : `${baseUrl}/products`
      const res = await fetch(url)
      const data = await res.json()
      setItems(data)
      setLoading(false)
    }
    fetchProducts()
  }, [category])

  const categories = [
    { key: '', title: 'All' },
    { key: 'outdoor', title: 'Outdoor' },
    { key: 'indoor', title: 'Indoor' },
    { key: 'seasonal', title: 'Seasonal' },
    { key: 'decor', title: 'Decor' },
    { key: 'supplies', title: 'Supplies' },
  ]

  return (
    <main className="pt-24 bg-gradient-to-b from-white to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-semibold text-green-900">Products</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c.key} onClick={() => setCategory(c.key)} className={`px-4 py-2 rounded-md border ${category===c.key? 'bg-green-700 text-white border-green-700':'bg-white text-green-900 border-green-900/20'}`}>
              {c.title}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="mt-10 text-green-900/70">Loading...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.length === 0 ? (
              <p className="text-green-900/70">No products yet. Check back soon.</p>
            ) : (
              items.map((p) => (
                <div key={p._id} className="rounded-xl overflow-hidden border border-green-900/10 bg-white">
                  <img src={p.image || `https://source.unsplash.com/800x600/?${p.category},plant`} alt={p.name} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-medium text-green-900">{p.name}</p>
                    {p.price && <p className="text-green-800/80 text-sm">€ {p.price.toFixed(2)}</p>}
                    {p.description && <p className="text-green-900/70 text-sm mt-1">{p.description}</p>}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  )
}
