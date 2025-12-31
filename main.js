window.promoDiscount = window.promoDiscount || 0;


function formatPrice(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// Product Data 
const products = {
  men: [
    {
      id: 1,
      name: "Heritage Automatic Silver",
      category: "men",
      subcategory: "automatic",
      price: 12500,
      originalPrice: 15000,
      discount: 17,
      image: "images/luxury-automatic-watch-silver.jpg",
      description:
        "A masterpiece of horological engineering featuring a self-winding mechanical movement with 42-hour power reserve. The sapphire crystal caseback reveals the intricate craftsmanship of the decorated movement.",
      specs: [
        "Movement: Automatic",
        "Case: 40mm Stainless Steel",
        "Water Resistance: 100m",
        "Crystal: Sapphire",
        "Strap: Alligator Leather",
      ],
      rating: 4.8,
      reviewCount: 124,
      reviews: [
        {
          author: "James Mitchell",
          rating: 5,
          date: "2025-01-15",
          text: "Absolutely stunning timepiece. The craftsmanship is impeccable and the automatic movement is smooth as silk. Worth every penny!",
          verified: true,
        },
        {
          author: "Robert Thompson",
          rating: 4,
          date: "2024-12-28",
          text: "Great watch with excellent build quality. Only minor complaint is the strap could be slightly more comfortable, but overall very satisfied.",
          verified: true,
        },
      ],
    },
    {
      id: 2,
      name: "Chronograph Racing Black",
      category: "men",
      subcategory: "chronograph",
      price: 15500,
      originalPrice: 18500,
      discount: 16,
      image: "images/luxury-racing-chronograph-watch-black.jpg",
      description:
        "Inspired by motorsport heritage with a tachymeter bezel and precise chronograph functions. Engineered for those who appreciate speed and precision.",
      specs: [
        "Movement: Automatic Chronograph",
        "Case: 42mm Stainless Steel",
        "Water Resistance: 100m",
        "Crystal: Sapphire",
        "Strap: Perforated Leather",
      ],
      rating: 4.7,
      reviewCount: 118,
      reviews: [
        {
          author: "Jake Morrison",
          rating: 5,
          date: "2025-01-11",
          text: "Perfect racing watch! The chronograph is super accurate and the tachymeter is a nice touch. Love the sporty design.",
          verified: true,
        },
      ],
    },
    {
      id: 3,
      name: "Diver Professional Blue",
      category: "men",
      subcategory: "dive",
      price: 9800,
      originalPrice: 12000,
      discount: 18,
      image: "images/luxury-diving-watch-blue.jpg",
      description:
        "Built for the depths with ISO 6425 certification. This professional diving instrument features a unidirectional bezel and luminescent markers for underwater visibility.",
      specs: [
        "Movement: Automatic",
        "Case: 44mm Titanium",
        "Water Resistance: 300m",
        "Crystal: Sapphire",
        "Strap: Rubber Diving Strap",
      ],
      rating: 4.9,
      reviewCount: 156,
      reviews: [
        {
          author: "Marcus Johnson",
          rating: 5,
          date: "2025-01-22",
          text: "As a professional diver, this watch has never let me down. The luminescent markers are incredibly bright. Excellent value for money.",
          verified: true,
        },
      ],
    },
    {
      id: 4,
      name: "Dress Classic Gold",
      category: "men",
      subcategory: "dress",
      price: 28000,
      originalPrice: 33000,
      discount: 15,
      image: "images/luxury-gold-dress-watch-roman-numerals.jpg",
      description:
        "Timeless sophistication with Roman numerals and a refined gold case. A statement of understated luxury for the distinguished gentleman.",
      specs: [
        "Movement: Automatic",
        "Case: 39mm 18K Yellow Gold",
        "Water Resistance: 30m",
        "Crystal: Sapphire",
        "Strap: Premium Leather",
      ],
      rating: 4.8,
      reviewCount: 76,
      reviews: [
        {
          author: "Thomas Blackwood",
          rating: 5,
          date: "2025-01-09",
          text: "Classic elegance at its finest. The Roman numerals and gold case exude luxury. Receives compliments everywhere I go.",
          verified: true,
        },
      ],
    },
    {
      id: 5,
      name: "GMT Traveler",
      category: "men",
      subcategory: "automatic",
      price: 16500,
      originalPrice: 19500,
      discount: 15,
      image: "images/luxury-gmt-watch-dual-time-zone.jpg",
      description:
        "The perfect companion for the global traveler. Dual time zone display with 24-hour hand allows simultaneous tracking of home and local time.",
      specs: [
        "Movement: Automatic GMT",
        "Case: 41mm Stainless Steel",
        "Water Resistance: 100m",
        "Crystal: Sapphire",
        "Strap: Steel Bracelet",
      ],
      rating: 4.9,
      reviewCount: 134,
      reviews: [
        {
          author: "Daniel Foster",
          rating: 5,
          date: "2025-01-17",
          text: "As someone who travels frequently for business, this watch is indispensable. The GMT function is incredibly practical and the build quality is superb.",
          verified: true,
        },
      ],
    },
  ],
  women: [
    {
      id: 6,
      name: "Diamond Elegance Rose Gold",
      category: "women",
      subcategory: "diamonds",
      price: 24500,
      originalPrice: 29000,
      discount: 16,
      image: "images/luxury-women-rose-gold-diamond-watch.jpg",
      description:
        "Exquisite timepiece featuring 48 hand-set diamonds on the bezel. The mother-of-pearl dial shimmers with every movement, embodying feminine sophistication.",
      specs: [
        "Movement: Swiss Quartz",
        "Case: 32mm Rose Gold",
        "Diamonds: 48 Brilliant Cut",
        "Crystal: Sapphire",
        "Strap: Rose Gold Bracelet",
      ],
      rating: 4.9,
      reviewCount: 203,
      reviews: [
        {
          author: "Emma Rodriguez",
          rating: 5,
          date: "2025-01-20",
          text: "Absolutely breathtaking! The diamonds sparkle beautifully and the rose gold is gorgeous. This watch makes me feel special every time I wear it.",
          verified: true,
        },
      ],
    },
    {
      id: 7,
      name: "Slim Dress Watch Pearl",
      category: "women",
      subcategory: "dress",
      price: 14800,
      originalPrice: 17500,
      discount: 15,
      image: "images/elegant-slim-women-s-dress-watch-mother-of-pearl.jpg",
      description:
        "Ultra-thin elegance with a mother-of-pearl dial and delicate design. Perfect for formal occasions and everyday sophistication.",
      specs: [
        "Movement: Swiss Quartz",
        "Case: 28mm Stainless Steel",
        "Water Resistance: 30m",
        "Crystal: Sapphire",
        "Strap: Leather",
      ],
      rating: 4.7,
      reviewCount: 89,
      reviews: [
        {
          author: "Sophia Chen",
          rating: 5,
          date: "2025-01-18",
          text: "Such a beautiful and delicate watch. The mother-of-pearl dial is stunning. Comfortable to wear all day.",
          verified: true,
        },
      ],
    },
    {
      id: 8,
      name: "Luxury Bracelet Automatic",
      category: "women",
      subcategory: "bracelet",
      price: 19800,
      originalPrice: 23500,
      discount: 16,
      image: "images/luxury-women-s-bracelet-watch-automatic.jpg",
      description:
        "A perfect fusion of jewelry and horology. This automatic timepiece doubles as an elegant bracelet with its seamless integrated design.",
      specs: [
        "Movement: Automatic",
        "Case: 30mm White Gold",
        "Water Resistance: 50m",
        "Crystal: Sapphire",
        "Bracelet: Integrated White Gold",
      ],
      rating: 4.8,
      reviewCount: 145,
      reviews: [
        {
          author: "Victoria Laurent",
          rating: 5,
          date: "2025-01-16",
          text: "This watch is a work of art. It's both a beautiful bracelet and an excellent timepiece. Gets so many compliments!",
          verified: true,
        },
      ],
    },
    {
      id: 9,
      name: "Classic Pearl White",
      category: "women",
      subcategory: "dress",
      price: 11500,
      originalPrice: 13500,
      discount: 15,
      image:"images/women-s-classic-white-pearl-dial-watch.jpg",
      description:
        "Timeless beauty with a pristine white dial and classic design. Versatile enough for both casual and formal wear.",
      specs: [
        "Movement: Swiss Quartz",
        "Case: 30mm Stainless Steel",
        "Water Resistance: 50m",
        "Crystal: Sapphire",
        "Strap: White Leather",
      ],
      rating: 4.6,
      reviewCount: 112,
      reviews: [
        {
          author: "Isabella Martinez",
          rating: 5,
          date: "2025-01-14",
          text: "Love this watch! Clean, elegant design that goes with everything. Quality is excellent.",
          verified: true,
        },
      ],
    },
    {
      id: 10,
      name: "Moonphase Diamond Ladies",
      category: "women",
      subcategory: "automatic",
      price: 32000,
      originalPrice: 38000,
      discount: 16,
      image: "images/women-s-moonphase-diamond-luxury-watch.jpg",
      description:
        "Celestial beauty with a romantic moonphase complication and diamond accents. A sophisticated timepiece for the modern woman.",
      specs: [
        "Movement: Automatic Moonphase",
        "Case: 34mm Rose Gold",
        "Diamonds: 36 Brilliant Cut",
        "Crystal: Sapphire",
        "Strap: Satin",
      ],
      rating: 5.0,
      reviewCount: 67,
      reviews: [
        {
          author: "Charlotte Williams",
          rating: 5,
          date: "2025-01-12",
          text: "The most beautiful watch I own. The moonphase is mesmerizing and the diamonds add the perfect touch of glamour.",
          verified: true,
        },
      ],
    },
  ],
  smart: [
    {
      id: 11,
      name: "Hybrid Smartwatch Classic",
      category: "smart",
      subcategory: "hybrid",
      price: 4500,
      originalPrice: 5500,
      discount: 18,
      image: "images/luxury-hybrid-smartwatch-classic-design.jpg",
      description:
        "The perfect blend of traditional craftsmanship and modern technology. Track your fitness while maintaining timeless style.",
      specs: [
        "Type: Hybrid Smartwatch",
        "Case: 42mm Stainless Steel",
        "Battery: 6 months",
        "Water Resistance: 50m",
        "Features: Activity Tracking, Notifications",
      ],
      rating: 4.5,
      reviewCount: 234,
      reviews: [
        {
          author: "Michael Chen",
          rating: 5,
          date: "2025-01-19",
          text: "Finally, a smartwatch that looks like a real watch! Love that I don't have to charge it every night. Perfect balance of tech and style.",
          verified: true,
        },
      ],
    },
    {
      id: 12,
      name: "Fitness Pro Titanium",
      category: "smart",
      subcategory: "fitness",
      price: 6800,
      originalPrice: 8000,
      discount: 15,
      image: "images/premium-fitness-smartwatch-titanium-sports.jpg",
      description:
        "Built for athletes with advanced health monitoring, GPS tracking, and premium titanium construction. Luxury meets performance.",
      specs: [
        "Type: Fitness Smartwatch",
        "Case: 44mm Titanium",
        "Battery: 14 days",
        "Water Resistance: 100m",
        "Features: GPS, Heart Rate, SpO2, Sleep Tracking",
      ],
      rating: 4.7,
      reviewCount: 189,
      reviews: [
        {
          author: "Sarah Johnson",
          rating: 5,
          date: "2025-01-17",
          text: "Best fitness watch I've owned. Tracks everything perfectly and the titanium case is incredibly lightweight. Battery life is amazing!",
          verified: true,
        },
      ],
    },
    {
      id: 13,
      name: "Connected Luxury Gold",
      category: "smart",
      subcategory: "connected",
      price: 8500,
      originalPrice: 10000,
      discount: 15,
      image: "images/luxury-connected-smartwatch-gold-premium.jpg",
      description:
        "Premium smartwatch with full touchscreen and luxury materials. Stay connected without compromising on style.",
      specs: [
        "Type: Smartwatch",
        "Case: 41mm 18K Gold",
        "Battery: 2 days",
        "Display: AMOLED Touchscreen",
        "Features: Calls, Messages, Apps, NFC Payments",
      ],
      rating: 4.6,
      reviewCount: 156,
      reviews: [
        {
          author: "David Park",
          rating: 5,
          date: "2025-01-15",
          text: "Stunning watch! The gold case is beautiful and the screen is crystal clear. Love being able to take calls from my wrist.",
          verified: true,
        },
      ],
    },
    {
      id: 14,
      name: "Sport Elite Carbon",
      category: "smart",
      subcategory: "fitness",
      price: 5200,
      originalPrice: 6200,
      discount: 16,
      image: "images/sport-smartwatch-carbon-fiber-athletic.jpg",
      description:
        "Ultra-lightweight carbon fiber case with comprehensive sports tracking. Designed for serious athletes and adventurers.",
      specs: [
        "Type: Sport Smartwatch",
        "Case: 46mm Carbon Fiber",
        "Battery: 10 days",
        "Water Resistance: 200m",
        "Features: Multi-Sport Tracking, Altitude, Compass",
      ],
      rating: 4.8,
      reviewCount: 201,
      reviews: [
        {
          author: "Alex Turner",
          rating: 5,
          date: "2025-01-13",
          text: "Perfect for my training! Tracks all my workouts accurately and the carbon case is incredibly durable yet light. Highly recommend!",
          verified: true,
        },
      ],
    },
  ],
  premium: [
    {
      id: 15,
      name: "Skeleton Tourbillon Platinum",
      category: "premium",
      subcategory: "tourbillon",
      price: 125000,
      originalPrice: 145000,
      discount: 14,
      image: "images/luxury-skeleton-tourbillon-watch.jpg",
      description:
        "The pinnacle of watchmaking artistry. A flying tourbillon visible through the fully skeletonized dial, encased in platinum. Limited to 50 pieces worldwide.",
      specs: [
        "Movement: Manual Tourbillon",
        "Case: 43mm Platinum",
        "Power Reserve: 72h",
        "Crystal: Sapphire",
        "Limited: 50 pieces",
        "Strap: Alligator Leather",
      ],
      rating: 5.0,
      reviewCount: 28,
      reviews: [
        {
          author: "Richard Sterling",
          rating: 5,
          date: "2025-01-21",
          text: "The most exquisite watch I've ever owned. The tourbillon is hypnotic to watch. A true statement piece for the serious collector.",
          verified: true,
        },
      ],
    },
    {
      id: 16,
      name: "Perpetual Calendar Moon Phase",
      category: "premium",
      subcategory: "complications",
      price: 85000,
      originalPrice: 98000,
      discount: 13,
      image: "images/luxury-chronograph-watch-gold.jpg",
      description:
        "An exceptional complication featuring perpetual calendar, moon phase, and chronograph functions. This timepiece requires adjustment only once every 400 years.",
      specs: [
        "Movement: Automatic Perpetual",
        "Case: 42mm 18K Rose Gold",
        "Water Resistance: 50m",
        "Crystal: Sapphire",
        "Complications: Perpetual Calendar, Moonphase",
        "Strap: Crocodile Leather",
      ],
      rating: 4.9,
      reviewCount: 42,
      reviews: [
        {
          author: "William Anderson",
          rating: 5,
          date: "2025-01-20",
          text: "This is a true masterpiece. The perpetual calendar complication is mesmerizing to watch in action. An investment piece that will last generations.",
          verified: true,
        },
      ],
    },
    {
      id: 17,
      name: "Minute Repeater Limited Edition",
      category: "premium",
      subcategory: "limited",
      price: 195000,
      originalPrice: 225000,
      discount: 13,
      image: "images/luxury-minute-repeater-watch-limited-edition-gold.jpg",
      description:
        "One of watchmaking's most coveted complications. The minute repeater chimes the time on demand with cathedral gongs. Limited to 25 pieces.",
      specs: [
        "Movement: Manual Minute Repeater",
        "Case: 44mm 18K White Gold",
        "Power Reserve: 50h",
        "Crystal: Sapphire",
        "Limited: 25 pieces",
        "Strap: Crocodile Leather",
      ],
      rating: 5.0,
      reviewCount: 15,
      reviews: [
        {
          author: "Edward Blackstone",
          rating: 5,
          date: "2025-01-18",
          text: "The sound of the repeater is simply magical. Owning piece number 7 of 25 makes this even more special. Worth every penny.",
          verified: true,
        },
      ],
    },
    {
      id: 18,
      name: "Grand Complication Sky Moon",
      category: "premium",
      subcategory: "complications",
      price: 285000,
      originalPrice: 330000,
      discount: 14,
      image: "images/luxury-watch-moon-phase-complication.jpg",
      description:
        "The ultimate grand complication featuring 12 complications including tourbillon, perpetual calendar, moon phase, and celestial chart. A masterpiece of haute horlogerie.",
      specs: [
        "Movement: Manual Grand Complication",
        "Case: 45mm Platinum",
        "Complications: 12",
        "Crystal: Sapphire both sides",
        "Limited: 10 pieces worldwide",
        "Strap: Alligator Leather",
      ],
      rating: 5.0,
      reviewCount: 8,
      reviews: [
        {
          author: "Alexander von Hohenberg",
          rating: 5,
          date: "2025-01-22",
          text: "Acquiring this watch was a dream come true. The complexity and beauty are unmatched. A true work of art that will be treasured for generations.",
          verified: true,
        },
      ],
    },
  ],
}
function getProductReviews(productId) {
  return JSON.parse(localStorage.getItem(`reviews_${productId}`)) || [];
}

function saveProductReviews(productId, reviews) {
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
}

// Flatten all products for easy searching
const allProducts = [...products.men, ...products.women, ...products.smart, ...products.premium]

// State
let cart = JSON.parse(localStorage.getItem("chronovaCart")) || []
const wishlist = JSON.parse(localStorage.getItem("chronovaWishlist")) || []
let currentPage = "home"
let lastPage = "home"
const discountTimers = {}
let promoCode = ""
let promoDiscount = 0
const isLoggedIn = JSON.parse(localStorage.getItem("chronovaLoggedIn")) || false
const currentUser = JSON.parse(localStorage.getItem("chronovaUser")) || null

// Initialize discount timers
allProducts.forEach((product) => {
  const randomHours = Math.floor(Math.random() * 6) + 3
  discountTimers[product.id] = {
    duration: randomHours * 3600,
    remaining: randomHours * 3600,
  }
})

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  updateCartCount()
  updateWishlistCount()
  updateLoginButton()
  startDiscountTimers()
  setupEventListeners()
}

// Event Listeners
function setupEventListeners() {
  document.getElementById("cartBtn")?.addEventListener("click", () => showPage("cart"))
  document.getElementById("wishlistBtn")?.addEventListener("click", () => showPage("account", "wishlist"))

  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("active")
  })

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  const category = btn.dataset.category;
  const filter = btn.dataset.filter || "all";

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  renderCategoryProducts(category, filter);
});


  // Sort selects
  document.getElementById("sortSelectMen")?.addEventListener("change", (e) => {
    const filter = document.querySelector('.filter-btn.active[data-category="men"]')?.dataset.filter || "all"
    renderCategoryProducts("men", filter, e.target.value)
  })

  document.getElementById("sortSelectWomen")?.addEventListener("change", (e) => {
    const filter = document.querySelector('.filter-btn.active[data-category="women"]')?.dataset.filter || "all"
    renderCategoryProducts("women", filter, e.target.value)
  })

  document.getElementById("sortSelectSmart")?.addEventListener("change", (e) => {
    const filter = document.querySelector('.filter-btn.active[data-category="smart"]')?.dataset.filter || "all"
    renderCategoryProducts("smart", filter, e.target.value)
  })

  document.getElementById("sortSelectPremium")?.addEventListener("change", (e) => {
    const filter = document.querySelector('.filter-btn.active[data-category="premium"]')?.dataset.filter || "all"
    renderCategoryProducts("premium", filter, e.target.value)
  })

  // Account menu
  document.querySelectorAll(".account-menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const tab = e.target.dataset.tab
      switchAccountTab(tab)
    })
  })

  // Authentication Modal Listeners
  document.getElementById("loginBtn")?.addEventListener("click", () => openAuthModal("login"))
  document.getElementById("authModalCloseBtn")?.addEventListener("click", closeAuthModal)
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const targetTab = e.target.dataset.tab
      switchAuthTab(targetTab)
    })
  })
  document.getElementById("loginForm")?.addEventListener("submit", handleLogin)
  document.getElementById("registerForm")?.addEventListener("submit", handleRegister)

  // Listen for clicks outside the modal to close it
  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("authModal")) {
      closeAuthModal()
    }
  })
}

// Authentication Functions
function openAuthModal(mode) {
  const modal = document.getElementById("authModal")
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
  switchAuthTab(mode)
}

function closeAuthModal() {
  const modal = document.getElementById("authModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function switchAuthTab(mode) {
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")
  const loginTab = document.querySelectorAll(".auth-tab")[0]
  const registerTab = document.querySelectorAll(".auth-tab")[1]

  if (mode === "login") {
    loginForm.classList.add("active")
    registerForm.classList.remove("active")
    loginTab.classList.add("active")
    registerTab.classList.remove("active")
  } else {
    registerForm.classList.add("active")
    loginForm.classList.remove("active")
    registerTab.classList.add("active")
    loginTab.classList.remove("active")
  }
}

function handleLogin(e) {
  e.preventDefault()
  const form = e.target
  const email = form.querySelector('input[type="email"]').value

  
  showPremiumNotification(`Welcome back! Successfully logged in as ${email}`, "success")

  
  localStorage.setItem("chronovaUser", JSON.stringify({ email, loggedIn: true }))

  
  closeAuthModal()
  form.reset()

  
  updateLoginButton()
}

function handleRegister(e) {
  e.preventDefault()
  const form = e.target
  const name = form.querySelector('input[type="text"]').value
  const email = form.querySelector('input[type="email"]').value
  const password = form.querySelectorAll('input[type="password"]')[0].value
  const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value

  
  if (password !== confirmPassword) {
    showPremiumNotification("Passwords do not match. Please try again.", "error")
    return
  }


  showPremiumNotification(`Account created successfully! Welcome to CHRONOVA, ${name}!`, "success")


  localStorage.setItem("chronovaUser", JSON.stringify({ name, email, loggedIn: true }))

  
  closeAuthModal()
  form.reset()


  updateLoginButton()
}

function updateLoginButton() {
  const user = JSON.parse(localStorage.getItem("chronovaUser") || "{}")
  const loginBtn = document.getElementById("loginBtn")

  if (user.loggedIn) {
    loginBtn.title = `Logged in as ${user.email || user.name}`
    loginBtn.style.color = "var(--color-gold)"
    loginBtn.onclick = () => {
      if (confirm("Are you sure you want to logout?")) {
        handleLogout()
      }
    }
    loginBtn.querySelector("svg").innerHTML = `
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    `
  } else {
    loginBtn.title = "Login"
    loginBtn.onclick = () => openAuthModal("login")
    loginBtn.querySelector("svg").innerHTML = `
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    `
    loginBtn.style.color = ""
  }
}

function handleLogout() {
  localStorage.removeItem("chronovaUser")
  localStorage.setItem("chronovaLoggedIn", JSON.stringify(false)) // Ensure this is updated if used elsewhere
  showPremiumNotification("You have been successfully signed out.", "info")
  updateLoginButton()
}

function showPremiumNotification(message, type = "info") {
  const toast = document.getElementById("notificationToast")

  // Create notification content
  const icons = {
    success:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    error:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    warning:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
  }

  const icon = icons[type] || icons.info

  toast.innerHTML = `
    <div class="notification-icon">${icon}</div>
    <div class="notification-content">
      <div class="notification-title">CHRONOVA</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" onclick="hideNotification()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `


  toast.className = `notification-toast ${type}`

  
  setTimeout(() => toast.classList.add("show"), 100)

  
  setTimeout(() => {
    toast.classList.remove("show")
  }, 4000)
}

function hideNotification() {
  const toast = document.getElementById("notificationToast")
  toast.classList.remove("show")
}


function startDiscountTimers() {
  setInterval(() => {
    Object.keys(discountTimers).forEach((productId) => {
      const timer = discountTimers[productId]
      timer.remaining--

      if (timer.remaining <= 0) {
        const randomHours = Math.floor(Math.random() * 6) + 3
        timer.remaining = randomHours * 3600
      }

      updateTimerDisplay(productId)
    })
  }, 1000)
}

function updateTimerDisplay(productId) {
  const timer = discountTimers[productId]
  const hours = Math.floor(timer.remaining / 3600)
  const minutes = Math.floor((timer.remaining % 3600) / 60)
  const seconds = timer.remaining % 60
  const display = `${hours}h ${minutes}m ${seconds}s`

  const timerElements = document.querySelectorAll(`#timer-${productId}, [data-timer-id="${productId}"]`)
  timerElements.forEach((el) => {
    if (el) el.textContent = display
  })
}

function getTimerDisplay(productId) {
  const timer = discountTimers[productId]
  if (!timer) return "0h 0m 0s"
  const hours = Math.floor(timer.remaining / 3600)
  const minutes = Math.floor((timer.remaining % 3600) / 60)
  const seconds = timer.remaining % 60
  return `${hours}h ${minutes}m ${seconds}s`
}

// Page Navigation
function showPage(page, param) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"))

  const pageElement = document.getElementById(`${page}Page`)
  if (pageElement) {
    pageElement.classList.add("active")
    lastPage = currentPage
    currentPage = page

    if (page === "men" || page === "women" || page === "smart" || page === "premium") {
      renderCategoryProducts(page, "all")
    } else if (page === "account") {
      if (param) switchAccountTab(param)
      updateAccountDashboard()
    } else if (page === "cart") {
      renderCartPage()
    } else if (page === "checkout") {
      renderCheckoutPage()
    }

    window.scrollTo(0, 0)
  }
}

function goBack() {
  showPage(lastPage)
}

// Render Category Products
function renderCategoryProducts(category, filter = "all", sort = "featured") {
  const gridId = `${category}ProductsGrid`
  const grid = document.getElementById(gridId)
  if (!grid) return

  let categoryProducts = products[category] || []

  
  if (filter !== "all") {
    categoryProducts = categoryProducts.filter((p) => p.subcategory === filter)
  }

  
  if (sort === "price-low") {
    categoryProducts.sort((a, b) => a.price - b.price)
  } else if (sort === "price-high") {
    categoryProducts.sort((a, b) => b.price - a.price)
  } else if (sort === "newest") {
    categoryProducts.reverse()
  }

  grid.innerHTML = categoryProducts
    .map((product) => {
      const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))
      const isWishlisted = wishlist.some((item) => item.id === product.id)

      return `
      <div class="product-card" onclick="showProductDetail(${product.id})">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='/--encodeuricomponent-product-name--.jpg'">
          <div class="discount-timer" id="timer-${product.id}">${getTimerDisplay(product.id)}</div>
          <button class="wishlist-badge ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${product.id}, event)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? "#e74c3c" : "none"}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <div class="product-category">${product.subcategory}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-pricing">
          <span class="product-price">${formatPrice(product.price)}</span>
<span class="product-original-price">${formatPrice(product.originalPrice)}</span>

            <span class="product-discount">${product.discount}% OFF</span>
          </div>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>(${product.reviewCount})</span>
          </div>
          <button class="view-details-btn" onclick="showProductDetail(${product.id}, event)">View Details</button>
        </div>
      </div>
    `
    })
    .join("")
}

// Show Product Detail
function showProductDetail(productId, event) {
  if (event) event.stopPropagation()

  const product = allProducts.find((p) => p.id === productId)
  if (!product) return

  const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))
  const isWishlisted = wishlist.some((item) => item.id === product.id)

  const ratingDistribution = {
    5: Math.floor(product.reviewCount * 0.65),
    4: Math.floor(product.reviewCount * 0.25),
    3: Math.floor(product.reviewCount * 0.07),
    2: Math.floor(product.reviewCount * 0.02),
    1: Math.floor(product.reviewCount * 0.01),
  }

  document.getElementById("productDetail").innerHTML = `
    <div class="product-gallery">
      <img src="${product.image}" alt="${product.name}" class="product-main-image" onerror="this.src='/--encodeuricomponent-product-name--.jpg'">
    </div>
    <div class="product-detail-info">
      <div class="product-detail-category">${product.category} - ${product.subcategory}</div>
      <h1>${product.name}</h1>
      <div class="product-detail-rating">
        <span class="stars">${stars}</span>
        <span>${product.rating} (${product.reviewCount} reviews)</span>
      </div>
      <div class="product-detail-pricing">
<span class="product-detail-price">${formatPrice(product.price)}</span>
<span class="product-detail-original-price">${formatPrice(product.originalPrice)}</span>

        <span class="product-detail-discount">${product.discount}% OFF</span>
      </div>
      <div class="timer-section">
        <h3>⏱ Limited Time Offer Ends In:</h3>
        <div class="timer-display" data-timer-id="${product.id}">${getTimerDisplay(product.id)}</div>
      </div>
      <div class="product-description">
        <h3>Description</h3>
        <p>${product.description}</p>
      </div>
      <div class="product-specs">
        <h3>Specifications</h3>
        <ul>
          ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
        </ul>
      </div>
      <div class="product-actions">
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-now-btn" onclick="buyNow(${product.id})">Buy Now</button>
        <button class="wishlist-btn ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${product.id}, event)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div class="reviews-section">
        <div class="reviews-header">
          <h3>Customer Reviews</h3>
          <button class="write-review-btn" onclick="alert('Write review functionality')">Write a Review</button>
        </div>
        <div class="reviews-summary">
          <div class="reviews-average">
            <div class="average-rating">${product.rating}</div>
            <div class="average-stars">${stars}</div>
            <div class="reviews-count">Based on ${product.reviewCount} reviews</div>
          </div>
          <div class="reviews-distribution">
            ${[5, 4, 3, 2, 1]
              .map((rating) => {
                const count = ratingDistribution[rating]
                const percentage = (count / product.reviewCount) * 100
                return `
                <div class="rating-bar">
                  <span class="rating-bar-label">${rating} stars</span>
                  <div class="rating-bar-fill-container">
                    <div class="rating-bar-fill" style="width: ${percentage}%"></div>
                  </div>
                  <span class="rating-bar-count">${count}</span>
                </div>
              `
              })
              .join("")}
          </div>
        </div>
        <div class="reviews-list">
          ${product.reviews
            .map(
              (review) => `
            <div class="review-item">
              <div class="review-header">
                <div class="review-author-info">
                  <div class="review-author">${review.author}</div>
                  <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
              </div>
              <div class="review-text">${review.text}</div>
              ${review.verified ? '<span class="review-verified">✓ VERIFIED PURCHASE</span>' : ""}
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `

  showPage("product")
}

// Cart Functions
function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart()
  updateCartCount()

  // Show premium notification instead of alert
  showPremiumNotification(`${product.name} added to your collection!`, "success")
}

function buyNow(productId) {
  addToCart(productId)
  showPage("checkout")
}

function removeFromCart(productId) {
  const product = cart.find((item) => item.id === productId)
  cart = cart.filter((item) => item.id !== productId)
  saveCart()
  updateCartCount()
  renderCartPage()

  if (product) {
    showPremiumNotification(`${product.name} removed from cart`, "info")
  }
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    saveCart()
    renderCartPage()
  }
}

function saveCart() {
  localStorage.setItem("chronovaCart", JSON.stringify(cart))
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  document.getElementById("cartCount").textContent = count
}

// Wishlist Functions
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation()

  const index = wishlist.findIndex((item) => item.id === productId) 
  const product = allProducts.find((p) => p.id === productId)

  if (index === -1) {
    
    wishlist.push(product) 
    showPremiumNotification(`${product.name} added to wishlist!`, "success")
  } else {
    wishlist.splice(index, 1)
    showPremiumNotification(`${product.name} removed from wishlist`, "info")
  }

  saveWishlist()
  updateWishlistCount()

  if (currentPage === "men" || currentPage === "women" || currentPage === "smart" || currentPage === "premium") {
    const filter = document.querySelector(`.filter-btn.active[data-category="${currentPage}"]`)?.dataset.filter || "all"
    renderCategoryProducts(currentPage, filter)
  } else if (currentPage === "product") {
    showProductDetail(productId)
  } else if (currentPage === "account") {
    renderAccountWishlist()
  }
}

function saveWishlist() {
  localStorage.setItem("chronovaWishlist", JSON.stringify(wishlist))
}

function updateWishlistCount() {
  const count = wishlist.length
  document.getElementById("wishlistCount").textContent = count
  document.getElementById("dashboardWishlistCount").textContent = count 
}

// Account Functions
function switchAccountTab(tab) {
  document.querySelectorAll(".account-menu-item").forEach((item) => item.classList.remove("active"))
  document.querySelectorAll(".account-tab").forEach((t) => t.classList.remove("active"))

  document.querySelector(`.account-menu-item[data-tab="${tab}"]`)?.classList.add("active")
  document.getElementById(`${tab}Tab`)?.classList.add("active")

  if (tab === "wishlist") {
    renderAccountWishlist() 
  }
}

function updateAccountDashboard() {
  document.getElementById("dashboardWishlistCount").textContent = wishlist.length
}

function renderAccountWishlist() {
  const grid = document.getElementById("accountWishlistGrid")
  if (!grid) return

  if (wishlist.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <p>No items in wishlist</p>
        <button class="btn-primary" onclick="showPage('men')">Start Shopping</button>
      </div>
    `
    return
  }

  grid.innerHTML = wishlist
    .map((product) => {
      const stars = "★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))

      return `
      <div class="product-card" onclick="showProductDetail(${product.id})">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='/--encodeuricomponent-product-name--.jpg'">
          <div class="discount-timer" id="timer-${product.id}">${getTimerDisplay(product.id)}</div>
          <button class="wishlist-badge active" onclick="toggleWishlist(${product.id}, event)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#e74c3c" stroke="#e74c3c" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <div class="product-category">${product.subcategory}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-pricing">
           <span class="product-price">${formatPrice(product.price)}</span>
<span class="product-original-price">${formatPrice(product.originalPrice)}</span>

            <span class="product-discount">${product.discount}% OFF</span>
          </div>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>(${product.reviewCount})</span>
          </div>
          <button class="view-details-btn" onclick="showProductDetail(${product.id}, event)">View Details</button>
        </div>
      </div>
    `
    })
    .join("")
}

function submitContactForm(e) {
  e.preventDefault()
  showPremiumNotification("Thank you for your message! We will get back to you within 24 hours.", "success")
  e.target.reset()
}

// Cart Page
function renderCartPage() {
  const itemsList = document.getElementById("cartItemsList")

  if (cart.length === 0) {
    itemsList.innerHTML = `
      <div class="empty-state">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="showPage('men')">Start Shopping</button>
      </div>
    `
    updateCartSummary()
    return
  }

  itemsList.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='/--encodeuricomponent-item-name--.jpg'">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <div class="cart-item-category">${item.category} - ${item.subcategory}</div>
<div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
        <div class="cart-item-actions">
          <div class="quantity-controls">
            <button onclick="updateQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
      <div class="cart-item-right">
<div class="cart-item-total">₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
      </div>
    </div>
  `,
    )
    .join("")

  updateCartSummary()
}
function updateCartSummary() {
  const mrpTotal = cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  
  const sellingTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  const discount = mrpTotal - sellingTotal;


  const shipping = 80;

  
  const total = sellingTotal + shipping;

  
  document.getElementById("cartSubtotal").textContent =
    `₹${mrpTotal.toLocaleString("en-IN")}`;

  document.getElementById("cartDiscount").textContent =
    `-₹${discount.toLocaleString("en-IN")}`;

  document.getElementById("cartShipping").textContent =
    `₹${shipping.toLocaleString("en-IN")}`;

  document.getElementById("cartTotal").textContent =
    `₹${total.toLocaleString("en-IN")}`;
}
function applyPromoCode() {
  const code = document.getElementById("promoCodeInput").value.trim().toUpperCase();

  if (code === "CHRONOVA5") {
    promoDiscount = 5;
    showPremiumNotification("Promo code applied! 10% off", "success");
  } 
  else if (code === "LUXURY10") {
    promoDiscount = 10;
    showPremiumNotification("Promo code applied! 20% off", "success");
  } 
  else {
    promoDiscount = 0;
    showPremiumNotification("Invalid promo code", "error");
  }

  updateCheckoutTotal();
}


// Checkout Page
function renderCheckoutPage() {
  const itemsList = document.getElementById("checkoutItemsList");

  itemsList.innerHTML = cart
    .map(
      (item) => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}" class="checkout-item-image" onerror="this.src='/--encodeuricomponent-item-name--.jpg'">
      <div class="checkout-item-details">
        <h4>${item.name}</h4>
        <p>Qty: ${item.quantity}</p>
        <div class="checkout-item-price">${formatPrice(item.price * item.quantity)}</div>
      </div>
    </div>
  `
    )
    .join("");

  updateCheckoutTotal();
}
function updateCheckoutTotal() {
  let mrp = 0;
  let selling = 0;

  cart.forEach(item => {
    const price = Number(item.price) || 0;
    const original = Number(item.originalPrice) || price;
    mrp += original * item.quantity;
    selling += price * item.quantity;
  });

  
  let serviceCharge = 0;
  let serviceHTML = "";

  if (document.getElementById("serviceGift")?.checked) {
    serviceCharge += 50;
    serviceHTML += "<div>Luxury Gift Packing ₹50</div>";
  }
  if (document.getElementById("serviceExpress")?.checked) {
    serviceCharge += 150;
    serviceHTML += "<div>Express Shipping ₹150</div>";
  }
  if (document.getElementById("serviceInsurance")?.checked) {
    serviceCharge += 300;
    serviceHTML += "<div>Insurance ₹300</div>";
  }
  if (document.getElementById("serviceEngraving")?.checked) {
    serviceCharge += 250;
    serviceHTML += "<div>Engraving ₹250</div>";
  }

  
  const promo = Number(promoDiscount) || 0;
  const promoAmount = Math.round((selling * promo) / 100);

  const shipping = 80;
  const total = selling + serviceCharge + shipping - promoAmount;

  
  document.getElementById("checkoutMrp").innerText = `₹${mrp}`;
  document.getElementById("checkoutDiscount").innerText = `-₹${mrp - selling}`;
  document.getElementById("checkoutSubtotal").innerText = `₹${selling}`;
  document.getElementById("premiumServicesList").innerHTML = serviceHTML || "—";
  document.getElementById("checkoutShipping").innerText = `₹${shipping}`;
  document.getElementById("promoDiscount").innerText = `-₹${promoAmount}`;
  document.getElementById("checkoutTotal").innerText = `₹${total}`;
}




function placeOrder() {
  showPremiumNotification("Thank you for your order! Order confirmation has been sent to your email.", "success")
  cart = []
  saveCart()
  updateCartCount()
  showPage("home")
}


function updateWishlistButtons() {
  document.querySelectorAll(".wishlist-badge").forEach((btn) => {
    const productId = Number.parseInt(
      btn
        .closest(".product-card")
        ?.querySelector(".view-details-btn")
        ?.onclick.toString()
        .match(/showProductDetail$$(\d+), event$$/)?.[1],
    )
    if (productId) {
      const isWishlisted = wishlist.some((item) => item.id === productId)
      btn.classList.toggle("active", isWishlisted)
      btn.querySelector("svg").style.fill = isWishlisted ? "#e74c3c" : "none"
      btn.querySelector("svg").style.stroke = isWishlisted ? "#e74c3c" : "currentColor"
    }
  })
}


function updateDashboard() {
  
  console.log("updateDashboard called")
}
document.addEventListener("DOMContentLoaded", () => {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const priceSlider = document.querySelector(".price-range");
  const priceLabel = document.querySelector(".price-value");

  
  if (priceSlider) {
    priceLabel.textContent = `₹${priceSlider.value}`;
    priceSlider.addEventListener("input", () => {
      priceLabel.textContent = `₹${priceSlider.value}`;
      filterProducts();
    });
  }

  // Category filter
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterProducts();
    });
  });
});

function filterProducts() {
  const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter;
  const maxPrice = document.querySelector(".price-range")?.value || Infinity;

  document.querySelectorAll(".product-card").forEach(card => {
    const category = card.dataset.category;
    const price = parseInt(card.dataset.price);

    const matchCategory = activeFilter === "all" || category === activeFilter;
    const matchPrice = price <= maxPrice;

    card.style.display = (matchCategory && matchPrice) ? "block" : "none";
  });
}
let selectedRating = 0;


document.querySelectorAll(".rating-stars span").forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.value);
    document.querySelectorAll(".rating-stars span").forEach(s =>
      s.classList.toggle("active", s.dataset.value <= selectedRating)
    );
  });
});

// SUBMIT REVIEW
document.getElementById("submitReview").addEventListener("click", () => {
  const name = document.getElementById("reviewName").value.trim();
  const reviewText = document.getElementById("reviewText").value.trim();

  if (!name || !reviewText || selectedRating === 0) {
    alert("Please fill all fields and select rating");
    return;
  }

  const reviewHTML = `
    <div class="review-card">
      <div class="review-header">
        <div>
          <strong class="review-name">${name}</strong>
          <div class="review-date">${new Date().toLocaleDateString()}</div>
        </div>
        <div class="review-stars">${"★".repeat(selectedRating)}</div>
      </div>

      <p class="review-text">${reviewText}</p>

      <span class="verified">✔ Verified Purchase</span>
    </div>
  `;

  document.getElementById("reviewsContainer")
    .insertAdjacentHTML("afterbegin", reviewHTML);

  // Reset form
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  document.querySelectorAll(".rating-stars span").forEach(s => s.classList.remove("active"));
});
document.getElementById("submitReview").addEventListener("click", () => {
  const name = document.getElementById("reviewName").value.trim();
  const text = document.getElementById("reviewText").value.trim();

  if (!name || !text || selectedRating === 0) {
    alert("Please fill all fields");
    return;
  }

  const review = {
    name,
    text,
    rating: selectedRating,
    date: new Date().toLocaleDateString()
  };

  const productId = currentProductId; 
  const reviews = getProductReviews(productId);

  reviews.unshift(review);
  saveProductReviews(productId, reviews);

  renderReviews(productId);

  // Reset form
  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
});
