export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-white">About</h1>
      <p className="text-gray-400 text-sm max-w-xl">
        I'm Ben Craib, a product designer based in Adelaide, Australia. I lead the design function at Resvu, building thoughtful tools that power strata operations. My background in hospitality and IT consulting shaped how I think about service, communication, and systems.
      </p>

      <section className="space-y-6 animate-fade">
        <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">Career</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-gray-500 text-xs w-16 shrink-0">2022–Now</div>
            <p className="text-sm text-gray-300">
              Senior Product Designer at <a href="https://resvu.io" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">Resvu</a>
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-gray-500 text-xs w-16 shrink-0">2020–2022</div>
            <p className="text-sm text-gray-300">IT Consultant</p>
          </div>
          <div className="flex gap-4">
            <div className="text-gray-500 text-xs w-16 shrink-0">2010–2020</div>
            <p className="text-sm text-gray-300">Bar Manager / Fine Dining / Hospitality</p>
          </div>
          <div className="flex gap-4">
            <div className="text-gray-500 text-xs w-16 shrink-0">2019</div>
            <p className="text-sm text-gray-300">Co-founder at Meddage (messaging app for doctors)</p>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-800 my-8" />

      <section className="space-y-6 animate-fade">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">Outside Work</h2>
          <p className="text-gray-300 text-sm">I play football, train in jiu jitsu, lift weights, run hills, take photos, and obsess over how things are made. I love travel, music, and conversations that go deep fast.</p>
        </div>
      </section>
      <hr className="border-t border-gray-800 my-8" />

      <section className="space-y-6 animate-fade">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">Now</h2>
          <p className="text-gray-300 text-sm">Working on improving internal tools at Resvu, building my portfolio site, and learning more about running product teams.</p>
        </div>
      </section>
    </div>
  )
}