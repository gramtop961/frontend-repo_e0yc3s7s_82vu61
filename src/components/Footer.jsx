export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-3">Mauch Garten Hilzingen</h4>
          <p className="text-green-100/80 text-sm">Premium plants, expert advice, and a love for nature since 1989.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Visit Us</h4>
          <p className="text-green-100/80 text-sm">Dorfstraße 12
            <br/>78247 Hilzingen
            <br/>Germany</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Opening Hours</h4>
          <ul className="text-green-100/80 text-sm space-y-1">
            <li>Mon–Fri: 9:00–18:00</li>
            <li>Sat: 9:00–16:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-green-100/80 text-sm">+49 7731 123456<br/>info@mauch-garten.de</p>
        </div>
      </div>
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-green-100/70 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Mauch Garten Hilzingen. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
