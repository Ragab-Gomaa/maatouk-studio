export type Segment = { t: string; accent?: boolean; italic?: boolean };

// Site copy, centralized (English only).
export const copy = {
  nav: {
    home: "Home",
    works: "Works",
    services: "Services",
    about: "About",
    contact: "Contact",
    start: "Start a project",
    getInTouch: "Get in touch",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    email: "hello@maatouk-studio.com",
  },
  hero: {
    prev: "Prev",
    next: "Next",
    scroll: "Scroll",
  },
  services: {
    label: "Services",
    tagline: "What we make",
    comingSoon: "Selected work coming soon",
    projects: "projects",
    project: "project",
    items: {
      branding: {
        name: "Branding",
        blurb:
          "Identity systems, naming, guidelines — the unmistakable craft that holds a brand together.",
      },
      digital: {
        name: "Digital",
        blurb:
          "Websites, products and interfaces designed and built to feel as good as they look.",
      },
      motion: {
        name: "Motion",
        blurb:
          "Brand films, openers and motion identities that carry the work into a moving frame.",
      },
    },
  },
  work: {
    label: "Selected Work",
    projects: "projects",
    concept: "Concept",
    play: "Play",
    cta: "Start a project",
    statement: [
      { t: "Work that " },
      { t: "moves", accent: true, italic: true },
      { t: " the work forward." },
    ] as Segment[],
  },
  about: {
    label: "About",
    status: "Currently accepting projects",
    statement: [
      { t: "We are an independent studio working at the intersection of " },
      { t: "brand", accent: true, italic: true },
      { t: ", " },
      { t: "digital", accent: true, italic: true },
      { t: " and " },
      { t: "motion", accent: true, italic: true },
      { t: " — building work that earns attention by deserving it." },
    ] as Segment[],
    meta1: "Founded in 2023. Based wherever the work is.",
    meta2: "Selected for clients in construction, hospitality, technology and culture.",
  },
  contact: {
    label: "Contact",
    name: "Name",
    email: "Email",
    phone: "Mobile number",
    budget: "Budget",
    service: "Service",
    selectService: "Select a service",
    selectBudget: "Select a range",
    serviceOptions: [
      { value: "branding", label: "Branding" },
      { value: "digital", label: "Digital" },
      { value: "motion", label: "Motion" },
      { value: "other", label: "Something else" },
    ],
    budgetOptions: [
      { value: "under-5k", label: "Under $5,000" },
      { value: "5-15k", label: "$5,000 – $15,000" },
      { value: "15-50k", label: "$15,000 – $50,000" },
      { value: "50k-plus", label: "$50,000+" },
      { value: "discuss", label: "Prefer to discuss" },
    ],
    send: "Send inquiry",
    sending: "Sending…",
    respond: "We respond to every inquiry within 48 hours.",
    sent: "Thanks — we'll be in touch within 48 hours.",
    errorPrefix: "Couldn't send",
    headline: [
      { t: "Start a " },
      { t: "project", accent: true, italic: true },
      { t: "." },
    ] as Segment[],
    err: {
      required: "Required",
      email: "Invalid email address",
      phone: "Enter a valid number",
      select: "Please choose one",
      generic: "Something went wrong",
      network: "Network error",
      invalid_name: "Please check your name",
      invalid_email: "Please check your email address",
      invalid_phone: "Please check your number",
      bad_request: "Something went wrong — please try again",
      send_failed: "Couldn't send right now — please try again",
    },
  },
  lightbox: {
    client: "Client",
    concept: "Concept",
    close: "Close",
    prev: "Previous project",
    next: "Next project",
    escHint: "Press ESC to close",
  },
  footer: {
    studio: "Studio",
    connect: "Connect",
    location: "Location",
    instagram: "Instagram",
    behance: "Behance",
    tagline: [
      { t: "Brands that " },
      { t: "last", accent: true, italic: true },
      { t: "." },
    ] as Segment[],
    locationText: "Independent studio.\nWorking with clients worldwide.",
    rights: "Maatouk Studio",
  },
  cursor: { view: "View" },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    back: "Back to home",
  },
  a11y: { skip: "Skip to content", backToTop: "Back to top" },
};

export type Dict = typeof copy;
