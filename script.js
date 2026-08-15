/* ==========================================================================
   1. EXCLUSIVE ADVISORS & PARTNERS DATABASE
   ========================================================================== */
const eliteAdvisors = [
  {
    id: "adv-1",
    name: "Alexander Vance",
    role: "Senior Managing Partner &bull; Coastal Acquisitions",
    region: "North America",
    volume: "$1.2B+ Career Closed",
    jurisdiction: "Malibu, Beverly Hills & Palm Beach",
    languages: "English, French",
    activeListings: "12 Exclusive Mansions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Advising Fortune 50 founders and private family offices across California and South Florida waterfront assets with over 16 years of bespoke representation."
  },
  {
    id: "adv-2",
    name: "Sophia Sterling",
    role: "Partner &bull; Sky Penthouses & Trophy Assets",
    region: "North America",
    volume: "$950M+ Career Closed",
    jurisdiction: "Manhattan (Billionaires' Row) & Miami",
    languages: "English, Italian, Spanish",
    activeListings: "8 Sky Residences",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Specializing in ultra-prime duplex penthouses and off-market architectural monuments in New York City and Star Island Miami."
  },
  {
    id: "adv-3",
    name: "Lord Marcus Thorne",
    role: "Executive Principal &bull; Private Islands & Estates",
    region: "Europe",
    volume: "$1.4B+ Career Closed",
    jurisdiction: "London (Mayfair), Monaco & The Bahamas",
    languages: "English, French, German",
    activeListings: "6 Private Island Estates",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Trusted advisor to European aristocratic families and global sovereign wealth managers for confidential large-acreage acquisitions."
  },
  {
    id: "adv-4",
    name: "Elena Rostova",
    role: "Managing Director &bull; Alpine & Swiss Banking Jurisdictions",
    region: "Europe",
    volume: "$820M+ Career Closed",
    jurisdiction: "Geneva, Zermatt, St. Moritz & Aspen",
    languages: "English, Russian, French, German",
    activeListings: "9 Ski-In/Ski-Out Chalets",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Pioneering private ski-in/ski-out estate transactions and cross-border escrow solutions with discrete Swiss private banking integration."
  },
  {
    id: "adv-5",
    name: "Tariq Al-Mansoor",
    role: "Senior Partner &bull; Gulf & Middle East Palaces",
    region: "Middle East",
    volume: "$1.6B+ Career Closed",
    jurisdiction: "Dubai (Palm Jumeirah, Emirates Hills) & Abu Dhabi",
    languages: "Arabic, English",
    activeListings: "14 Custom Waterfront Palaces",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Directly coordinating trophy mega-mansion transactions with yacht berths and private helipads across the United Arab Emirates."
  },
  {
    id: "adv-6",
    name: "Matteo Visconti",
    role: "Partner &bull; Mediterranean Heritage & Historical Villas",
    region: "Europe",
    volume: "$780M+ Career Closed",
    jurisdiction: "Lake Como, Amalfi Coast & French Riviera",
    languages: "Italian, French, English",
    activeListings: "7 Historic Castles & Waterfronts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Curating rare 18th-century Italian villas, private botanic estates, and private Mediterranean moorings for discerning collectors."
  }
];

/* ==========================================================================
   2. EXCLUSIVE PORTFOLIO: 6 DISTINCT LUXURY VILLAS
   ========================================================================== */
const portfolioVillas = [
  {
    id: "villa-lumina",
    title: "Villa Lumina Coastal Sanctuary",
    price: "$14,850,000",
    numericPrice: 14850000,
    location: "Malibu, California",
    beds: 6,
    baths: 8,
    sqft: "9,400 sq ft",
    badge: "Oceanfront Modern",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "Perched along the cliffs of Malibu, Villa Lumina combines brutalist concrete lines with warm organic teakwood. Floor-to-ceiling automated glass walls slide away to merge the ocean breeze directly with bespoke open-plan living areas.",
    rooms: [
      {
        name: "Master Sanctuary Suite",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        desc: "Custom floating platform bed with indirect LED illumination, acoustic ribbed wall paneling, and a private wraparound sunset deck.",
        specs: ["Italian White Oak Flooring", "Automated Blackout Velvet Drapes", "Custom Built-in Dressing Room"]
      },
      {
        name: "Double-Height Living Salon",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        desc: "Features a 22-foot suspended blackened steel fireplace, curated low-profile Italian sectionals, and seamless ocean horizons.",
        specs: ["Calacatta Marble Slab Fireplace", "Concealed Dolby Audio", "Architectural Linear Lighting"]
      },
      {
        name: "Minimalist Gourmet Kitchen",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        desc: "Matte anthracite cabinetry with a monolithic waterfall quartzite preparation island and integrated Gaggenau cooking modules.",
        specs: ["Temp-controlled 400-Bottle Wine Vault", "Dornbracht Platinum Fixtures", "Hidden Butler's Pantry"]
      },
      {
        name: "Wellness Spa Bathroom",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        desc: "A freestanding carved stone soaking tub positioned in front of a private atrium garden, flanked by a cedarwood dry sauna.",
        specs: ["Heated Limestone Flooring", "Chromotherapy Rain Shower", "Backlit Floating Double Vanity"]
      }
    ],
    amenities: ["Oceanfront Infinity Pool", "Private Beach Trail", "Subterranean 6-Car Garage", "Helipad Access", "Smart Security Automation"]
  },
  {
    id: "horizon-glass",
    title: "The Horizon Glass Pavilion",
    price: "$18,200,000",
    numericPrice: 18200000,
    location: "Beverly Hills, California",
    beds: 5,
    baths: 7,
    sqft: "8,800 sq ft",
    badge: "Architectural Landmark",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "An iconic cantilevered glass estate perched behind double security gates in prime Beverly Hills. Surrounded by zen reflection ponds and custom bronze sculptures overlooking the Los Angeles basin.",
    rooms: [
      {
        name: "Skyview Penthouse Bedroom",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
        desc: "Showcase boutique glass wardrobe systems with soft amber backlighting, custom Italian leather furniture, and motorized privacy glass.",
        specs: ["Poltrona Frau Handcrafted Bed", "Smart Switchable Glass Walls", "Morning Espresso Bar"]
      },
      {
        name: "Private Screening Room & Lounge",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        desc: "Tiered velvet lounge recliners, 4K laser commercial cinema projection, and an acoustic sound-dampened velvet interior.",
        specs: ["Dolby Atmos 9.4 Surround System", "Onyx Cocktail Wet Bar", "Micro-climate Ventilation"]
      },
      {
        name: "Sculptural Dining Gallery",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
        desc: "An 18-seat live-edge walnut slab table illuminated by suspended blown-glass fixtures opening onto an outdoor reflecting pool.",
        specs: ["Bocci Hand-blown Chandelier", "Seamless Travertine Slabs", "Zero-Threshold Sliding Panels"]
      },
      {
        name: "Monolithic Master Bath",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
        desc: "Floor-to-ceiling bookmatched grey marble featuring an oversized double rain shower and an outdoor open-air jacuzzi terrace.",
        specs: ["Nero Marquina Marble Slabs", "Towel Warming Walls", "Frameless Privacy Glass"]
      }
    ],
    amenities: ["Cantilevered Pool", "4K Private Cinema", "Onyx Cocktail Bar", "Zen Water Ponds", "24/7 Security Guardhouse"]
  },
  {
    id: "villa-paradiso",
    title: "Villa Paradiso Ocean Estate",
    price: "$21,500,000",
    numericPrice: 21500000,
    location: "Star Island, Miami Beach",
    beds: 7,
    baths: 9,
    sqft: "11,200 sq ft",
    badge: "Ultra Luxury Waterfront",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "The pinnacle of tropical modernism on Miami's premier Star Island with 120 feet of deep-water frontage, private mega-yacht docking, and resort-grade outdoor amenities.",
    rooms: [
      {
        name: "Presidential Royal Suite",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        desc: "Custom bleached oak paneling with direct private access to a rooftop stargazing deck and heated hydrotherapy plunge pool.",
        specs: ["Dual Walk-in Dressing Suites", "Custom Silk Drapery", "Motorized Corner Glass"]
      },
      {
        name: "Grand Marble Foyer & Atrium",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        desc: "A floating sculptural spiral staircase framed by French marble and a 26-foot atrium featuring curated indoor tropical flora.",
        specs: ["Floating Bronze Spiral Staircase", "28ft Glass Curtain Wall", "Curated Modern Sculptures"]
      },
      {
        name: "Open-Concept Culinary Bar",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
        desc: "Sleek European oak cabinetry paired with white marble counters, tailored for private chef dining experiences.",
        specs: ["Sub-Zero Dual Refrigeration", "Teppanyaki Integrated Grill", "Barista Coffee Station"]
      },
      {
        name: "Resort Bath & Open Steam Room",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
        desc: "Oasis bathroom with skylight rain showers, solid travertine sinks, and direct access to the outdoor palm cabana.",
        specs: ["Custom Travertine Sinks", "Aromatherapy Steam Unit", "Heated Anti-Fog Mirrors"]
      }
    ],
    amenities: ["Mega-Yacht Private Dock", "Resort Lagoon Pool", "Outdoor Teppanyaki Kitchen", "Full Tennis Court", "Staff Quarters"]
  },
  {
    id: "alpine-ridge",
    title: "Alpine Ridge Mountain Estate",
    price: "$16,400,000",
    numericPrice: 16400000,
    location: "Aspen, Colorado",
    beds: 5,
    baths: 6,
    sqft: "7,900 sq ft",
    badge: "Alpine Luxury",
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "Nestled into the Aspen slopes with direct ski-in/ski-out access, this alpine chalet combines heavy timber framing, reclaimed stone fireplaces, and heated glass technology.",
    rooms: [
      {
        name: "Heated Alpine Chalet Bedroom",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        desc: "Custom cedar beams with plush wool carpeting, double-sided stone hearth, and heated panoramic mountain viewing glass.",
        specs: ["Double-Sided Stone Fireplace", "Reclaimed Timber Ceilings", "Motorized Thermal Drapes"]
      },
      {
        name: "Great Timber Living Hall",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        desc: "Expansive 30-foot cathedral ceilings with floor-to-ceiling glass framing snow-capped peaks and deep leather seating.",
        specs: ["Hand-Carved Stone Chimney", "Custom Rustic Oak Furniture", "Integrated Ambient Hearth"]
      },
      {
        name: "Gourmet Ski Lodge Kitchen",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        desc: "Warm walnut kitchen joinery with leathered granite counters and professional-grade Wolf range equipment.",
        specs: ["Leathered Granite Counters", "Commercial Wolf Range", "Heated Slate Floor Tiles"]
      },
      {
        name: "Mountain View Thermal Spa",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        desc: "Features a sunken cedar hot tub, cold plunge pool, and floor-to-ceiling windows looking out over pine forests.",
        specs: ["Sunken Cedar Hot Tub", "Cold Plunge System", "Nordic Spruce Sauna"]
      }
    ],
    amenities: ["Ski-In/Ski-Out Trail", "Heated Driveway & Terraces", "Nordic Spa & Cold Plunge", "Heated 4-Car Garage", "Boot Warmers & Gear Vault"]
  },
  {
    id: "palazzo-serena",
    title: "Palazzo Serena Mediterranean Manor",
    price: "$19,800,000",
    numericPrice: 19800000,
    location: "Palm Beach, Florida",
    beds: 6,
    baths: 8,
    sqft: "10,500 sq ft",
    badge: "European Elegance",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "An authentic Italian-inspired Mediterranean villa featuring hand-carved limestone colonnades, terracotta courtyards, fountain gardens, and modern luxury interior craftsmanship.",
    rooms: [
      {
        name: "Tuscan Master Chamber",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        desc: "Vaulted ceilings with imported Italian frescoes, hand-loomed silk rugs, and french doors opening onto private rose loggias.",
        specs: ["Antique Terra Cotta Flooring", "Hand-Painted Fresco Accents", "Private Fountain Courtyard Access"]
      },
      {
        name: "Grand Classical Salon",
        image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
        desc: "Handmade Venetian plaster walls, antique brass chandeliers, and arched windows providing natural courtyard lighting.",
        specs: ["Venetian Plaster Walls", "Imported Murano Chandelier", "Carved Limestone Mantle"]
      },
      {
        name: "Villa Estate Open Kitchen",
        image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
        desc: "Custom cream cabinetry with brass handles, marble counters, and an adjoining indoor-outdoor breakfast loggia.",
        specs: ["La Cornue French Range", "Carrara Marble Surfaces", "Outdoor Brick Pizza Oven"]
      },
      {
        name: "Roman Marble Bath",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
        desc: "An oversized Roman-style sunken marble bath surrounded by classical columns and polished brass fixtures.",
        specs: ["Sunken Roman Marble Bath", "Polished Unlacquered Brass", "Herringbone Mosaic Walls"]
      }
    ],
    amenities: ["Fountain Courtyard", "Olimpic-Length Pool", "Private Wine Cellar", "Tennis Pavilion", "Covered Summer Loggias"]
  },
  {
    id: "skyline-monolith",
    title: "The Skyline Monolith Villa",
    price: "$23,500,000",
    numericPrice: 23500000,
    location: "Hollywood Hills, California",
    beds: 5,
    baths: 7,
    sqft: "9,100 sq ft",
    badge: "Contemporary Modern",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    intro: "A cliffside contemporary masterpiece offering 270-degree panoramic views of the city skyline. Crafted using black titanium, exposed board-formed concrete, and illuminated water walls.",
    rooms: [
      {
        name: "Panoramic Master Suite",
        image: "https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80",
        desc: "Wraparound glass walls framing downtown city lights with floating headboard lighting and private cantilevered balcony.",
        specs: ["Smoked Oak Flooring", "Motorized Dual Skylights", "Glass Horizon Balcony"]
      },
      {
        name: "Minimalist Infinity Living Room",
        image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
        desc: "A sleek living lounge flush with the exterior zero-edge pool, creating a continuous reflection of the sky.",
        specs: ["Flush Pool Glass Dividers", "Recessed Cove Lighting", "Custom Italian Sectionals"]
      },
      {
        name: "Titanium Kitchen Island",
        image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80",
        desc: "Sculptural black titanium center island with concealed touch-to-open cabinets and integrated induction cooking.",
        specs: ["Brushed Black Titanium", "Concealed Smart Storage", "Integrated Miele Systems"]
      },
      {
        name: "Skyline Glass Bath",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
        desc: "Features a modern black quartz soaking tub overlooking the city lights below through one-way privacy glass.",
        specs: ["Black Quartz Soaking Tub", "City Skyline Views", "Integrated Vanity Screen"]
      }
    ],
    amenities: ["Suspended Infinity Pool", "Rooftop Helipad", "Subterranean Cinema", "Motorized Glass Walls", "Smart Climate Zones"]
  }
];

/* ==========================================================================
   3. HOME PAGE PROPERTIES
   ========================================================================== */
const properties = [
  {
    id: 1,
    portfolioId: "villa-lumina",
    title: "Villa Aegina Cliffside Palace",
    type: "Villa",
    priceFormatted: "$16,500,000",
    location: "Oia, Santorini, Greece",
    beds: 5,
    baths: 6,
    sqft: "7,800 sq ft",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    portfolioId: "palazzo-serena",
    title: "Villa Bellagio Lakefront Haven",
    type: "Villa",
    priceFormatted: "$24,000,000",
    location: "Lake Como, Lombardy, Italy",
    beds: 7,
    baths: 8,
    sqft: "11,500 sq ft",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    portfolioId: "villa-lumina",
    title: "The Positano Horizon Estate",
    type: "Villa",
    priceFormatted: "$19,200,000",
    location: "Amalfi Coast, Campania, Italy",
    beds: 6,
    baths: 7,
    sqft: "8,900 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    portfolioId: "alpine-ridge",
    title: "Matterhorn Peak Chalet",
    type: "Villa",
    priceFormatted: "$15,800,000",
    location: "Zermatt, Swiss Alps, Switzerland",
    beds: 5,
    baths: 6,
    sqft: "8,200 sq ft",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    portfolioId: "villa-paradiso",
    title: "Ayana Sanctuary Tropical Estate",
    type: "Villa",
    priceFormatted: "$11,500,000",
    location: "Uluwatu, Bali, Indonesia",
    beds: 6,
    baths: 7,
    sqft: "9,600 sq ft",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    portfolioId: "skyline-monolith",
    title: "Palm Jumeirah Crown Mansion",
    type: "Mansion",
    priceFormatted: "$28,500,000",
    location: "The Palm, Dubai, UAE",
    beds: 8,
    baths: 10,
    sqft: "14,200 sq ft",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  }
];

let favoriteIds = [];

/* ==========================================================================
   4. CURRENCY & LOAN STATE
   ========================================================================== */
let activeCurrency = {
  code: "USD",
  symbol: "$",
  rate: 1.0
};
let selectedLoanTenure = 30;

/* ==========================================================================
   5. THEME TOGGLE
   ========================================================================== */
function toggleThemeMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('luxevista_theme', newTheme);

  updateThemeIcon(newTheme);
  updateMortgageStudio();
  showToast(`Theme switched to ${newTheme === 'dark' ? 'Onyx Dark' : 'Bright Marble'} Mode.`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('luxevista_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

/* ==========================================================================
   6. PAGE NAVIGATION & REAL-TIME 3D MORPHING
   ========================================================================== */
let currentActive3DScene = 'home';

function navigateTo(pageId) {
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const activeNav = Array.from(document.querySelectorAll('.nav-item')).find(a => 
    a.getAttribute('onclick') && a.getAttribute('onclick').includes(pageId)
  );
  if (activeNav) activeNav.classList.add('active');

  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('active');

  // Trigger 3D Background Morph
  currentActive3DScene = pageId;
  switch3DScene(pageId);
}

/* ==========================================================================
   7. WISHLIST & FAVORITES
   ========================================================================== */
function toggleFavorite(id, event) {
  event.stopPropagation();
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter(favId => favId !== id);
    showToast("Removed from your saved luxury portfolio.");
  } else {
    favoriteIds.push(id);
    showToast("Added to your private saved portfolio!");
  }

  updateFavoritesBadge();
  renderHomeProperties();
  renderAllProperties();
  renderPortfolioVillas();
}

function updateFavoritesBadge() {
  const badge = document.getElementById('favBadge');
  if (badge) badge.innerText = favoriteIds.length;
}

function openFavoritesModal() {
  renderFavoritesList();
  const modal = document.getElementById('favModal');
  modal.classList.add('active');
}

function closeFavoritesModal() {
  const modal = document.getElementById('favModal');
  modal.classList.remove('active');
}

function removeFavoriteItem(id) {
  favoriteIds = favoriteIds.filter(favId => favId !== id);
  updateFavoritesBadge();
  renderFavoritesList();
  renderHomeProperties();
  renderAllProperties();
  renderPortfolioVillas();
  showToast("Property removed from wishlist.");
}

function renderFavoritesList() {
  const container = document.getElementById('favModalList');
  const subtitle = document.getElementById('favModalCountSubtitle');

  subtitle.innerText = `${favoriteIds.length} residence(s) curated in your private wishlist`;

  if (favoriteIds.length === 0) {
    container.innerHTML = `
      <div class="fav-empty-state">
        <i class="fa-regular fa-heart"></i>
        <h4>Your Wishlist is Empty</h4>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem;">Explore our Masterpiece Villa Collection and save your preferred architectural residences.</p>
        <button class="btn-gold" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;" onclick="closeFavoritesModal(); navigateTo('portfolio');">
          <i class="fa-solid fa-gem"></i> Explore Portfolio
        </button>
      </div>
    `;
    return;
  }

  const allAvailableItems = [
    ...properties.map(p => ({
      id: p.id,
      title: p.title,
      location: p.location,
      price: p.priceFormatted,
      image: p.image,
      portfolioId: p.portfolioId || "villa-lumina"
    })),
    ...portfolioVillas.map(v => ({
      id: v.id,
      title: v.title,
      location: v.location,
      price: v.price,
      image: v.heroImage,
      portfolioId: v.id
    }))
  ];

  const uniqueSaved = [];
  favoriteIds.forEach(id => {
    const item = allAvailableItems.find(x => x.id === id);
    if (item && !uniqueSaved.some(u => u.id === item.id)) {
      uniqueSaved.push(item);
    }
  });

  container.innerHTML = uniqueSaved.map(item => `
    <div class="fav-item-card">
      <div class="fav-item-img">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="fav-item-info">
        <h4>${item.title}</h4>
        <p class="fav-item-loc"><i class="fa-solid fa-location-dot" style="color: var(--accent);"></i> ${item.location}</p>
        <div class="fav-item-price">${item.price}</div>
      </div>
      <div class="fav-item-actions">
        <button class="btn-fav-remove" title="Remove from wishlist" onclick="removeFavoriteItem('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="btn-gold" style="padding: 0.4rem 0.6rem; font-size: 0.75rem;" onclick="closeFavoritesModal(); openVillaDetail('${item.portfolioId}')">
          View
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. MORTGAGE STUDIO LOGIC
   ========================================================================== */
function setCalcCurrency(code, symbol, rate, btnElement) {
  document.querySelectorAll('.currency-pill').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');

  activeCurrency = { code, symbol, rate };
  document.querySelectorAll('.curr-sym').forEach(el => el.innerText = symbol);

  updateMortgageStudio();
  showToast(`Currency changed to ${code} (${symbol})`);
}

function setLoanTenure(years, btnElement) {
  document.querySelectorAll('.tenure-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
  selectedLoanTenure = years;
  updateMortgageStudio();
}

function toggleCalcAdvanced(headerElem) {
  const box = headerElem.parentElement;
  box.classList.toggle('open');
}

function resetCalculatorDefaults() {
  document.getElementById('calcPriceRange').value = 14850000;
  document.getElementById('calcDownRange').value = 25;
  document.getElementById('calcRateRange').value = 5.85;
  document.getElementById('calcTaxRateInput').value = 1.15;
  document.getElementById('calcInsuranceInput').value = 28000;
  document.getElementById('calcHoaInput').value = 3500;
  selectedLoanTenure = 30;

  document.querySelectorAll('.tenure-btn').forEach((b, i) => {
    b.classList.toggle('active', i === 2);
  });

  updateMortgageStudio();
  showToast("Mortgage studio parameters reset to default.");
}

function formatMoney(amount) {
  const converted = amount * activeCurrency.rate;
  return `${activeCurrency.symbol}${Math.round(converted).toLocaleString()}`;
}

function updateMortgageStudio() {
  const priceRange = document.getElementById('calcPriceRange');
  if (!priceRange) return;

  const basePrice = parseFloat(priceRange.value);
  const downPct = parseFloat(document.getElementById('calcDownRange').value);
  const interestRate = parseFloat(document.getElementById('calcRateRange').value);
  const taxRate = parseFloat(document.getElementById('calcTaxRateInput').value) || 1.15;
  const annualInsurance = parseFloat(document.getElementById('calcInsuranceInput').value) || 0;
  const monthlyHOA = parseFloat(document.getElementById('calcHoaInput').value) || 0;

  const downPaymentAmount = basePrice * (downPct / 100);
  const loanPrincipal = basePrice - downPaymentAmount;

  const monthlyInterestRate = (interestRate / 100) / 12;
  const totalMonths = selectedLoanTenure * 12;

  const monthlyPI = (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
                    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  
  const monthlyTaxes = (basePrice * (taxRate / 100)) / 12;
  const monthlyIns = annualInsurance / 12;
  const totalMonthlyOutlay = monthlyPI + monthlyTaxes + monthlyIns + monthlyHOA;

  const lifetimePI = monthlyPI * totalMonths;
  const totalInterestLifetime = lifetimePI - loanPrincipal;

  document.getElementById('calcPriceVal').innerText = formatMoney(basePrice);
  document.getElementById('calcDownPercentLabel').innerText = `${downPct}%`;
  document.getElementById('calcDownAmountVal').innerText = formatMoney(downPaymentAmount);
  document.getElementById('calcRateVal').innerText = `${interestRate.toFixed(2)}%`;

  document.getElementById('resTotalMonthly').innerText = formatMoney(totalMonthlyOutlay);
  document.getElementById('resPI').innerText = formatMoney(monthlyPI);
  document.getElementById('resTaxes').innerText = formatMoney(monthlyTaxes);
  document.getElementById('resInsurance').innerText = formatMoney(monthlyIns);
  document.getElementById('resHOA').innerText = formatMoney(monthlyHOA);

  document.getElementById('resLoanAmount').innerText = formatMoney(loanPrincipal);
  document.getElementById('resTotalInterest').innerText = formatMoney(totalInterestLifetime);
  document.getElementById('resTotalLoanCost').innerText = formatMoney(lifetimePI);

  const piPct = (monthlyPI / totalMonthlyOutlay) * 100;
  const taxPct = (monthlyTaxes / totalMonthlyOutlay) * 100;
  const insPct = (monthlyIns / totalMonthlyOutlay) * 100;
  const hoaPct = (monthlyHOA / totalMonthlyOutlay) * 100;

  const deg1 = piPct;
  const deg2 = deg1 + taxPct;
  const deg3 = deg2 + insPct;

  const donut = document.getElementById('calcDonutChart');
  if (donut) {
    donut.style.background = `conic-gradient(
      var(--accent) 0% ${deg1}%,
      #3b82f6 ${deg1}% ${deg2}%,
      #10b981 ${deg2}% ${deg3}%,
      #a855f7 ${deg3}% 100%
    )`;
    document.getElementById('donutLoanRatio').innerText = `${Math.round(100 - downPct)}%`;
  }

  generateAmortizationSchedule(loanPrincipal, monthlyInterestRate, monthlyPI, selectedLoanTenure);
}

function generateAmortizationSchedule(principal, monthlyRate, monthlyPayment, years) {
  const tbody = document.getElementById('amortizationTableBody');
  if (!tbody) return;

  let balance = principal;
  let html = '';
  let cumulativePrincipal = 0;

  for (let year = 1; year <= years; year++) {
    let yearInterest = 0;
    let yearPrincipal = 0;

    for (let month = 1; month <= 12; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      
      yearInterest += interestPayment;
      yearPrincipal += principalPayment;
      balance = Math.max(0, balance - principalPayment);
    }

    cumulativePrincipal += yearPrincipal;
    const annualTotalPayment = yearPrincipal + yearInterest;

    html += `
      <tr>
        <td><strong>Year ${year}</strong></td>
        <td>${formatMoney(annualTotalPayment)}</td>
        <td style="color: #10b981;">+${formatMoney(yearPrincipal)}</td>
        <td style="color: #ef4444;">${formatMoney(yearInterest)}</td>
        <td><strong>${formatMoney(balance)}</strong></td>
        <td><span style="background: rgba(212,175,55,0.15); color: var(--accent); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 700;">${formatMoney(cumulativePrincipal)}</span></td>
      </tr>
    `;
  }

  tbody.innerHTML = html;
}

function showAmortizationSchedule() {
  const wrapper = document.getElementById('amortizationWrapper');
  wrapper.classList.toggle('active');
  if (wrapper.classList.contains('active')) {
    wrapper.scrollIntoView({ behavior: 'smooth' });
    showToast("Amortization schedule loaded.");
  }
}

function openMortgagePreApproval() {
  navigateTo('consultation');
  showToast("Financing parameters pre-filled! Please select your appointment date.");
}

function printMortgageSummary() {
  window.print();
}

/* ==========================================================================
   9. DATA RENDERING & CONSULTATION
   ========================================================================== */
function renderAdvisors(dataToRender = eliteAdvisors) {
  const grid = document.getElementById('advisorsGrid');
  if (!grid) return;

  grid.innerHTML = dataToRender.map(adv => `
    <div class="advisor-card">
      <div class="advisor-img-wrap">
        <img src="${adv.image}" alt="${adv.name}" loading="lazy">
        <span class="advisor-region-tag">${adv.region}</span>
        <span class="advisor-vol-badge"><i class="fa-solid fa-gem"></i> ${adv.volume}</span>
      </div>
      <div class="advisor-card-body">
        <h4>${adv.name}</h4>
        <div class="advisor-role">${adv.role}</div>
        <p class="advisor-bio">${adv.bio}</p>
        
        <ul class="advisor-meta-list">
          <li><span>Jurisdiction:</span> <strong>${adv.jurisdiction}</strong></li>
          <li><span>Portfolio:</span> <strong>${adv.activeListings}</strong></li>
          <li><span>Languages:</span> <strong>${adv.languages}</strong></li>
        </ul>

        <div class="advisor-actions">
          <button class="btn-book-advisor" onclick="bookDirectAdvisor('${adv.name}')">
            <i class="fa-solid fa-key"></i> Request Private Access
          </button>
          <a href="mailto:vip@luxevista.com?subject=Private Briefing with ${encodeURIComponent(adv.name)}" class="advisor-contact-icon" title="Direct Encrypted Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterAdvisors(region, btnElement) {
  document.querySelectorAll('.advisor-tab').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');

  if (region === 'all') {
    renderAdvisors(eliteAdvisors);
  } else {
    const filtered = eliteAdvisors.filter(a => a.region === region);
    renderAdvisors(filtered);
  }
}

function bookDirectAdvisor(advisorName) {
  navigateTo('consultation');
  const advisorSelect = document.getElementById('consultAdvisorSelect');
  if (advisorSelect) {
    for (let i = 0; i < advisorSelect.options.length; i++) {
      if (advisorSelect.options[i].text.includes(advisorName)) {
        advisorSelect.selectedIndex = i;
        break;
      }
    }
  }
  showToast(`Advisor Selected: ${advisorName}.`);
}

function updateConsultationPreview() {
  const selectElem = document.getElementById('consultVillaSelect');
  if (!selectElem) return;
  
  const selectedId = selectElem.value;
  const villa = portfolioVillas.find(v => v.id === selectedId) || portfolioVillas[0];

  document.getElementById('previewVillaImg').src = villa.heroImage;
  document.getElementById('previewVillaTitle').innerText = villa.title;
  document.getElementById('previewVillaLoc').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${villa.location}`;
  document.getElementById('previewVillaPrice').innerText = villa.price;
  document.getElementById('previewVillaSpecs').innerHTML = `
    <span><i class="fa-solid fa-bed"></i> ${villa.beds} Beds</span>
    <span><i class="fa-solid fa-bath"></i> ${villa.baths} Baths</span>
    <span><i class="fa-solid fa-ruler-combined"></i> ${villa.sqft}</span>
  `;
}

function handleConsultationSubmit(e) {
  e.preventDefault();
  const tourType = document.querySelector('input[name="tourType"]:checked').value;
  const date = document.getElementById('consultDate').value;
  const clientName = document.getElementById('consultClientName').value;
  const advisorName = document.getElementById('consultAdvisorSelect').value;

  showToast(`Private Access Authorized! ${advisorName} reserved for ${tourType} on ${date} for ${clientName}.`);
  e.target.reset();
  updateConsultationPreview();
}

function renderPortfolioVillas() {
  const grid = document.getElementById('portfolioVillasGrid');
  if (!grid) return;

  grid.innerHTML = portfolioVillas.map(villa => {
    const isFav = favoriteIds.includes(villa.id);
    return `
      <div class="portfolio-card" onclick="openVillaDetail('${villa.id}')">
        <div class="port-img-wrap">
          <img src="${villa.heroImage}" alt="${villa.title}" loading="lazy">
          <span class="port-badge">${villa.badge}</span>
          <button class="fav-heart-btn ${isFav ? 'liked' : ''}" onclick="toggleFavorite('${villa.id}', event)">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        <div class="port-card-body">
          <div class="port-card-price">${villa.price}</div>
          <h3 class="port-card-title">${villa.title}</h3>
          <p class="port-card-loc">
            <i class="fa-solid fa-location-dot" style="color: var(--accent);"></i> ${villa.location}
          </p>
          <div class="card-specs" style="margin-bottom: 1.2rem;">
            <span><i class="fa-solid fa-bed"></i> ${villa.beds} Beds</span>
            <span><i class="fa-solid fa-bath"></i> ${villa.baths} Baths</span>
            <span><i class="fa-solid fa-ruler-combined"></i> ${villa.sqft}</span>
          </div>
          <div class="port-btn-explore">
            <span>Explore Room Decor & Walkthrough</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openVillaDetail(villaId) {
  const villa = portfolioVillas.find(v => v.id === villaId);
  if (!villa) return;

  const container = document.getElementById('villaDetailContent');
  container.innerHTML = `
    <div class="villa-hero-header">
      <div class="villa-hero-title">
        <span class="subtitle-badge">${villa.badge}</span>
        <h1>${villa.title}</h1>
        <p><i class="fa-solid fa-location-dot" style="color: var(--accent);"></i> ${villa.location}</p>
      </div>
      <div>
        <div class="villa-hero-price">${villa.price}</div>
        <p style="color: var(--text-muted); text-align: right; font-size: 0.9rem;">Turnkey Fully Furnished</p>
      </div>
    </div>

    <div class="villa-gallery-grid">
      <div class="gallery-main-img">
        <img src="${villa.heroImage}" alt="${villa.title}">
      </div>
      <div class="gallery-sub-img">
        <img src="${villa.gallery[0]}" alt="Gallery Image 1">
      </div>
      <div class="gallery-sub-img">
        <img src="${villa.gallery[1]}" alt="Gallery Image 2">
      </div>
    </div>

    <div style="max-width: 900px; margin: 0 auto 3.5rem auto; text-align: center;">
      <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 1rem;">Architectural Overview</h3>
      <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.8;">${villa.intro}</p>
    </div>

    <div class="section-title-wrapper" style="margin-bottom: 2.5rem;">
      <span class="subtitle-badge">Interior Aesthetics</span>
      <h2 class="section-title" style="font-size: 2.2rem;">Room Decoration & Luxury Finishes</h2>
      <p class="section-desc">Every room is curated with custom furnishings, architectural lighting, and imported finishes.</p>
    </div>

    <div class="rooms-decor-grid">
      ${villa.rooms.map(room => `
        <div class="room-card">
          <div class="room-card-img">
            <img src="${room.image}" alt="${room.name}">
          </div>
          <div class="room-card-body">
            <h4><i class="fa-solid fa-couch" style="color: var(--accent);"></i> ${room.name}</h4>
            <p>${room.desc}</p>
            <ul class="decor-specs-list">
              ${room.specs.map(spec => `
                <li><i class="fa-solid fa-circle-check"></i> ${spec}</li>
              `).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="villa-details-bottom">
      <div>
        <h3 style="font-size: 1.6rem; color: var(--primary); margin-bottom: 1rem;">Signature Amenities</h3>
        <div class="amenities-tag-cloud">
          ${villa.amenities.map(amenity => `
            <div class="amenity-chip">
              <i class="fa-solid fa-star"></i> ${amenity}
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background: var(--bg-card-subtle); padding: 1.8rem; border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border-color);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem; font-size: 1.2rem;">Ready to Experience this Estate?</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">Book your custom walkthrough date with our partner advisory desk.</p>
        <button class="btn-gold" style="width: 100%; justify-content: center;" onclick="navigateTo('consultation')">
          <i class="fa-solid fa-key"></i> Request Private Access For This Villa
        </button>
      </div>
    </div>
  `;

  navigateTo('villa-detail');
}

function createPropertyCardHTML(item) {
  const isFav = favoriteIds.includes(item.id);
  return `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="badge-tag">${item.type}</span>
        <button class="fav-heart-btn ${isFav ? 'liked' : ''}" onclick="toggleFavorite(${item.id}, event)">
          <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${item.priceFormatted}</div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-location">
          <i class="fa-solid fa-location-dot" style="color: var(--accent);"></i> ${item.location}
        </div>
        <div class="card-specs">
          <span><i class="fa-solid fa-bed"></i> ${item.beds} Beds</span>
          <span><i class="fa-solid fa-bath"></i> ${item.baths} Baths</span>
          <span><i class="fa-solid fa-ruler-combined"></i> ${item.sqft}</span>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn-view-details" onclick="navigateTo('portfolio')">View in Villa Portfolio</button>
      </div>
    </div>
  `;
}

function renderHomeProperties() {
  const homeGrid = document.getElementById('homeFeaturedGrid');
  if (!homeGrid) return;
  homeGrid.innerHTML = properties.map(createPropertyCardHTML).join('');
}

function renderAllProperties() {
  const grid = document.getElementById('allPropertiesGrid');
  if (!grid) return;
  grid.innerHTML = properties.map(createPropertyCardHTML).join('');
}

function applyPropertyFilters() {
  const query = document.getElementById('propSearchInput').value.toLowerCase();
  const type = document.getElementById('propTypeSelect').value;
  const beds = document.getElementById('propBedsSelect').value;

  let filtered = properties.filter(p => {
    const matchesQuery = p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query);
    const matchesType = (type === 'all') || (p.type === type);
    const matchesBeds = (beds === 'all') || (p.beds >= parseInt(beds));
    return matchesQuery && matchesType && matchesBeds;
  });

  const grid = document.getElementById('allPropertiesGrid');
  if (grid) grid.innerHTML = filtered.map(createPropertyCardHTML).join('');
}

function executeHomeSearch() {
  navigateTo('properties');
}

function setSearchTab(tabName, btnElement) {
  document.querySelectorAll('.search-tab').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
  showToast(`Filter set to: ${tabName.toUpperCase()}`);
}

function toggleFaq(headerElem) {
  headerElem.parentElement.classList.toggle('open');
}

function handleGeneralContactSubmit(e) {
  e.preventDefault();
  showToast("Thank you! Your message has been sent to our corporate advisory team.");
  e.target.reset();
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent);"></i> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

/* ==========================================================================
   10. ULTRA-HD MULTI-SCENE 3D WEBGL RENDER ENGINE
   ========================================================================== */
let globalScene, globalCamera, globalRenderer;
let sceneGroups = {};
let mousePos = { x: 0, y: 0, targetX: 0, targetY: 0 };

function initGlobalUltraHD3DEngine() {
  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('luxuryGlobal3DCanvas');
  if (!canvas) return;

  globalScene = new THREE.Scene();
  globalCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  globalCamera.position.z = 30;

  globalRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  globalRenderer.setSize(window.innerWidth, window.innerHeight);
  globalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Ambient & Dynamic Point Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  globalScene.add(ambientLight);

  const goldLight = new THREE.PointLight(0xffdf78, 2.5, 100);
  goldLight.position.set(10, 20, 25);
  globalScene.add(goldLight);

  // --- SCENE 1: HOME (3D Flowing Gold Silk Waves & Stardust) ---
  const homeGroup = new THREE.Group();
  const waveGeo = new THREE.PlaneGeometry(80, 50, 50, 50);
  const waveMat = new THREE.MeshPhongMaterial({
    color: 0xd4af37,
    wireframe: true,
    transparent: true,
    opacity: 0.28,
    shininess: 90
  });
  const wavePlane = new THREE.Mesh(waveGeo, waveMat);
  wavePlane.rotation.x = -Math.PI / 2.6;
  wavePlane.position.set(0, -10, -5);
  homeGroup.add(wavePlane);

  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(200 * 3);
  for (let i = 0; i < 200 * 3; i += 3) {
    dustPos[i] = (Math.random() - 0.5) * 80;
    dustPos[i+1] = (Math.random() - 0.5) * 50;
    dustPos[i+2] = (Math.random() - 0.5) * 40;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustPoints = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.55, color: 0xffe27a, transparent: true, opacity: 0.7 }));
  homeGroup.add(dustPoints);
  globalScene.add(homeGroup);
  sceneGroups['home'] = { group: homeGroup, update: (t) => {
    const pos = waveGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      pos.setZ(i, Math.sin(u * 0.2 + t) * Math.cos(v * 0.2 + t) * 3.2);
    }
    pos.needsUpdate = true;
    dustPoints.rotation.y = t * 0.05;
  }};

  // --- SCENE 2: PORTFOLIO (3D Floating Architectural Crystals) ---
  const portGroup = new THREE.Group();
  const crystalEdges = new THREE.EdgesGeometry(new THREE.OctahedronGeometry(3.5, 0));
  for (let i = 0; i < 18; i++) {
    const crystal = new THREE.LineSegments(crystalEdges, new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 }));
    crystal.position.set((Math.random() - 0.5) * 55, (Math.random() - 0.5) * 35, (Math.random() - 0.5) * 30);
    crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    portGroup.add(crystal);
  }
  portGroup.visible = false;
  globalScene.add(portGroup);
  sceneGroups['portfolio'] = { group: portGroup, update: () => {
    portGroup.rotation.y += 0.003;
    portGroup.rotation.x += 0.002;
  }};

  // --- SCENE 3: VILLA DETAIL (3D Gold Nebula Dust Vortex) ---
  const detailGroup = new THREE.Group();
  const vortexGeo = new THREE.BufferGeometry();
  const vortexPos = new Float32Array(350 * 3);
  for (let i = 0; i < 350 * 3; i += 3) {
    const angle = Math.random() * Math.PI * 2;
    const rad = Math.random() * 25 + 5;
    vortexPos[i] = Math.cos(angle) * rad;
    vortexPos[i+1] = (Math.random() - 0.5) * 30;
    vortexPos[i+2] = Math.sin(angle) * rad;
  }
  vortexGeo.setAttribute('position', new THREE.BufferAttribute(vortexPos, 3));
  const vortexPoints = new THREE.Points(vortexGeo, new THREE.PointsMaterial({ size: 0.6, color: 0xffd700, transparent: true, opacity: 0.7 }));
  detailGroup.add(vortexPoints);
  detailGroup.visible = false;
  globalScene.add(detailGroup);
  sceneGroups['villa-detail'] = { group: detailGroup, update: () => {
    vortexPoints.rotation.y += 0.005;
  }};

  // --- SCENE 4: PRIVATE ACCESS (3D Gyroscopic VIP Vault Rings) ---
  const consultGroup = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(12 + i * 2.5, 0.15, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true, transparent: true, opacity: 0.3 })
    );
    consultGroup.add(ring);
  }
  const coreMesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry(7, 1),
    new THREE.MeshBasicMaterial({ color: 0xfff0ad, wireframe: true, transparent: true, opacity: 0.4 })
  );
  consultGroup.add(coreMesh);
  consultGroup.visible = false;
  globalScene.add(consultGroup);
  sceneGroups['consultation'] = { group: consultGroup, update: () => {
    consultGroup.children[0].rotation.x += 0.005;
    consultGroup.children[1].rotation.y += 0.007;
    consultGroup.children[2].rotation.z += 0.006;
    coreMesh.rotation.x -= 0.009;
  }};

  // --- SCENE 5: PROPERTIES (3D Global Hologram Coordinate Globe) ---
  const propGroup = new THREE.Group();
  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(18, 28, 28),
    new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true, transparent: true, opacity: 0.25 })
  );
  globe.position.set(12, 0, -5);
  propGroup.add(globe);
  propGroup.visible = false;
  globalScene.add(propGroup);
  sceneGroups['properties'] = { group: propGroup, update: () => {
    globe.rotation.y += 0.004;
  }};

  // --- SCENE 6: MORTGAGE STUDIO (3D Quantum Financial Sine Matrix) ---
  const calcGroup = new THREE.Group();
  const gridGeo = new THREE.PlaneGeometry(80, 50, 40, 30);
  const gridTerrain = new THREE.Mesh(gridGeo, new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true, transparent: true, opacity: 0.28 }));
  gridTerrain.rotation.x = -Math.PI / 2.7;
  gridTerrain.position.set(0, -8, -5);
  calcGroup.add(gridTerrain);
  calcGroup.visible = false;
  globalScene.add(calcGroup);
  sceneGroups['calculator'] = { group: calcGroup, update: (t) => {
    const pos = gridGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setZ(i, Math.sin(pos.getX(i) * 0.25 + t * 2) * 2.5);
    }
    pos.needsUpdate = true;
  }};

  // --- SCENE 7: ABOUT US (3D Concentric Heritage Astrolabe Rings) ---
  const aboutGroup = new THREE.Group();
  for (let r = 7; r <= 22; r += 5) {
    const ringMesh = new THREE.Mesh(
      new THREE.RingGeometry(r, r + 0.2, 64),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, side: THREE.DoubleSide, transparent: true, opacity: 0.35 })
    );
    aboutGroup.add(ringMesh);
  }
  aboutGroup.visible = false;
  globalScene.add(aboutGroup);
  sceneGroups['about'] = { group: aboutGroup, update: () => {
    aboutGroup.children.forEach((r, idx) => {
      r.rotation.x += 0.003 * (idx + 1);
      r.rotation.y += 0.004 * (idx + 1);
    });
  }};

  // --- SCENE 8: ADVISORS COUNCIL (3D Neural Constellation Network) ---
  const agentGroup = new THREE.Group();
  const agentGeo = new THREE.BufferGeometry();
  const agentPos = new Float32Array(70 * 3);
  for (let i = 0; i < 70 * 3; i += 3) {
    agentPos[i] = (Math.random() - 0.5) * 55;
    agentPos[i+1] = (Math.random() - 0.5) * 40;
    agentPos[i+2] = (Math.random() - 0.5) * 35;
  }
  agentGeo.setAttribute('position', new THREE.BufferAttribute(agentPos, 3));
  const agentNodes = new THREE.Points(agentGeo, new THREE.PointsMaterial({ color: 0xffd700, size: 1.1 }));
  agentGroup.add(agentNodes);
  agentGroup.visible = false;
  globalScene.add(agentGroup);
  sceneGroups['agents'] = { group: agentGroup, update: () => {
    agentGroup.rotation.y += 0.003;
  }};

  // --- SCENE 9: CONTACT (3D Holographic Beacon Transmitter) ---
  const contactGroup = new THREE.Group();
  const radarTorus = new THREE.Mesh(
    new THREE.TorusGeometry(15, 0.15, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 })
  );
  radarTorus.position.set(10, 0, -5);
  contactGroup.add(radarTorus);
  contactGroup.visible = false;
  globalScene.add(contactGroup);
  sceneGroups['contact'] = { group: contactGroup, update: () => {
    radarTorus.rotation.x += 0.015;
    radarTorus.rotation.y += 0.012;
  }};

  // Mouse Physics
  window.addEventListener('mousemove', (e) => {
    mousePos.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('resize', () => {
    globalCamera.aspect = window.innerWidth / window.innerHeight;
    globalCamera.updateProjectionMatrix();
    globalRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  // 60 FPS Master Render Loop
  let clock = new THREE.Clock();
  function renderLoop() {
    const elapsed = clock.getElapsedTime();

    // Smooth Mouse Camera Parallax
    mousePos.x += (mousePos.targetX - mousePos.x) * 0.06;
    mousePos.y += (mousePos.targetY - mousePos.y) * 0.06;
    globalCamera.position.x = mousePos.x * 4;
    globalCamera.position.y = mousePos.y * 3;
    globalCamera.lookAt(0, 0, 0);

    // Update Active Scene
    if (sceneGroups[currentActive3DScene]) {
      sceneGroups[currentActive3DScene].update(elapsed);
    }

    globalRenderer.render(globalScene, globalCamera);
    requestAnimationFrame(renderLoop);
  }
  renderLoop();
}

function switch3DScene(targetId) {
  Object.keys(sceneGroups).forEach(id => {
    if (sceneGroups[id] && sceneGroups[id].group) {
      sceneGroups[id].group.visible = (id === targetId);
    }
  });
}

/* ==========================================================================
   11. INITIAL RUN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const datePicker = document.getElementById('consultDate');
  if (datePicker) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    datePicker.value = tomorrow.toISOString().split('T')[0];
  }

  renderPortfolioVillas();
  renderHomeProperties();
  renderAllProperties();
  renderAdvisors();
  updateMortgageStudio();
  updateConsultationPreview();
  updateFavoritesBadge();

  // Launch Master 3D Engine
  initGlobalUltraHD3DEngine();
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});