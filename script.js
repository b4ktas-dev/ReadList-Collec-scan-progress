
const allCards = [
  { title: "One Piece", chap: "12/1157", img: "https://japondemande.com/cdn/shop/files/product_book_manga_op-108.jpg?v=1712885611", summary: "Luffy part à l'aventure pour devenir roi des pirates.", bio: "Manga de Eiichiro Oda depuis 1997.", details: "Genre: Shonen, Aventure. Editeur: Shueisha." },
  { title: "Bleach", chap: "7/686.5", img: "https://mangamate.shop/cdn/shop/products/bleach-vol-48-9781421543017_hr.jpg?v=1626992008", summary: "Ichigo devient un Shinigami pour protéger le monde des esprits.", bio: "Manga de Tite Kubo publié de 2001 à 2016.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Naruto", chap: "23/40", img: "https://bdi.dlpdomain.com/album/9782871299875/couv/M533x666/naruto-t26.jpg", summary: "Naruto rêve de devenir Hokage.", bio: "Manga de Masashi Kishimoto, 1999-2014.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Tokyo Ghoul", chap: "5/25", img: "https://www.readerswarehouse.co.za/cdn/shop/files/tokyo-ghoul-vol-19781421580364-313751.jpg?v=1714454256", summary: "Ken Kaneki devient un hybride humain-goule.", bio: "Manga de Sui Ishida.", details: "Genre: Seinen, Horreur. Editeur: Shueisha." },
  { title: "Rurouni Kenshin", chap: "10/35", img: "https://m.media-amazon.com/images/I/61dlhXKyimL._UF1000,1000_QL80_.jpg", summary: "Kenshin vagabond cherche rédemption.", bio: "Manga de Nobuhiro Watsuki.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Sun Ken Rock", chap: "3/25", img: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/15_9782350785127_1_75.jpg", summary: "Ken Rock devient un boss de gang.", bio: "Manga de Boichi.", details: "Genre: Seinen, Action. Editeur: Daewon." },
  { title: "Death Note", chap: "15/50", img: "https://www.universal-comics.com/media/products/159879/159879-0-big.jpg", summary: "Light utilise un cahier mortel pour punir les criminels.", bio: "Manga de Tsugumi Ohba et Takeshi Obata.", details: "Genre: Thriller, Psychologique. Editeur: Shueisha." },
  { title: "GTO", chap: "8/25", img: "https://m.media-amazon.com/images/I/81VDeAyH1GL._UF1000,1000_QL80_.jpg", summary: "Onizuka, prof déjanté mais génial.", bio: "Manga de Tohru Fujisawa.", details: "Genre: Shonen, Comédie. Editeur: Kodansha." },
  { title: "Slam Dunk", chap: "0/20", img: "https://bdi.dlpdomain.com/album/9782505076506/couv/M533x666/slam-dunk-star-edition-t1.jpg", summary: "Basket et compétition entre élèves.", bio: "Manga de Takehiko Inoue.", details: "Genre: Shonen, Sport. Editeur: Shueisha." },
  { title: "Hunter X Hunter", chap: "0/402", img: "https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5977324-1.jpg", summary: "Gon part à l'aventure pour retrouver son père.", bio: "Manga de Yoshihiro Togashi.", details: "Genre: Shonen, Aventure. Editeur: Shueisha." },
  { title: "Dragon Ball", chap: "5/520", img: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/16_9782723434621_1_75.jpg", summary: "Goku et ses amis protègent la Terre.", bio: "Manga de Akira Toriyama.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "One Punch Man", chap: "10/125", img: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/74/fe/fe/16711284/1507-1/tsp20250325122732/Fullmetal-Alchemist-Perfect-tome-18.jpg", summary: "Saitama bat tous ses ennemis en un coup.", bio: "Manga de ONE et Yusuke Murata.", details: "Genre: Shonen, Comédie. Editeur: Shueisha." },
];

const cardsPerPage = 10;
let currentPage = 1;

function renderCards() {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const pageCards = allCards.slice(start, end);

  pageCards.forEach(card => {
    container.innerHTML += `
      <div class="flex flex-col items-center cursor-pointer cardItem" data-title="${card.title}">
        <div class="bg-gray-800 rounded-xl overflow-hidden w-40 h-60 transform transition-transform duration-300 hover:scale-105">
          <img src="${card.img}" alt="${card.title}" class="w-full h-full object-cover">
        </div>
        <h3 class="text-white font-semibold mt-2 text-center">${card.title}</h3>
        <p class="text-gray-400 text-sm">Chapitre ${card.chap}</p>
      </div>
    `;
  });

  // Modal listeners
  document.querySelectorAll(".cardItem").forEach(cardEl => {
    const title = cardEl.dataset.title;
    cardEl.addEventListener("click", () => openModal(title));
  });
}

function goToPage(page) {
  const maxPage = Math.ceil(allCards.length / cardsPerPage);
  if(page < 1 || page > maxPage) return;
  currentPage = page;
  renderCards();
}

// --- Modal ---
const modal = document.getElementById("modalBox");
const modalContent = modal.querySelector("div");
const closeModalBtn = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalBio = document.getElementById("modalBio");
const modalDetails = document.getElementById("modalDetails");
const modalChap = document.getElementById("modalChap");

function openModal(title){
  const card = allCards.find(c => c.title === title);
  modalImg.src = card.img;
  modalTitle.textContent = card.title;
  modalSummary.textContent = "Résumé : " + card.summary;
  modalBio.textContent = "Bio : " + card.bio;
  modalDetails.textContent = "Détails : " + card.details;
  modalChap.textContent = card.chap; // juste affichage, plus de modification
  modal.classList.remove("hidden");
  requestAnimationFrame(()=> {
    modalContent.classList.remove("scale-75","opacity-0");
    modalContent.classList.add("scale-100","opacity-100");
  });
}

function closeModal(){
  modalContent.classList.remove("scale-100","opacity-100");
  modalContent.classList.add("scale-75","opacity-0");
  setTimeout(()=> modal.classList.add("hidden"), 300);
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });

// Affichage initial
renderCards();
