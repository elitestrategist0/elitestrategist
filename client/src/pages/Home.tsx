import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Victorian Romanticism with Modern Minimalism Design
 * 
 * Design Philosophy:
 * - Asymmetric vertical flow with generous spacing
 * - Serif typography (Cormorant Garamond) for poetry and headings
 * - Soft rose, cream, burgundy, and gold color palette
 * - Gentle fade-in animations and subtle hover effects
 * - Vintage Polaroid frames and watercolor washes
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      }`}>
        <div className="container flex items-center justify-between py-4">
          <div className="serif-display text-2xl text-accent-gold">
            ♥
          </div>
          <div className="flex gap-8">
            <a href="#timeline" className="text-sm underline-gold hover:text-accent-gold transition">
              Our Story
            </a>
            <a href="#messages" className="text-sm underline-gold hover:text-accent-gold transition">
              My Heart
            </a>
            <a href="#poetry" className="text-sm underline-gold hover:text-accent-gold transition">
              Poetry
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/hero_romantic_garden-TtmT2hcPZLg2kGnkDvCqNx.webp)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center max-w-2xl mx-auto px-4 fade-in-up">
          <h1 className="serif-display text-6xl md:text-7xl text-white mb-6 drop-shadow-lg">
            Happy Birthday
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow font-light italic">
            To the one who makes my heart sing
          </p>
          <div className="flex justify-center gap-4">
            <Heart className="w-8 h-8 text-accent-gold animate-pulse" />
            <Heart className="w-8 h-8 text-accent-gold animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-8 h-8 text-accent-gold animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="serif-heading text-4xl mb-4 text-primary">Our Story</h2>
              <div className="w-16 h-1 bg-accent-gold mx-auto mb-6"></div>
              <p className="text-muted-foreground italic">
                Moments that became memories, written in the language of love
              </p>
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent-gold flex items-center justify-center shadow-md">
                  <span className="serif-display text-2xl text-white">I</span>
                </div>
                <div className="flex-grow">
                  <h3 className="serif-heading text-2xl text-primary mb-2">The Beginning</h3>
                  <p className="text-foreground/80 mb-3">
                    Every great love story begins with a single moment. Ours began with a glance, a smile, 
                    and the sudden realization that life had just become infinitely more beautiful.
                  </p>
                  <p className="text-sm text-muted-foreground italic">A moment forever etched in my heart</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-8 items-start flex-row-reverse">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-secondary flex items-center justify-center shadow-md">
                  <span className="serif-display text-2xl text-white">II</span>
                </div>
                <div className="flex-grow">
                  <h3 className="serif-heading text-2xl text-primary mb-2">Growing Closer</h3>
                  <p className="text-foreground/80 mb-3">
                    With each passing day, my love for you has grown deeper. Your laughter fills my days 
                    with joy, and your presence makes everything feel right.
                  </p>
                  <p className="text-sm text-muted-foreground italic">Every moment with you is a treasure</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent-gold flex items-center justify-center shadow-md">
                  <span className="serif-display text-2xl text-white">III</span>
                </div>
                <div className="flex-grow">
                  <h3 className="serif-heading text-2xl text-primary mb-2">Forever Yours</h3>
                  <p className="text-foreground/80 mb-3">
                    And now, on this day of your birth, I celebrate not just you, but the beautiful 
                    journey we share. You are my greatest blessing, my deepest joy, my forever love.
                  </p>
                  <p className="text-sm text-muted-foreground italic">Today and always</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <section className="py-12 bg-gradient-to-r from-background via-secondary to-background">
        <div className="container text-center">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/poetic_flourish_accent-dMFChP2MkdWbenAgsamAaz.webp"
            alt="Decorative flourish"
            className="w-32 h-auto mx-auto opacity-80"
          />
        </div>
      </section>

      {/* Messages Section */}
      <section id="messages" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="serif-heading text-4xl text-center mb-4 text-primary">Whispers of My Heart</h2>
            <div className="w-16 h-1 bg-accent-gold mx-auto mb-12"></div>

            {/* Message Cards */}
            <div className="space-y-8">
              {/* Message 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-gold hover:shadow-lg transition-shadow">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  <span className="text-3xl text-accent-gold mr-2">"</span>
                  You are the poetry my heart has always longed to write. Every moment with you is a verse 
                  of beauty, every laugh a chorus of joy, every touch a stanza of love.
                  <span className="text-3xl text-accent-gold ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">— Lwazi</p>
              </div>

              {/* Message 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-gold hover:shadow-lg transition-shadow">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  <span className="text-3xl text-accent-gold mr-2">"</span>
                  In a world of countless souls, you are my chosen one. My greatest adventure, my sweetest 
                  dream, my forever home. Happy birthday to the love of my life.
                  <span className="text-3xl text-accent-gold ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">— With all my love</p>
              </div>

              {/* Message 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-gold hover:shadow-lg transition-shadow">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  <span className="text-3xl text-accent-gold mr-2">"</span>
                  Today, the world celebrates the day you were born, but I celebrate you every single day. 
                  You are my reason, my purpose, my everything. May this year bring you as much joy as you 
                  bring to my heart.
                  <span className="text-3xl text-accent-gold ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">— Forever yours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Section */}
      <section id="poetry" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="serif-heading text-4xl text-center mb-4 text-primary">A Sonnet for You</h2>
            <div className="w-16 h-1 bg-accent-gold mx-auto mb-12"></div>

            {/* Sonnet Background */}
            <div 
              className="p-12 rounded-lg shadow-lg"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/romantic_quote_background-c54FhSEtQHEAao7VwLjgUt.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-white/95 p-8 rounded-lg">
                <div className="space-y-4 text-center">
                  <p className="serif-display text-lg text-primary leading-relaxed">
                    Shall I compare thee to a summer's day?<br/>
                    Thou art more lovely and more temperate:<br/>
                    Rough winds do shake the darling buds of May,<br/>
                    And summer's lease hath all too short a date:<br/>
                  </p>
                  <p className="serif-display text-lg text-primary leading-relaxed">
                    But thy eternal beauty shall not fade,<br/>
                    Nor shall death brag thou wander'st in his shade,<br/>
                    When in eternal lines to time thou growest:<br/>
                    So long as men can breathe or eyes can see,<br/>
                  </p>
                  <p className="serif-display text-lg text-primary leading-relaxed">
                    So long lives this, and this gives life to thee.<br/>
                    Forever, my love, forever true.<br/>
                  </p>
                  <p className="text-sm text-muted-foreground italic mt-6">
                    Inspired by Shakespeare, written for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Dreams Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent-gold/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="serif-heading text-4xl mb-6 text-primary">The Promise of Tomorrows</h2>
            <div className="w-16 h-1 bg-accent-gold mx-auto mb-8"></div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Today, we celebrate another year of your beautiful existence. But more than that, 
              we celebrate the future we will build together—filled with laughter, adventure, 
              and a love that grows deeper with each passing day.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-12">
              Here's to the dreams yet to be dreamed, the journeys yet to be taken, 
              and the love that will forever bind our hearts.
            </p>
            <Button 
              className="bg-accent-gold text-primary hover:bg-accent-gold/90 px-8 py-6 text-lg rounded-lg shadow-lg"
            >
              To Many More Years Together
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <div className="container">
          <p className="serif-display text-xl mb-2">With All My Love</p>
          <p className="text-sm opacity-80">
            Lwazi Nyaqela • May 2, 2026
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Heart className="w-4 h-4" />
            <Heart className="w-4 h-4" />
            <Heart className="w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
