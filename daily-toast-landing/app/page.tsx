import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8bfb6" }}>
      {/* Header */}
      <header className="px-4 py-6 md:px-8">
        <div className="flex items-center">
          <img src="/dailytoast-logo.png" alt="Daily Toast" className="h-12 md:h-16" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-7xl font-black leading-none"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Local&nbsp;news, perfectly toasted
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                Singapore headlines with the perfect texture of light, crispy and substantial
              </p>
              <Link
                href="https://www.instagram.com/dailytoast.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#e94f2b",
                  fontFamily: "var(--font-family-accent)",
                }}
              >
                Follow our IG
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="/hero-image.png" alt="Toast characters in Singapore" className="w-full max-w-lg" />
            </div>
          </div>

          {/* Feature Sections */}
          <div className="space-y-16 mb-16">
            {/* Feature 1 */}
            <div className="text-center space-y-6">
              <h2
                className="text-2xl md:text-3xl font-bold leading-tight"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Follow real stories,
                <br />
                not trending nonsense
              </h2>
              <div className="flex justify-center">
                <img src="/crime-toast.png" alt="Toast characters reading real news" className="w-full max-w-40" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Get news where you
                <br />
                already scroll
              </h2>
              <div className="flex justify-center">
                <img
                  src="/toast-mobilephones.png"
                  alt="Toast characters scrolling on phones"
                  className="w-full max-w-40"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                Understand the why,
                <br />
                not just the what
              </h2>
              <div className="flex justify-center">
                <img
                  src="/thinking-toast.png"
                  alt="Toast character thinking about news context"
                  className="w-full max-w-40"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center space-y-8 pb-16">
            <div className="max-w-2xl mx-auto space-y-4">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                From the team that built up Asia's largest tech publication, here's our spin on what we envision a
                credible, delightful news platform in Singapore should be.
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{
                  color: "#26539b",
                  fontFamily: "var(--font-family-body)",
                }}
              >
                We're still cooking up our native news product app, join our waitlist to get notified when it's ready
              </p>
            </div>
            <Link
              href="https://tally.so/r/3EREz4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#e94f2b",
                fontFamily: "var(--font-family-accent)",
              }}
            >
              Join our waitlist
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
