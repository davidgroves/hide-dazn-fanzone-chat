console.log('hide-fanzone.js loaded');

function hide() {
    const element = document.querySelector('.main__player-aside___zkzRP');
    console.log("Hiding Chat");
    if (element) {
      element.style.display = 'none';
    }
  };

  setTimeout(hide, 3000);