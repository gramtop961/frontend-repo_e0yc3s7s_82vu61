export default function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `https://source.unsplash.com/1200x900/?garden,plants,${i}`)
  return (
    <main className="pt-24 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-semibold text-green-900">Gallery</h1>
        <p className="mt-3 text-green-900/80">Strong visual storytelling from our green world.</p>
        <div className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src) => (
            <img key={src} src={src} className="mb-4 rounded-lg w-full object-cover" />
          ))}
        </div>
      </section>
    </main>
  )
}
