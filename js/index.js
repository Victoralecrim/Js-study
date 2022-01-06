const Hide = {
    transition() {
      document.querySelector('.burguer-container')
      .classList.toggle('change')
    },
    appear() {
      document.querySelector('.main-navigation').classList.toggle('slow')
    }
  };