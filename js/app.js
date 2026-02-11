const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

window.addEventListener("load", () => {
  const banner = document.getElementById("cookieBanner");
  const modal = document.getElementById("cookieModal");
  const detailLink = document.getElementById("cookieDetailLink");
  const acceptButton = document.getElementById("cookieAccept");
  const rejectButton = document.getElementById("cookieReject");
  const closeButton = document.getElementById("cookieClose");
  const storageKey = "theAgencyCookieConsent";
  const body = document.body;

  if (!banner || !modal || !detailLink || !acceptButton || !rejectButton || !closeButton) {
    return;
  }

  const consentState = localStorage.getItem(storageKey);
  if (consentState !== "accepted") {
    banner.classList.remove("is-hidden");
    openModal();
  }

  detailLink.addEventListener("click", openModal);
  closeButton.addEventListener("click", () => {
    closeModal(false);
  });

  acceptButton.addEventListener("click", () => {
    localStorage.setItem(storageKey, "accepted");
    closeModal(true);
  });

  rejectButton.addEventListener("click", () => {
    localStorage.setItem(storageKey, "rejected");
    closeModal(true);
  });

  function openModal() {
    modal.classList.add("is-visible");
    body.classList.add("no-scroll");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal(hideBanner) {
    modal.classList.remove("is-visible");
    body.classList.remove("no-scroll");
    modal.setAttribute("aria-hidden", "true");
    if (hideBanner) {
      banner.classList.add("is-hidden");
    } else {
      banner.classList.remove("is-hidden");
    }
  }
});
