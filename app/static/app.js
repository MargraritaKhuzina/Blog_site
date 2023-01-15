// Modals

const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");

modalBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    // console.log('clicked')
    let $this = event.currentTarget;
    let modalId = $this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector(".modal__content");

    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    modal.classList.add("show");
    body.classList.add("no-scroll");

    // console.log(modalId)

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 3);
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget.closest(".modal");

    let modalContent = currentModal.querySelector(".modal__content");
    modalContent.removeAttribute("style");

    setTimeout(() => {
      currentModal.classList.remove("show");
      body.classList.remove("no-scroll");
    }, 200);
  });
});

modal.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentModal = event.currentTarget;

    let modalContent = currentModal.querySelector(".modal__content");
    modalContent.removeAttribute("style");

    setTimeout(() => {
      currentModal.classList.remove("show");
      body.classList.remove("no-scroll");
    }, 200);
  });
});

// Burger menu

const navBurger = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const page = document.getElementById("page");

navBurger.addEventListener("click", (event) => {
  if (body.classList.contains("active")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar);
  page.appendChild(mask);

  body.classList.add("active");
  sidebar.classList.add("active");
  navBurger.classList.add("active");
}

function closeSidebar() {
  body.classList.remove("active");
  sidebar.classList.remove("active");
  navBurger.classList.remove("active");

  document.querySelector(".page__mask").remove();
}

// Textarea

const textArea = document.querySelectorAll("[data-authoresize]");

textArea.forEach((item) => {
  let textAreaH = item.offsetHeight;

  item.addEventListener("input", (event) => {
    let $this = event.target;

    $this.style.height = textAreaH + "px";
    $this.style.height = $this.scrollHeight + "px";
  });
});
