import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
          alt="Lush garden greenery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <p className="uppercase tracking-widest text-green-200/90 text-xs mb-3">Premium Garden Center</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Mauch Garten Hilzingen
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-green-100/90">
            We grow beauty. From seasonal blooms to timeless evergreens — curated with care by our family for yours.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md">Get in Touch</a>
            <a href="/products" className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-md">Explore Products</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
