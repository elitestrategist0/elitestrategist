import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * ============================================
 * LUXURY BIRTHDAY WEBSITE - HOME PAGE
 * ============================================
 * 
 * EASY EDITING GUIDE:
 * 1. Search for [EDIT] to find all customizable sections
 * 2. Change text, colors, and content easily
 * 3. All sections are clearly labeled
 * 4. Uncomment photo gallery section when you have images
 * 
 * COLOR REFERENCE:
 * - Gold Accent: #D4AF37
 * - Deep Black: #0A0A0A
 * - White: #FFFFFF
 * - Charcoal: #2A2A2A
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
      {/* ============================================
          NAVIGATION - FIXED HEADER
          [EDIT] Change navigation links and styling
          ============================================ */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-accent/20" : "bg-transparent"
      }`}>
        <div className="container flex items-center justify-between py-6">
          <div className="luxury-heading text-2xl gold-accent">
            ✦
          </div>
          <div className="flex gap-12 text-sm">
            <a href="#about" className="hover-gold-underline transition">
              About You
            </a>
            <a href="#poetry" className="hover-gold-underline transition">
              Poetry
            </a>
            <a href="#messages" className="hover-gold-underline transition">
              My Words
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================
          HERO SECTION - FULL SCREEN
          [EDIT] Change headline, subtitle, and background image
          ============================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/luxury_hero_dark-ByJYs2UoJj7Xq47ogwV2y9.webp)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container text-center max-w-3xl mx-auto px-4 fade-in-up">
          {/* [EDIT] Change the main heading */}
          <h1 className="text-white drop-shadow-lg mb-6">
            Happy Birthday
          </h1>
          
          {/* [EDIT] Change the subtitle */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow font-light italic mb-8">
            To the most extraordinary woman in my life
          </p>
          
          {/* [EDIT] Change the date or add custom message */}
          <p className="text-sm tracking-widest text-accent mb-12">
            MAY 2, 2026 • A CELEBRATION OF YOU
          </p>
          
          {/* Decorative element */}
          <div className="flex justify-center gap-6">
            <div className="w-12 h-px bg-accent"></div>
            <div className="w-2 h-2 bg-accent rounded-full mt-px"></div>
            <div className="w-12 h-px bg-accent"></div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          [EDIT] Change the about text and customize
          ============================================ */}
      <section id="about" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in">
              <h2 className="mb-6">A Celebration of You</h2>
              <div className="gold-divider"></div>
            </div>

            {/* [EDIT] Change the about content */}
            <div className="space-y-8 luxury-body text-center">
              <p className="text-lg leading-relaxed">
                Today, we celebrate not just another year, but another chapter in the most beautiful story 
                of my life. You are the reason my heart beats with purpose, the light that guides my days, 
                and the dream I wake up grateful to be living.
              </p>
              
              <p className="text-lg leading-relaxed">
                Every moment with you is a masterpiece. Your grace, your strength, your beauty—both inside 
                and out—have transformed my world in ways I never thought possible. On this day, I want you 
                to know just how deeply you are loved.
              </p>

              <p className="text-lg leading-relaxed">
                May this year bring you endless joy, unforgettable adventures, and the knowledge that you are 
                cherished beyond measure. Happy birthday to my everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LUXURY DIVIDER - GOLD ACCENT
          ============================================ */}
      <section className="bg-background py-12">
        <div className="container text-center">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/luxury_accent_gold-XAMy2dQj2HnsWXAbYmcvEp.webp"
            alt="Luxury divider"
            className="w-40 h-auto mx-auto opacity-80"
          />
        </div>
      </section>

      {/* ============================================
          POETRY SECTION - SHAKESPEAREAN SONNET
          [EDIT] Change the poem or add your own verses
          ============================================ */}
      <section id="poetry" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in">
              <h2 className="text-white mb-6">A Sonnet for You</h2>
              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>

            {/* Poetry Card */}
            <div 
              className="p-12 md:p-16 rounded-none"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/luxury_quote_bg-Dvwc33m3JqB6TsSx5ywY6s.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-white/98 p-12 rounded-none">
                {/* [EDIT] Replace with your own Shakespearean poem or verses */}
                <div className="space-y-6 text-center luxury-body">
                  <p className="luxury-heading text-lg leading-relaxed">
                    Shall I compare thee to a summer's day?<br/>
                    Thou art more lovely and more temperate:<br/>
                    Rough winds do shake the darling buds of May,<br/>
                    And summer's lease hath all too short a date:<br/>
                  </p>
                  
                  <p className="luxury-heading text-lg leading-relaxed">
                    But thy eternal beauty shall not fade,<br/>
                    Nor shall death brag thou wander'st in his shade,<br/>
                    When in eternal lines to time thou growest:<br/>
                    So long as men can breathe or eyes can see,<br/>
                  </p>
                  
                  <p className="luxury-heading text-lg leading-relaxed">
                    So long lives this, and this gives life to thee.<br/>
                    Forever, my love, forever true.<br/>
                  </p>
                  
                  <p className="text-sm text-muted-foreground italic mt-8">
                    Inspired by Shakespeare, written from my heart to yours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MESSAGES SECTION - LOVE DECLARATIONS
          [EDIT] Change messages, add more, or customize
          ============================================ */}
      <section id="messages" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in">
              <h2 className="mb-6">Words From My Heart</h2>
              <div className="gold-divider"></div>
            </div>

            {/* Messages Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* [EDIT] Message 1 - Change text and customize */}
              <div className="luxury-card slide-in-left" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  You are the poetry my soul has always longed to write. Every moment with you is a verse 
                  of pure beauty and grace.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — Lwazi
                </p>
              </div>

              {/* [EDIT] Message 2 - Change text and customize */}
              <div className="luxury-card fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  In a world of infinite possibilities, I chose you. You are my greatest adventure, 
                  my sweetest dream, my forever home.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — With all my love
                </p>
              </div>

              {/* [EDIT] Message 3 - Change text and customize */}
              <div className="luxury-card slide-in-right" style={{ animationDelay: '0.3s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  Today the world celebrates your birth, but I celebrate you every single day. 
                  You are my reason, my purpose, my everything.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — Forever yours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION - To enable, uncomment the section below and add your image URLs */}

      {/* ============================================
          FUTURE DREAMS SECTION
          [EDIT] Change the message and customize
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 fade-in">The Promise of Forever</h2>
            <div className="gold-divider mb-8"></div>
            
            {/* [EDIT] Change the future dreams message */}
            <p className="text-lg leading-relaxed mb-8 luxury-body">
              Today we celebrate another year of your beautiful existence. But more than that, 
              we celebrate the extraordinary future we will build together—filled with laughter, 
              adventure, passion, and a love that grows deeper with each passing moment.
            </p>
            
            <p className="text-lg leading-relaxed mb-12 luxury-body">
              Here's to the dreams yet to be dreamed, the journeys yet to be taken, and the love 
              that will forever bind our hearts as one.
            </p>
            
            {/* [EDIT] Change button text if desired */}
            <Button 
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg rounded-none shadow-lg transition-all duration-300"
            >
              To Many More Years Together
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          [EDIT] Change name, date, and footer text
          ============================================ */}
      <footer className="py-16 bg-primary text-primary-foreground text-center border-t border-accent/20">
        <div className="container">
          <p className="luxury-heading text-xl mb-2">With All My Love</p>
          {/* [EDIT] Change your name and date */}
          <p className="text-sm opacity-80 mb-6">
            Lwazi Nyaqela • May 2, 2026
          </p>
          
          {/* Decorative footer element */}
          <div className="flex justify-center gap-4">
            <div className="w-8 h-px bg-accent"></div>
            <div className="w-2 h-2 bg-accent rounded-full mt-px"></div>
            <div className="w-8 h-px bg-accent"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
