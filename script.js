const allCards = [
  // Page 1
  { title: "One Piece", chap: "1095/1157", type:"Chapitre", img: "https://japondemande.com/cdn/shop/files/product_book_manga_op-108.jpg?v=1712885611", modalImg: "https://i.redd.it/i9wrlfnsw4ua1.png", summary: "Luffy part à l'aventure pour devenir roi des pirates.", bio: "Manga de Eiichiro Oda depuis 1997.", details: "Genre: Shonen, Aventure. Editeur: Shueisha." },
  { title: "Bleach", chap: "7/686.5", type:"Chapitre", img: "https://mangamate.shop/cdn/shop/products/bleach-vol-48-9781421543017_hr.jpg?v=1626992008", modalImg: "https://womenwriteaboutcomics.com/wp-content/uploads/2015/08/Bleach-chapter-150-cover.jpg", summary: "Ichigo devient un Shinigami pour protéger le monde des esprits.", bio: "Manga de Tite Kubo publié de 2001 à 2016.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Naruto", chap: "0/72", type:"Chapitre", img: "https://bdi.dlpdomain.com/album/9782871299875/couv/M533x666/naruto-t26.jpg", modalImg: "https://www.radiofrance.fr/s3/cruiser-production-eu3/2022/08/ee2cd396-802f-4e6f-b8af-9726c0d7b09d/640x340_artbook2-p19.jpg", summary: "Naruto rêve de devenir Hokage.", bio: "Manga de Masashi Kishimoto, 1999-2014.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Tokyo Ghoul", chap: "2/14", type:"Volume", img: "https://www.readerswarehouse.co.za/cdn/shop/files/tokyo-ghoul-vol-19781421580364-313751.jpg?v=1714454256", modalImg: "https://i.pinimg.com/736x/2a/8b/cc/2a8bcc047b2513d55f9971fa24889f7d.jpg", summary: "Ken Kaneki devient un hybride humain-goule.", bio: "Manga de Sui Ishida.", details: "Genre: Seinen, Horreur. Editeur: Shueisha." },
  { title: "Rurouni Kenshin - Perfect Edition", chap: "0/25", type:"Volume", img: "https://media.hachette.fr/imgArticle/GLENAT/2016/9782723472302-001-X.jpeg?source=web", modalImg: "https://411mania.com/wp-content/uploads/2019/09/rurouni-kenshin-omnibus-manga-vol-4.jpg", summary: "Kenshin vagabond cherche rédemption.", bio: "Manga de Nobuhiro Watsuki.", details: "Genre: Shonen, Action. Editeur: Shueisha." },
  { title: "Sun Ken Rock", chap: "3/25", type:"Volume", img: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/15_9782350785127_1_75.jpg", modalImg: "https://i.pinimg.com/736x/9c/63/9a/9c639a70a9e805aa35e3db679cd216aa.jpg", summary: "Ken Rock devient un boss de gang.", bio: "Manga de Boichi.", details: "Genre: Seinen, Action. Editeur: Daewon." },
  { title: "Death Note", chap: "0/12", type:"Volume", img: "https://www.universal-comics.com/media/products/159879/159879-0-big.jpg", modalImg: "https://rukminim2.flixcart.com/image/704/844/kzrbiq80/poster/k/a/h/small-death-note-l-fictional-character-manga-series-art-effect-original-imagbp9whtm6jnxe.jpeg?q=90&crop=false", summary: "Light utilise un cahier mortel pour punir les criminels.", bio: "Manga de Tsugumi Ohba et Takeshi Obata.", details: "Genre: Thriller, Psychologique. Editeur: Shueisha." },
  { title: "GTO", chap: "0/25", type:"Volume", img: "https://m.media-amazon.com/images/I/81VDeAyH1GL._UF1000,1000_QL80_.jpg", modalImg: "https://preview.redd.it/my-favorite-panels-from-the-manga-the-one-part-that-teared-v0-6o0i617rsq5a1.jpg?auto=webp&s=105e991c3293adad77b5d495e178a51afcc6e55d", summary: "Onizuka, prof déjanté mais génial.", bio: "Manga de Tohru Fujisawa.", details: "Genre: Shonen, Comédie. Editeur: Kodansha." },
  { title: "Slam Dunk", chap: "0/20", type:"Volume", img: "https://bdi.dlpdomain.com/album/9782505076506/couv/M533x666/slam-dunk-star-edition-t1.jpg", modalImg: "https://de7i3bh7bgh0d.cloudfront.net/drupal/art/SLAM002.jpg", summary: "Basket et compétition entre élèves.", bio: "Manga de Takehiko Inoue.", details: "Genre: Shonen, Sport. Editeur: Shueisha." },
  { title: "Hunter X Hunter", chap: "0/402", type:"Chapitre", img: "https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5977324-1.jpg", modalImg: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/hunter-x-hunter-by-yoshihiro-togashi-goes-on-hiatus-1.JPG", summary: "Gon part à l'aventure pour retrouver son père.", bio: "Manga de Yoshihiro Togashi.", details: "Genre: Shonen, Aventure. Editeur: Shueisha." },

  // Page 2
  { title: "Dragon Ball", chap: "0/42", type:"Chapitre", img: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/16_9782723434621_1_75.jpg", modalImg: "https://fr.dragon-ball-official.com/dragonball/jp/news/2023/11/01_8.jpg?_=1753270680", summary: "Goku et ses amis protègent la Terre.", bio: "Manga de Akira Toriyama.", details: "Genre: Shonen, Action. Editeur: Shueisha." },

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
        <p class="text-gray-400 text-sm">${card.type} ${card.chap}</p>
      </div>
    `;
  });

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

// Modal
const modal = document.getElementById("modalBox");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalBio = document.getElementById("modalBio");
const modalDetails = document.getElementById("modalDetails");
const modalChap = document.getElementById("modalChap");

function openModal(title){
  const card = allCards.find(c => c.title === title);
  modalImg.src = card.modalImg;
  modalTitle.textContent = card.title;
  modalSummary.textContent = "Résumé : " + card.summary;
  modalBio.textContent = "Bio : " + card.bio;
  modalDetails.textContent = "Détails : " + card.details;
  modalChap.textContent = `${card.type} ${card.chap}`;

  modal.classList.remove("hidden");
  requestAnimationFrame(() => {
    modalContent.classList.remove("scale-75","opacity-0");
    modalContent.classList.add("scale-100","opacity-100");
  });
}

function closeModal(){
  modalContent.classList.remove("scale-100","opacity-100");
  modalContent.classList.add("scale-75","opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });

renderCards();
