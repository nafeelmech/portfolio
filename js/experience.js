const experienceDetails = {
  hemas: `
    <h2>Intern - Manufacturing</h2>
    <h4>HEMAS Holdings PLC | Nov 2025 - Apr 2026</h4>
    <p>Worked in a manufacturing environment supporting production operations, continuous improvement activities, layout planning, and utility maintenance.</p>
    <ul>
      <li>Worked on productivity and process improvement initiatives in third-party (3P) plants.</li>
      <li>Performed give-away calculations to optimize material usage and reduce material wastage.</li>
      <li>Assisted in process improvement and loss reduction activities.</li>
      <li>Initiated Six Sigma to reduce process variation and decrease defect rates.</li>
      <li>Assisted in daily production operations and routine activities.</li>
      <li>Performed break down maintenance in third-party (3P) plants.</li>
      <li>Collaborated with engineering teams in their daily maintenance and project activities including automation project.</li>


    </ul>
  `,
  slpa: `
    <h2>Trainee</h2>
    <h4>Sri Lanka Ports Authority | Sep 2022 - Mar 2023</h4>
    <p>Completed six-months industrial training in mechanical works engineering division and electrical and electronic engineering division at Sri Lanka Ports Authority.</p>
    <ul>
    <ul>
    <li>Gained hands-on experience in machining operations including turning, facing, thread cutting, milling, drilling, and fitting using lathe, milling, and boring machines.</li>
    <li>Performed metal fabrication activities including arc welding and oxy-acetylene gas cutting for workshop projects.</li>
    <li>Assisted welders and supervisors during a special pipeline installation project.</li>
    <li>Participated in practical training on three-phase motor rewinding and electrical maintenance.</li>
    <li>Assisted electricians and supervisors during high-voltage (HV) cable installation and maintenance work.</li>
    </ul>

    </ul>
  `,
};

function openExpModal(type) {
  document.getElementById("modalContent").innerHTML = experienceDetails[type];
  document.getElementById("expModal").classList.add("active");
}

function closeExpModal() {
  document.getElementById("expModal").classList.remove("active");
}
const experiencePhotos = {
  slpa: {
    title: "Sri Lanka Ports Authority - Training Photos",
    photos: [
      "images/slpa-1.jpg",
      "images/slpa-2.jpg",
      "images/slpa-3.jpg",
      "images/slpa-4.jpg",
      "images/slpa-5.jpg",
      "images/slpa-6.jpg",
      "images/slpa-7.jpg",
      "images/slpa-8.jpg",
      "images/slpa-9.jpg",
      "images/slpa-10.jpg",
      "images/slpa-11.jpg",
    ],
  },

  hemas: {
    title: "Hemas Consumer Brands - Internship Photos",
    photos: ["images/hemas-1.jpg", "images/hemas-2.jpg", "images/hemas-3.jpg"],
  },
};

function openPhotoGallery(type) {
  const gallery = experiencePhotos[type];
  const photoModal = document.getElementById("photoModal");
  const photoTitle = document.getElementById("photoModalTitle");
  const photoGrid = document.getElementById("photoGrid");

  photoTitle.textContent = gallery.title;
  photoGrid.innerHTML = "";

  gallery.photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Work photo";
    photoGrid.appendChild(img);
  });

  photoModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePhotoGallery() {
  document.getElementById("photoModal").classList.remove("active");
  document.body.style.overflow = "auto";
}
