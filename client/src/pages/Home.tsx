import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * ============================================
 * LUXURY ROMANTIC BIRTHDAY WEBSITE
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
            <a href="#story" className="hover-gold-underline transition">
              Our Story
            </a>
            <a href="#poetry" className="hover-gold-underline transition">
              Poetry
            </a>
            <a href="#messages" className="hover-gold-underline transition">
              My Heart
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
            Happy Birthday, My Love
          </h1>
          
          {/* [EDIT] Change the subtitle */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow font-light italic mb-8">
            "If music be the food of love, play on"
          </p>
          
          {/* [EDIT] Change the date or add custom message */}
          <p className="text-sm tracking-widest text-accent mb-12">
            MAY 2, 2026 • A CELEBRATION OF ETERNAL LOVE
          </p>
          
          {/* Decorative element */}
          <div className="flex justify-center gap-6">
            <div className="w-12 h-px bg-accent"></div>
            <div className="w-2 h-2 bg-accent rounded-full mt-px"></div>
            <div className="w-12 h-px bg-accent"></div>
          </div>

          {/* Additional romantic tagline */}
          <p className="text-white/80 mt-12 italic text-sm">
            From your devoted heart, Lwazi
          </p>
        </div>
      </section>

      {/* ============================================
          ROMANTIC OPENING SECTION
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <div className="gold-divider mb-8"></div>
              <p className="text-lg leading-relaxed luxury-body text-muted-foreground italic mb-8">
                "The course of true love never did run smooth, yet with you, my darling, 
                every moment flows like the sweetest verse ever penned by the greatest poets of old."
              </p>
              <div className="gold-divider"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          OUR STORY SECTION
          [EDIT] Change the story text and customize
          ============================================ */}
      <section id="story" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in">
              <h2 className="text-white mb-6">Our Eternal Story</h2>
              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>

            {/* [EDIT] Change the story content */}
            <div className="space-y-8 luxury-body text-white text-center">
              <p className="text-lg leading-relaxed">
                In the grand tapestry of life, you are the most exquisite thread—woven with grace, 
                beauty, and a love so profound that it transcends the mortal realm. Every day with you 
                is a sonnet waiting to be written, every moment a stanza in the greatest love story ever told.
              </p>
              
              <p className="text-lg leading-relaxed">
                You are the rose that blooms eternal in the garden of my heart. Your laughter is music 
                to my soul, your touch is the poetry my body has always yearned to feel, and your presence 
                is the only truth I have ever known with absolute certainty. In you, I have found not just 
                a lover, but my soulmate, my muse, my forever.
              </p>

              <p className="text-lg leading-relaxed">
                On this glorious day of your birth, I celebrate not merely another year, but another chapter 
                in our magnificent journey together. May the heavens shower upon you all the blessings you so 
                richly deserve. May your heart overflow with joy, your spirit soar with boundless happiness, 
                and may you always know the depth and magnitude of my undying devotion.
              </p>

              <p className="text-lg leading-relaxed italic text-accent">
                "Shall I compare thee to a summer's day? Thou art more lovely and more temperate."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LUXURY DIVIDER - GOLD ACCENT
          ============================================ */}
      <section className="bg-white py-12">
        <div className="container text-center">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/luxury_accent_gold-XAMy2dQj2HnsWXAbYmcvEp.webp"
            alt="Luxury divider"
            className="w-40 h-auto mx-auto opacity-80"
          />
        </div>
      </section>

      {/* ============================================
          POETRY SECTION - SHAKESPEAREAN SONNETS
          [EDIT] Change the poem or add your own verses
          ============================================ */}
      <section id="poetry" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in">
              <h2 className="text-white mb-6">Verses of My Heart</h2>
              <p className="text-accent italic mb-6">
                "All the world's a stage, and all the lovers merely players of the greatest drama ever written"
              </p>
              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>

            {/* Poetry Card 1 */}
            <div 
              className="p-12 md:p-16 rounded-none mb-12"
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
                    Sometime too hot the eye of heaven shines,<br/>
                    And often is his gold complexion dimm'd;<br/>
                    And every fair from fair sometime declines,<br/>
                    By chance, or nature's changing course untrimm'd;<br/>
                  </p>
                  
                  <p className="luxury-heading text-lg leading-relaxed">
                    But thy eternal beauty shall not fade,<br/>
                    Nor shall death brag thou wander'st in his shade,<br/>
                    When in eternal lines to time thou growest:<br/>
                    So long as men can breathe or eyes can see,<br/>
                    So long lives this, and this gives life to thee.<br/>
                  </p>
                  
                  <p className="text-sm text-muted-foreground italic mt-8">
                    — William Shakespeare, Sonnet 18
                  </p>
                </div>
              </div>
            </div>

            {/* Poetry Card 2 - Original Verse */}
            <div 
              className="p-12 md:p-16 rounded-none"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663040908893/kbtwAF2ZRrUoscFKtPFT9U/luxury_quote_bg-Dvwc33m3JqB6TsSx5ywY6s.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-white/98 p-12 rounded-none">
                <div className="space-y-6 text-center luxury-body">
                  <p className="luxury-heading text-lg leading-relaxed">
                    In your eyes, I see the infinite cosmos,<br/>
                    In your smile, the warmth of a thousand suns,<br/>
                    In your touch, the tenderness of rose petals,<br/>
                    In your heart, the beating of my own soul.<br/>
                  </p>
                  
                  <p className="luxury-heading text-lg leading-relaxed">
                    You are the poetry I could never write,<br/>
                    The music that my heart has always sung,<br/>
                    The love that transcends all earthly measure,<br/>
                    The reason my spirit takes flight.<br/>
                  </p>
                  
                  <p className="luxury-heading text-lg leading-relaxed">
                    On this day of your glorious birth,<br/>
                    I pledge my eternal devotion,<br/>
                    My unwavering love, my endless passion,<br/>
                    Forever yours, in this life and beyond.<br/>
                  </p>
                  
                  <p className="text-sm text-muted-foreground italic mt-8">
                    — Written from the depths of my heart, for you
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
              <h2 className="mb-6">Whispers of My Soul</h2>
              <div className="gold-divider"></div>
            </div>

            {/* Messages Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* [EDIT] Message 1 - Change text and customize */}
              <div className="luxury-card slide-in-left" style={{ animationDelay: '0.1s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  You are the poetry my soul has always longed to write. Every moment with you is a verse 
                  of pure beauty, grace, and timeless love that echoes through eternity.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — Your devoted Lwazi
                </p>
              </div>

              {/* [EDIT] Message 2 - Change text and customize */}
              <div className="luxury-card fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  In a world of infinite possibilities, I chose you—not once, but a thousand times over. 
                  You are my greatest adventure, my sweetest dream, my forever home, my everything.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — With all my heart and soul
                </p>
              </div>

              {/* [EDIT] Message 3 - Change text and customize */}
              <div className="luxury-card slide-in-right" style={{ animationDelay: '0.3s' }}>
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl gold-accent mr-2">"</span>
                  Today the world celebrates your birth, but I celebrate you every single moment of every day. 
                  You are my reason, my purpose, my inspiration, my eternal love.
                  <span className="text-3xl gold-accent ml-2">"</span>
                </p>
                <p className="text-sm text-muted-foreground italic">
                  — Forever yours, eternally devoted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ROMANTIC INTERLUDE SECTION
          ============================================ */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white text-xl leading-relaxed luxury-body mb-8">
              "O, she doth teach the torches to burn bright! It seems she hangs upon the cheek of night 
              like a rich jewel in an Ethiope's ear; beauty too rich for use, for earth too dear."
            </p>
            <p className="text-accent italic text-sm">
              — Romeo and Juliet, Act I, Scene V
            </p>
            <p className="text-white/70 mt-8 text-sm">
              These words, penned centuries ago, could only ever be written for you.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FUTURE DREAMS SECTION
          [EDIT] Change the message and customize
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 fade-in">A Promise of Forever</h2>
            <div className="gold-divider mb-8"></div>
            
            {/* [EDIT] Change the future dreams message */}
            <p className="text-lg leading-relaxed mb-8 luxury-body">
              Today we celebrate another year of your magnificent existence—another year of your radiant beauty, 
              your boundless grace, your incomparable spirit. But more than that, we celebrate the extraordinary 
              future we shall build together, hand in hand, heart intertwined with heart.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 luxury-body">
              I envision a lifetime of stolen kisses beneath starlit skies, of whispered promises in the darkness, 
              of adventures that take our breath away, of quiet moments where the world fades and only we remain. 
              I see a love that grows deeper with each passing year, more precious with each shared memory, 
              more eternal with each beat of our hearts.
            </p>

            <p className="text-lg leading-relaxed mb-12 luxury-body">
              Here's to the dreams yet to be dreamed, the journeys yet to be taken, the love that will forever 
              bind our souls as one. May our love story be written in the stars, sung by the angels, and remembered 
              for all eternity.
            </p>
            
            {/* [EDIT] Change button text if desired */}
            <Button 
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg rounded-none shadow-lg transition-all duration-300"
            >
              To Many More Years of Eternal Love
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING ROMANTIC SECTION
          ============================================ */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white text-2xl mb-8 luxury-heading">
              My Dearest Love
            </h3>
            <p className="text-white/90 text-lg leading-relaxed luxury-body mb-8">
              On this sacred day, I want you to know with absolute certainty that you are cherished beyond measure, 
              adored beyond words, and loved with a passion that knows no bounds. You are the answer to prayers 
              I didn't know to make, the fulfillment of dreams I never dared to dream, the greatest blessing 
              my heart has ever received.
            </p>
            <p className="text-accent italic">
              Happy Birthday to my eternal love, my soulmate, my forever.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          [EDIT] Change name, date, and footer text
          ============================================ */}
      <footer className="py-16 bg-primary text-primary-foreground text-center border-t border-accent/20">
        <div className="container">
          <p className="luxury-heading text-xl mb-2">With All My Heart</p>
          {/* [EDIT] Change your name and date */}
          <p className="text-sm opacity-80 mb-6">
            Lwazi Nyaqela • May 2, 2026
          </p>
          
          <p className="text-xs opacity-70 mb-6 italic">
            "The heart has its reasons which reason knows nothing of." — Blaise Pascal
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
