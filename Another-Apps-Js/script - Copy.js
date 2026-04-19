/* ============================================================
   MY CAR – script.js v8  (SPA + Full Detail Page)
   ============================================================ */

/* ── THEME TOGGLE ── */
const themeToggleBtn = document.getElementById('themeToggle');
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem('myCarTheme');
if (savedTheme) rootElement.setAttribute('data-theme', savedTheme);
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
    rootElement.setAttribute('data-theme', 'light');
themeToggleBtn?.addEventListener('click', () => {
    const newTheme = rootElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('myCarTheme', newTheme);
});

/* ── PAGE LOADER ── */
window.addEventListener('load', () => setTimeout(() => document.getElementById('pageLoader')?.classList.add('done'), 1700));

/* ── EXTENDED CAR DATA ── */
const carData = [
{
  id: 1,
  brand: "bmw",
  name: "BMW",
  model: "M4 Competition",
  price: 110000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "coupe",
  speed: "290 km/h",
  tag: "hot",
  seats: 4,
  doors: 2,
  drive: "RWD",
  handDrive: "Left",
  color: "Isle of Man Green",
  mileage: "4,200 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "3.0L twin-turbo inline-six producing 510 hp with track-ready dynamics.",
  imgs: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 2,
  brand: "audi",
  name: "Audi",
  model: "R8 V10 Performance",
  price: 185000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "sport",
  speed: "331 km/h",
  tag: "supercar",
  seats: 2,
  doors: 2,
  drive: "AWD",
  handDrive: "Left",
  color: "Nardo Grey",
  mileage: "3,100 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Nabooda Audi",
  warranty: "3 Years",
  desc: "5.2L naturally aspirated V10 delivering 620 hp.",
  imgs: ["https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 3,
  brand: "bmw",
  name: "BMW",
  model: "7 Series xDrive",
  price: 125000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "sedan",
  speed: "250 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Black Sapphire",
  mileage: "6,500 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "Flagship luxury sedan with advanced technology.",
  imgs: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 4,
  brand: "mercedes",
  name: "Mercedes",
  model: "S500 4MATIC",
  price: 135000,
  year: 2024,
  fuel: "hybrid",
  gear: "auto",
  type: "sedan",
  speed: "250 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Obsidian Black",
  mileage: "5,800 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "Luxury sedan with refined mild-hybrid performance.",
  imgs: ["https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 5,
  brand: "porsche",
  name: "Porsche",
  model: "911 GT3",
  price: 195000,
  year: 2024,
  fuel: "petrol",
  gear: "dsg",
  type: "sport",
  speed: "318 km/h",
  tag: "new",
  seats: 2,
  doors: 2,
  drive: "RWD",
  handDrive: "Left",
  color: "Guards Red",
  mileage: "2,800 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Porsche Centre Dubai",
  warranty: "3 Years",
  desc: "4.0L flat-six producing 510 hp.",
  imgs: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 6,
  brand: "lamborghini",
  name: "Lamborghini",
  model: "Urus Performante",
  price: 320000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "suv",
  speed: "306 km/h",
  tag: "hot",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Giallo Belenus",
  mileage: "2,400 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Habtoor Motors",
  warranty: "3 Years",
  desc: "666 hp twin-turbo V8 super SUV.",
  imgs: ["https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 7,
  brand: "bmw",
  name: "BMW",
  model: "iX M60",
  price: 124000,
  year: 2024,
  fuel: "electric",
  gear: "auto",
  type: "suv",
  speed: "250 km/h",
  tag: "new",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Sophisto Grey",
  mileage: "6,800 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "619 hp electric SUV with 566 km range.",
  imgs: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 8,
  brand: "audi",
  name: "Audi",
  model: "RS e-tron GT",
  price: 148000,
  year: 2024,
  fuel: "electric",
  gear: "auto",
  type: "sport",
  speed: "250 km/h",
  tag: "new",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Kemora Grey",
  mileage: "4,500 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "Al Nabooda Audi",
  warranty: "3 Years",
  desc: "646 hp electric grand tourer.",
  imgs: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 9,
  brand: "mercedes",
  name: "Mercedes",
  model: "C63 S E Performance",
  price: 98000,
  year: 2024,
  fuel: "hybrid",
  gear: "auto",
  type: "sedan",
  speed: "280 km/h",
  tag: "hot",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Petrol Green",
  mileage: "8,400 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "671 hp plug-in hybrid super sedan.",
  imgs: ["https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 10,
  brand: "porsche",
  name: "Porsche",
  model: "Panamera GTS",
  price: 145000,
  year: 2024,
  fuel: "petrol",
  gear: "dsg",
  type: "sedan",
  speed: "254 km/h",
  tag: "luxury",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Biscay Blue",
  mileage: "6,100 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "Porsche Centre AD",
  warranty: "3 Years",
  desc: "500 hp V8 luxury performance sedan.",
  imgs: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 11,
  brand: "bmw",
  name: "BMW",
  model: "M5 Competition",
  price: 160000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "sedan",
  speed: "305 km/h",
  tag: "hot",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Frozen Marina Bay Blue",
  mileage: "3,600 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "625 hp twin-turbo V8 super saloon, 0-100 km/h in 3.3 sec.",
  imgs: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 12,
  brand: "audi",
  name: "Audi",
  model: "A8 L Quattro",
  price: 140000,
  year: 2022,
  fuel: "petrol",
  gear: "auto",
  type: "sedan",
  speed: "250 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Florett Silver",
  mileage: "31,500 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Nabooda Audi",
  warranty: "1 Year",
  desc: "Flagship luxury sedan with 340 hp V6 and advanced features.",
  imgs: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 13,
  brand: "porsche",
  name: "Porsche",
  model: "Cayenne Turbo",
  price: 180000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "suv",
  speed: "286 km/h",
  tag: "hot",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Carrara White",
  mileage: "4,100 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Porsche Centre Dubai",
  warranty: "3 Years",
  desc: "550 hp twin-turbo V8 in a luxury SUV body with rear-axle steering.",
  imgs: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 14,
  brand: "mercedes",
  name: "Mercedes",
  model: "G63 AMG",
  price: 220000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "suv",
  speed: "220 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Manufaktur Stone Grey",
  mileage: "5,900 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "585 hp twin-turbo V8, iconic design, unmatched off-road capability.",
  imgs: ["https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 15,
  brand: "porsche",
  name: "Porsche",
  model: "Panamera GTS",
  price: 145000,
  year: 2024,
  fuel: "petrol",
  gear: "dsg",
  type: "sedan",
  speed: "254 km/h",
  tag: "luxury",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Biscay Blue",
  mileage: "6,100 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "Porsche Centre AD",
  warranty: "3 Years",
  desc: "High-performance luxury sedan with 500 hp V8.",
  imgs: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 16,
  brand: "mercedes",
  name: "Mercedes",
  model: "C63 S AMG",
  price: 98000,
  year: 2024,
  fuel: "hybrid",
  gear: "auto",
  type: "sedan",
  speed: "280 km/h",
  tag: "hot",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "MANUFAKTUR Petrol Green",
  mileage: "8,400 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "Plug-in hybrid super-saloon with 671 hp.",
  imgs: ["https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 17,
  brand: "audi",
  name: "Audi",
  model: "RS6 Avant",
  price: 132000,
  year: 2023,
  fuel: "petrol",
  gear: "auto",
  type: "sedan",
  speed: "280 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Nardo Grey",
  mileage: "14,300 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Nabooda Audi",
  warranty: "2 Years",
  desc: "630 hp 4.0L twin-turbo V8 estate with 48V mild-hybrid.",
  imgs: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 18,
  brand: "bmw",
  name: "BMW",
  model: "M8 Gran Coupé",
  price: 158000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "coupe",
  speed: "305 km/h",
  tag: "luxury",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Frozen Black",
  mileage: "5,700 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "625 hp twin-turbo V8 with M xDrive AWD.",
  imgs: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 19,
  brand: "mercedes",
  name: "Mercedes",
  model: "GLE 63 S AMG",
  price: 175000,
  year: 2024,
  fuel: "hybrid",
  gear: "auto",
  type: "suv",
  speed: "280 km/h",
  tag: "hot",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Selenite Grey",
  mileage: "7,200 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "630 hp SUV with mild-hybrid 4.0L twin-turbo V8.",
  imgs: ["img/GLE 63 S AMG.jpeg"]
},
{
  id: 20,
  brand: "lamborghini",
  name: "Lamborghini",
  model: "Urus Performante",
  price: 320000,
  year: 2024,
  fuel: "petrol",
  gear: "auto",
  type: "suv",
  speed: "306 km/h",
  tag: "hot",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Giallo Belenus",
  mileage: "2,400 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Habtoor Motors",
  warranty: "3 Years",
  desc: "Extreme Urus with 666 hp V8 and lightweight chassis.",
  imgs: ["https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 21,
  brand: "porsche",
  name: "Porsche",
  model: "FERRARI",
  price: 210000,
  year: 2024,
  fuel: "electric",
  gear: "auto",
  type: "sport",
  speed: "260 km/h",
  tag: "new",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Frozen Berry",
  mileage: "3,100 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Porsche Centre Dubai",
  warranty: "3 Years",
  desc: "Ultimate electric sports car with 760 hp and ultra-fast 800V charging.",
  imgs: ["img/FERRARI.jpeg"]
},
{
  id: 22,
  brand: "bmw",
  name: "BMW",
  model: "iX M60",
  price: 124000,
  year: 2024,
  fuel: "electric",
  gear: "auto",
  type: "suv",
  speed: "250 km/h",
  tag: "new",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Sophisto Grey",
  mileage: "6,800 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "3 Years",
  desc: "BMW's most powerful all-electric SUV with 619 hp dual motors and 566 km range.",
  imgs: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 23,
  brand: "audi",
  name: "Audi",
  model: "FIAT",
  price: 148000,
  year: 2024,
  fuel: "electric",
  gear: "auto",
  type: "sport",
  speed: "250 km/h",
  tag: "new",
  seats: 4,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Kemora Grey",
  mileage: "4,500 km",
  spec: "GCC",
  location: "Abu Dhabi",
  seller: "Al Nabooda Audi",
  warranty: "3 Years",
  desc: "Audi RS e-tron GT with 646 hp dual motors and ultra-fast 800V charging.",
  imgs: ["img/FIAT.jpeg"]
},
{
  id: 24,
  brand: "mercedes",
  name: "Mercedes",
  model: "S-Class AMG Line",
  price: 529000,
  year: 2024,
  fuel: "petrol",
  gear: "automatic",
  type: "sedan",
  speed: "250 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Obsidian Black",
  mileage: "7,300 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "3 Years",
  desc: "Flagship AMG sedan with 496 hp inline-6 and E-Active Body Control.",
  imgs: ["img/S-Class AMG Line.jpeg"]
},
{
  id: 25,
  brand: "bmw",
  name: "BMW",
  model: "i4 M50",
  price: 311800,
  year: 2023,
  fuel: "electric",
  gear: "automatic",
  type: "coupe",
  speed: "225 km/h",
  tag: "new",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "Skyscraper Grey",
  mileage: "14,200 km",
  spec: "GCC",
  location: "Dubai",
  seller: "MyCar Official",
  warranty: "2 Years",
  desc: "All-electric M coupe with 544 hp and 0-100 km/h in 3.9 sec.",
  imgs: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 26,
  brand: "mercedes",
  name: "Mercedes",
  model: "EQS 580 4MATIC",
  price: 743900,
  year: 2023,
  fuel: "electric",
  gear: "automatic",
  type: "sedan",
  speed: "210 km/h",
  tag: "luxury",
  seats: 5,
  doors: 4,
  drive: "AWD",
  handDrive: "Left",
  color: "High-tech Silver",
  mileage: "11,700 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Emirates Motor Co.",
  warranty: "2 Years",
  desc: "Luxury electric saloon with 523 hp dual motors and 108 kWh battery.",
  imgs: ["https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 27,
  brand: "ferrari",
  name: "Ferrari",
  model: "F8 Tributo",
  price: 1272600,
  year: 2024,
  fuel: "petrol",
  gear: "automatic",
  type: "sport",
  speed: "340 km/h",
  tag: "hot",
  seats: 2,
  doors: 2,
  drive: "RWD",
  handDrive: "Left",
  color: "Rosso Corsa",
  mileage: "2,100 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Ferrari Dubai",
  warranty: "3 Years",
  desc: "Mid-rear V8 sports car, 710 hp, 0-100 km/h in 2.9 sec.",
  imgs: ["https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 28,
  brand: "ferrari",
  name: "Ferrari",
  model: "Roma Spider",
  price: 955500,
  year: 2024,
  fuel: "petrol",
  gear: "automatic",
  type: "sport",
  speed: "320 km/h",
  tag: "hot",
  seats: 2,
  doors: 2,
  drive: "RWD",
  handDrive: "Left",
  color: "Grigio Titanio",
  mileage: "1,500 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Ferrari Dubai",
  warranty: "3 Years",
  desc: "Elegant open-top grand tourer, 612 hp, 0-100 km/h in 3.4 sec.",
  imgs: ["https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 29,
  brand: "ferrari",
  name: "Ferrari",
  model: "SF90 Stradale",
  price: 2000500,
  year: 2024,
  fuel: "hybrid",
  gear: "automatic",
  type: "sport",
  speed: "340 km/h",
  tag: "hot",
  seats: 2,
  doors: 2,
  drive: "AWD",
  handDrive: "Left",
  color: "Giallo Triplo Strato",
  mileage: "800 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Ferrari Dubai",
  warranty: "3 Years",
  desc: "First series-production plug-in hybrid supercar with 986 hp.",
  imgs: ["https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=80"]
},
{
  id: 30,
  brand: "lamborghini",
  name: "Lamborghini",
  model: "Huracán EVO",
  price: 291200,
  year: 2024,
  fuel: "petrol",
  gear: "automatic",
  type: "sport",
  speed: "325 km/h",
  tag: "hot",
  seats: 2,
  doors: 2,
  drive: "AWD",
  handDrive: "Left",
  color: "Verde Mantis",
  mileage: "3,200 km",
  spec: "GCC",
  location: "Dubai",
  seller: "Al Habtoor Motors",
  warranty: "3 Years",
  desc: "Next-gen Huracán with 640 hp V10, exceptional handling and top speed of 325 km/h.",
  imgs: ["https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80"]
},
];

/* ── BRAND METADATA ── */
const brandMeta = {
    bmw: { label: 'BMW', sub: 'Bavarian Motor Works – Performance & Luxury', icon: 'fa-circle-half-stroke', color: '#1c69d4' },
    audi: { label: 'Audi', sub: 'Vorsprung durch Technik – Precision Engineering', icon: 'fa-ring', color: '#c40000' },
    mercedes: { label: 'Mercedes-Benz', sub: 'The Best or Nothing – Ultimate Luxury', icon: 'fa-star-of-life', color: '#718496' },
    porsche: { label: 'Porsche', sub: 'Sports Car DNA in every model', icon: 'fa-horse', color: '#c9042c' },
    ferrari: { label: 'Ferrari', sub: 'Il Cavallino Rampante – Pure Italian Passion', icon: 'fa-horse', color: '#e00000' },
    lamborghini: { label: 'Lamborghini', sub: 'Italian Hypercar Excellence', icon: 'fa-shield-halved', color: '#d4a521' },
};

/* ── SPA STATE ── */
let currentBrand = null;
let currentCarId = null;
let currentGalleryIdx = 0;
let currentGalleryImgs = [];
let previousPage = 'main'; // 'main' or 'brand'

/* ── SPA HELPERS ── */
const mainContent = document.querySelector('body');
function showPage(pageId) {
    document.querySelectorAll('.spa-page').forEach(p => p.classList.remove('spa-active'));
    const allMain = document.querySelectorAll('section, footer.footer-carabia, .sell-banner-section, .nl-carabia');
    if (pageId === 'main') {
        allMain.forEach(s => s.style.display = '');
    } else {
        allMain.forEach(s => s.style.display = 'none');
        document.getElementById(pageId)?.classList.add('spa-active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── BUILD CAR CARD ── */
function buildCard(car, context) {
    const tagClass = car.tag === 'hot' ? ' hot' : '';
    const tagLabel = car.tag.charAt(0).toUpperCase() + car.tag.slice(1);
    const mainImg = car.imgs ? car.imgs[0] : car.img || '';
    return `
    <div class="car-card reveal-right" data-car-id="${car.id}">
      <div class="cc-img">
        <span class="car-tag${tagClass}">${tagLabel}</span>
        <img src="${mainImg}" alt="${car.name} ${car.model}" loading="lazy"/>
        <div class="cc-img-overlay"><i class="fa-solid fa-eye"></i> View Details</div>
      </div>
      <div class="cc-body">
        <div class="cc-brand">${car.name}</div>
        <h3 class="cc-model">${car.model}</h3>
        <div class="cc-specs">
          <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1)}</span>
          <span><i class="fa-solid fa-gears"></i> ${car.gear.toUpperCase()}</span>
          <span><i class="fa-solid fa-gauge-high"></i> ${car.speed}</span>
          ${car.mileage ? `<span><i class="fa-solid fa-road"></i> ${car.mileage}</span>` : ''}
        </div>
        <div class="cc-footer">
          <div class="cc-price">$${car.price.toLocaleString()}</div>
          <button class="btn-view" data-car-id="${car.id}" data-context="${context || 'main'}">View Details</button>
        </div>
      </div>
    </div>`;
}

function renderCars(list) {
    const grid = document.getElementById('carsGrid');
    const noRes = document.getElementById('noResults');
    if (!grid) return;
    if (!list || !list.length) {
        grid.innerHTML = '';
        if (noRes) noRes.style.display = 'flex';
    } else {
        if (noRes) noRes.style.display = 'none';
        grid.innerHTML = list.map(c => buildCard(c, 'main')).join('');
        requestAnimationFrame(() => {
            grid.querySelectorAll('.reveal-right').forEach(el => { revealObserver.observe(el); setTimeout(() => el.classList.add('active'), 60); });
        });
    }
}
renderCars(carData);

/* ── OPEN BRAND PAGE ── */
function openBrandPage(brand) {
    currentBrand = brand;
    previousPage = 'main';
    const meta = brandMeta[brand] || { label: brand, sub: '', icon: 'fa-car', color: '#16c7ff' };
    document.getElementById('brandHeroTitle').textContent = meta.label;
    document.getElementById('brandHeroSub').textContent = meta.sub;
    const iconEl = document.getElementById('brandHeroIcon');
    iconEl.innerHTML = `<i class="fa-solid ${meta.icon}"></i>`;
    iconEl.style.color = meta.color;
    showBrandCars(brand);
    showPage('brandPage');
}

function showBrandCars(brand, sort) {
    let list = carData.filter(c => c.brand === brand);
    if (sort === 'price-asc') list = list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list = list.sort((a, b) => b.price - a.price);
    else if (sort === 'year-desc') list = list.sort((a, b) => b.year - a.year);
    const grid = document.getElementById('brandCarsGrid');
    const cnt = document.getElementById('brandResultCount');
    if (cnt) cnt.textContent = `${list.length} car${list.length !== 1 ? 's' : ''} found`;
    if (grid) {
        grid.innerHTML = list.map(c => buildCard(c, 'brand')).join('');
        setTimeout(() => grid.querySelectorAll('.car-card').forEach(el => el.classList.add('active')), 80);
    }
}

document.getElementById('brandSort')?.addEventListener('change', function () {
    if (currentBrand) showBrandCars(currentBrand, this.value);
});
document.getElementById('brandPageBack')?.addEventListener('click', () => showPage('main'));

/* ── OPEN CAR DETAIL ── */
function openCarDetail(carId, fromPage) {
    const car = carData.find(c => c.id === parseInt(carId));
    if (!car) return;
    currentCarId = car.id;
    previousPage = fromPage || 'main';

    const backLabel = fromPage === 'brand' ? `Back to ${brandMeta[car.brand]?.label || car.name}` : 'Back to Home';
    document.getElementById('carDetailBackLabel').textContent = backLabel;
    document.getElementById('detailTitle').textContent = `${car.name} ${car.model} for sale in ${car.location || 'Dubai'}`;
    const monthly = Math.round(car.price / 60);

    document.getElementById('detailIdBar').textContent = `ID ${car.id}`;
    document.getElementById('detailDesc').textContent = car.desc || '';

    // Gallery
    const imgs = car.imgs || [car.img];
    currentGalleryImgs = imgs;
    currentGalleryIdx = 0;
    updateMainGalleryImg();
    const thumbsEl = document.getElementById('detailThumbs');
    if (thumbsEl) {
        thumbsEl.innerHTML = imgs.map((src, i) => `<img src="${src}" class="detail-thumb${i === 0 ? ' active' : ''}" data-idx="${i}" alt="view ${i + 1}" loading="lazy"/>`).join('');
        thumbsEl.querySelectorAll('.detail-thumb').forEach(t => t.addEventListener('click', function () {
            currentGalleryIdx = parseInt(this.dataset.idx);
            updateMainGalleryImg();
        }));
    }

    // Key Facts
    const kf = document.getElementById('detailKeyFacts');
    if (kf) kf.innerHTML = [
        { icon: 'fa-shield-check', lbl: 'Warranty', val: car.warranty || 'None' },
        { icon: 'fa-chair', lbl: 'Seats', val: car.seats || '5' },
        { icon: 'fa-door-open', lbl: 'Doors', val: car.doors || '4' },
        { icon: 'fa-arrows-turn-right', lbl: 'Drive', val: car.drive || 'AWD' },
        { icon: 'fa-steering-wheel', lbl: 'Hand Drive', val: car.handDrive || 'Left' },
        { icon: 'fa-palette', lbl: 'Colours', val: car.color || '—' },
    ].map(f => `<div class="kf-item"><i class="fa-solid ${f.icon}"></i><div><span class="kf-lbl">${f.lbl}</span><span class="kf-val">${f.val}</span></div></div>`).join('');

    // Overview
    const ov = document.getElementById('detailOverview');
    if (ov) ov.innerHTML = [
        { icon: 'fa-calendar', lbl: 'Year', val: car.year },
        { icon: 'fa-globe', lbl: 'Spec', val: car.spec || 'GCC' },
        { icon: 'fa-road', lbl: 'Mileage', val: car.mileage || '—' },
        { icon: 'fa-gears', lbl: 'Transmission', val: car.gear === 'dsg' ? 'DCT Automatic' : 'Automatic' },
        { icon: 'fa-user', lbl: 'Seller', val: car.seller || 'MyCar' },
        { icon: 'fa-location-dot', lbl: 'Location', val: car.location || 'Dubai' },
    ].map(f => `<div class="ov-item"><i class="fa-solid ${f.icon}"></i><div><span class="ov-lbl">${f.lbl}</span><span class="ov-val">${f.val}</span></div></div>`).join('');

    // Similar cars
    const similar = carData.filter(c => c.brand === car.brand && c.id !== car.id).slice(0, 3);
    const simEl = document.getElementById('similarCarsList');
    if (simEl) simEl.innerHTML = similar.map(c => `
        <div class="similar-card" data-car-id="${c.id}">
          <img src="${(c.imgs || [c.img])[0]}" alt="${c.model}" />
          <div class="similar-info"><div class="similar-model">${c.model}</div><div class="similar-price">$${c.price.toLocaleString()}</div></div>
        </div>`).join('');
    simEl?.querySelectorAll('.similar-card').forEach(card => card.addEventListener('click', () => openCarDetail(card.dataset.carId, 'brand')));

    // Comments reset
    document.getElementById('commentsList').innerHTML = '';

    showPage('carDetailPage');
}

function updateMainGalleryImg() {
    const mainImg = document.getElementById('detailMainImg');
    if (mainImg) mainImg.src = currentGalleryImgs[currentGalleryIdx];
    document.querySelectorAll('.detail-thumb').forEach((t, i) => t.classList.toggle('active', i === currentGalleryIdx));
}

document.getElementById('galPrev')?.addEventListener('click', () => { currentGalleryIdx = (currentGalleryIdx - 1 + currentGalleryImgs.length) % currentGalleryImgs.length; updateMainGalleryImg(); });
document.getElementById('galNext')?.addEventListener('click', () => { currentGalleryIdx = (currentGalleryIdx + 1) % currentGalleryImgs.length; updateMainGalleryImg(); });
document.getElementById('carDetailBack')?.addEventListener('click', () => {
    if (previousPage === 'brand' && currentBrand) { showPage('brandPage'); }
    else { showPage('main'); }
});

/* ── CLICK DELEGATION for View Details ── */
document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-car-id]');
    if (!btn) return;
    const id = btn.dataset.carId;
    const ctx = btn.dataset.context || (btn.closest('#brandCarsGrid') ? 'brand' : 'main');
    if (btn.classList.contains('btn-view') || btn.closest('.cc-img')) {
        openCarDetail(id, ctx);
    }
});

/* ── COMMENTS ── */
document.getElementById('commentSendBtn')?.addEventListener('click', function () {
    const textarea = document.querySelector('.comments-input');
    const text = textarea?.value?.trim();
    if (!text) return;
    const list = document.getElementById('commentsList');
    const item = document.createElement('div');
    item.className = 'comment-item';
    item.innerHTML = `<div class="comment-av">G</div><div class="comment-body"><strong>Guest</strong><span class="comment-time">Just now</span><p>${text}</p></div>`;
    list.prepend(item);
    if (textarea) textarea.value = '';
});

/* ── FAQ ACCORDION ── */
document.addEventListener('click', function (e) {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const answer = item?.querySelector('.faq-a');
    const icon = q.querySelector('.faq-icon');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = '0';
        const ic = i.querySelector('.faq-icon');
        if (ic) { ic.classList.remove('fa-minus'); ic.classList.add('fa-plus'); }
    });
    if (!isOpen && answer) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) { icon.classList.remove('fa-plus'); icon.classList.add('fa-minus'); }
    }
});

/* ── FILTER ── */
function applyFilters() {
    const max = parseInt(document.getElementById('priceRange').value, 10);
    const brands = [...document.querySelectorAll('[data-filter="brand"]:checked')].map(e => e.value);
    const fuels = [...document.querySelectorAll('[data-filter="fuel"]:checked')].map(e => e.value);
    const years = [...document.querySelectorAll('[data-filter="year"]:checked')].map(e => parseInt(e.value, 10));
    const gears = [...document.querySelectorAll('[data-filter="gear"]:checked')].map(e => e.value);
    renderCars(carData.filter(c =>
        (!brands.length || brands.includes(c.brand)) &&
        (!fuels.length || fuels.includes(c.fuel)) &&
        (!years.length || years.includes(c.year)) &&
        (!gears.length || gears.includes(c.gear)) &&
        c.price <= max
    ));
}
function resetAll() {
    document.querySelectorAll('[data-filter]').forEach(el => el.checked = true);
    const pr = document.getElementById('priceRange'), pd = document.getElementById('priceDisplay');
    if (pr) pr.value = 250000;
    if (pd) pd.textContent = '$250,000';
    renderCars(carData);
}
document.getElementById('applyFilter')?.addEventListener('click', applyFilters);
document.getElementById('resetFilter')?.addEventListener('click', resetAll);
document.getElementById('resetFilter2')?.addEventListener('click', resetAll);
document.getElementById('priceRange')?.addEventListener('input', function () {
    const pd = document.getElementById('priceDisplay');
    if (pd) pd.textContent = `$${parseInt(this.value).toLocaleString()}`;
});

/* ── SEARCH ── */
function doSearch() {
    const type = document.getElementById('searchType')?.value || '';
    const price = document.getElementById('searchPrice')?.value || '';
    const fuel = document.getElementById('searchFuel')?.value || '';
    const text = (document.getElementById('searchTextInput')?.value || '').toLowerCase().trim();
    document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' });
    const maxP = price ? parseInt(price, 10) : Infinity;
    renderCars(carData.filter(c => {
        if (type && c.type !== type) return false;
        if (fuel && c.fuel !== fuel) return false;
        if (c.price > maxP) return false;
        if (text && !`${c.name} ${c.model} ${c.brand} ${c.fuel} ${c.type}`.toLowerCase().includes(text)) return false;
        return true;
    }));
}
document.getElementById('searchBtn')?.addEventListener('click', doSearch);
document.getElementById('searchTextInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

/* ── VOICE SEARCH ── */
const voiceBtn = document.getElementById('voiceBtn'), micIcon = document.getElementById('micIcon');
const voiceToast = document.getElementById('voiceToast'), voiceTextEl = document.getElementById('voiceToastText');
const searchInput = document.getElementById('searchTextInput');
let isListening = false, recognition = null;
function showToast(msg) { if (voiceTextEl) voiceTextEl.textContent = msg; voiceToast?.classList.add('show'); }
function hideToast() { voiceToast?.classList.remove('show'); }
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.lang = 'en-US'; recognition.interimResults = true;
    recognition.onstart = () => { voiceBtn?.classList.add('listening'); if (micIcon) micIcon.className = 'fa-solid fa-circle-stop'; showToast('🎙️ Listening…'); };
    recognition.onend = () => { voiceBtn?.classList.remove('listening'); if (micIcon) micIcon.className = 'fa-solid fa-microphone'; isListening = false; setTimeout(() => { hideToast(); doSearch(); }, 700); };
    recognition.onerror = () => { voiceBtn?.classList.remove('listening'); if (micIcon) micIcon.className = 'fa-solid fa-microphone'; isListening = false; showToast('⚠️ Could not hear. Try again.'); setTimeout(hideToast, 2500); };
    recognition.onresult = (e) => {
        let final = '', interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) e.results[i].isFinal ? (final += e.results[i][0].transcript) : (interim += e.results[i][0].transcript);
        const spoken = final || interim;
        showToast(`"${spoken}"`);
        if (searchInput) searchInput.value = spoken;
    };
    voiceBtn?.addEventListener('click', () => { if (isListening) { recognition.stop(); isListening = false; } else { recognition.start(); isListening = true; } });
} else { voiceBtn?.addEventListener('click', () => { showToast('⚠️ Voice search requires Chrome or Edge.'); setTimeout(hideToast, 3000); }); }

/* ── STAT COUNTERS ── */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10); let cur = 0;
    const step = target / (1800 / 16);
    const t = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = target >= 1000 ? `${Math.floor(cur / 1000)}K` : `${Math.floor(cur)}`; if (cur >= target) clearInterval(t); }, 16);
}
const cntObs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); cntObs.unobserve(e.target); } }), { threshold: .5 });
document.querySelectorAll('.s-num[data-target]').forEach(el => cntObs.observe(el));

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revealObserver.unobserve(e.target); } }), { threshold: .08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal-up,.reveal-right,.reveal-left').forEach(el => revealObserver.observe(el));

/* ── HEADER SCROLL ── */
const headerEl = document.getElementById('header');
window.addEventListener('scroll', () => headerEl?.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

/* ── ACTIVE NAV ── */
const navLinks = document.querySelectorAll('.nav-link');
const navObs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { navLinks.forEach(l => l.classList.remove('active')); document.querySelector(`.nav-link[href="#${e.target.id}"]`)?.classList.add('active'); } }), { threshold: .25 });
['home', 'brands-sec', 'cars', 'how-it-works', 'team', 'why-us', 'about', 'testimonials', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) navObs.observe(s); });

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger'), mobileDrawer = document.getElementById('mobileDrawer');
hamburger?.addEventListener('click', () => { const open = hamburger.classList.toggle('open'); mobileDrawer?.classList.toggle('open', open); hamburger.setAttribute('aria-expanded', open); mobileDrawer?.setAttribute('aria-hidden', !open); });
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => { hamburger?.classList.remove('open'); mobileDrawer?.classList.remove('open'); hamburger?.setAttribute('aria-expanded', 'false'); mobileDrawer?.setAttribute('aria-hidden', 'true'); }));

/* ── CUSTOM CURSOR ── */
const cursorDot = document.getElementById('cursorDot'), cursorOutline = document.getElementById('cursorOutline'), ambientLight = document.getElementById('ambientLight');
window.addEventListener('mousemove', e => {
    if (cursorDot) { cursorDot.style.left = `${e.clientX}px`; cursorDot.style.top = `${e.clientY}px`; }
    if (cursorOutline) cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 120, fill: 'forwards' });
    if (ambientLight) ambientLight.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 900, fill: 'forwards' });
}, { passive: true });
document.querySelectorAll('a,button,input,select,label,.car-card,.offer-card,.brand-chip,.why-card,.team-card,.testi-card,.how-card,.ab-feat,.mega-brand-item,.mega-list-btn,.faq-q,.similar-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline?.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorOutline?.classList.remove('hovering'));
});

/* ── HERO PARTICLES ── */
const pWrap = document.getElementById('particles');
if (pWrap) for (let i = 0; i < 55; i++) { const p = document.createElement('span'); p.classList.add('particle'); const s = Math.random() * 4 + 1; p.style.cssText = `left:${Math.random() * 100}%;bottom:-5%;width:${s}px;height:${s}px;animation-duration:${Math.random() * 10 + 12}s;animation-delay:${Math.random() * 14}s;opacity:0`; pWrap.appendChild(p); }

/* ── ENGINE BTN ── */
const engineBtn = document.getElementById('engineBtn');
if (engineBtn) engineBtn.addEventListener('click', () => { engineBtn.classList.add('rumble'); engineBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Buffering…'; setTimeout(() => { engineBtn.classList.remove('rumble'); engineBtn.innerHTML = '<i class="fa-solid fa-check"></i> Playing Now'; engineBtn.style.borderColor = 'var(--n)'; engineBtn.style.color = 'var(--n)'; }, 1600); });

/* ── BACK TO TOP ── */
const bttBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => bttBtn?.classList.toggle('visible', window.scrollY > 400), { passive: true });
bttBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── FORMS ── */
document.getElementById('newsletterForm')?.addEventListener('submit', e => { e.preventDefault(); const btn = e.target.querySelector('[type="submit"]'); const orig = btn.innerHTML; btn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed!'; btn.style.background = '#22c55e'; setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3500); });
document.getElementById('nlCarabiaForm')?.addEventListener('submit', e => { e.preventDefault(); const btn = e.target.querySelector('[type="submit"]'); btn.textContent = '✓ Subscribed!'; btn.style.background = '#22c55e'; setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; e.target.reset(); }, 3500); });
document.getElementById('contactForm')?.addEventListener('submit', e => { e.preventDefault(); const btn = e.target.querySelector('[type="submit"]'); const orig = btn.innerHTML; btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!'; btn.style.background = '#22c55e'; setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset(); }, 3500); });

/* ── BUY NOW MEGA DROPDOWN ── */
(function () {
    const btn = document.getElementById('buyNowBtn'), wrap = document.getElementById('buyNowWrap'), drop = document.getElementById('megaDropdown');
    if (!btn || !drop) return;
    function openDrop() { drop.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); btn.classList.add('active'); }
    function closeDrop() { drop.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.classList.remove('active'); }
    btn.addEventListener('click', e => { e.stopPropagation(); drop.classList.contains('open') ? closeDrop() : openDrop(); });
    document.addEventListener('click', e => { if (!wrap.contains(e.target)) closeDrop(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrop(); });
    document.querySelectorAll('[data-close-mega]').forEach(el => el.addEventListener('click', () => setTimeout(closeDrop, 80)));

    /* Brand filter → open brand page */
    document.querySelectorAll('[data-brand-filter]').forEach(el => el.addEventListener('click', () => openBrandPage(el.dataset.brandFilter)));

    /* Model filter */
    document.querySelectorAll('[data-model-filter]').forEach(el => el.addEventListener('click', () => {
        showPage('main');
        const model = el.dataset.modelFilter.toLowerCase();
        renderCars(carData.filter(c => c.model.toLowerCase().includes(model)));
        setTimeout(() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }));

    /* Type / fuel filter */
    document.querySelectorAll('[data-type-filter]').forEach(el => el.addEventListener('click', () => {
        showPage('main');
        const val = el.dataset.typeFilter, isFuel = el.dataset.typeIsFuel === 'true';
        renderCars(isFuel ? carData.filter(c => c.fuel === val) : carData.filter(c => c.type === val));
        setTimeout(() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }));
})();

/* ── AUTH MODAL ── */
function openAuthModal(tab = 'login') {
    document.getElementById('authModalOverlay')?.classList.add('open');
    document.getElementById('authModal')?.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
}

function closeAuthModal() {
    document.getElementById('authModalOverlay')?.classList.remove('open');
    document.getElementById('authModal')?.classList.remove('open');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('authFormLogin');
    const signupForm = document.getElementById('authFormSignup');
    const tabLogin = document.getElementById('tabLogin');
    const tabSignup = document.getElementById('tabSignup');
    if (tab === 'login') {
        if (loginForm) loginForm.style.display = 'flex';
        if (signupForm) signupForm.style.display = 'none';
        tabLogin?.classList.add('active');
        tabSignup?.classList.remove('active');
    } else {
        if (loginForm) loginForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'flex';
        tabLogin?.classList.remove('active');
        tabSignup?.classList.add('active');
    }
}

function togglePass(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    const icon = btn.querySelector('i');
    if (icon) icon.className = isHidden ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
}

/* Login & Signup submit feedback */
document.getElementById('loginSubmitBtn')?.addEventListener('click', function (e) {
    e.preventDefault();
    const orig = this.innerHTML;
    this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in…';
    this.disabled = true;
    setTimeout(() => {
        closeAuthModal();
        this.innerHTML = orig;
        this.disabled = false;
    }, 1800);
});

document.getElementById('signupSubmitBtn')?.addEventListener('click', function (e) {
    e.preventDefault();
    const orig = this.innerHTML;
    this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account…';
    this.disabled = true;
    setTimeout(() => {
        closeAuthModal();
        this.innerHTML = orig;
        this.disabled = false;
    }, 1800);
});

/* Close modal on Escape key */
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAuthModal(); });

/* ── HOT OFFERS CAROUSEL – HOVER PAUSE ── */
(function () {
    const track = document.getElementById('offersTrack');
    if (!track) return;
    const DURATION = 32; // seconds — must match the CSS animation duration

    track.addEventListener('mouseenter', function (e) {
        const card = e.target.closest('.offer-card');
        if (!card) return;

        // Capture the current translateX from the live computed style
        const matrix = window.getComputedStyle(track).transform;
        const match = matrix.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,([^,]+),/);
        const currentTx = match ? parseFloat(match[1]) : 0;

        // Freeze the track at its current position
        track.style.transform = `translateX(${currentTx}px)`;
        track.style.animationPlayState = 'paused';
        // Store tx so we can resume from the same point
        track._pausedTx = currentTx;
    }, true);

    track.addEventListener('mouseleave', function () {
        // Total travel distance = 50% of the track width (marqueeLeft goes to -50%)
        const totalTravel = track.scrollWidth / 2;
        const tx = track._pausedTx || 0;

        // How far through the animation cycle were we? (tx is negative, so we invert)
        const progress = Math.abs(tx) / totalTravel; // 0 → 1
        const elapsed = progress * DURATION;          // seconds already consumed

        // Reset animation with a negative delay to resume from the exact spot
        track.style.transform = '';
        track.style.animationPlayState = 'running';
        track.style.animationDelay = `-${elapsed}s`;
    });
})();
/* ── SIMPLE NAV SMOOTH SCROLL (SPA-aware) ── */
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var id = this.getAttribute('href').slice(1);
    if (!id) return;
    // If any SPA page is active, close it and go back to main first
    var activeSpa = document.querySelector('.spa-page.spa-active');
    if (activeSpa) {
      showPage('main');
    }
    e.preventDefault();
    // Small delay to let showPage() restore the sections before scrolling
    setTimeout(function() {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  });
});