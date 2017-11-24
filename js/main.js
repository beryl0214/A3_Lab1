(function() {
  var carImages = document.querySelectorAll('.data-ref'),
      carName = document.querySelector('.modelName'),
      priceInfo = document.querySelector('.priceInfo'),
      modelInfo = document.querySelector('.modelDetails'),
      appliedClass;

      function changeElement() {
        let carIndex = carData[this.id];

        carName.firstChild.nodeValue = carIndex.name;
        priceInfo.firstChild.nodeValue = carIndex.price;
        modelInfo.innerHTML = carIndex.description;

        carImages.forEach(function(element, index) {
          element.classList.add('nonActive');
        })

        this.classList.remove('nonActive');

        appliedClass = this.id;
      }




      carImages.forEach(function(element, index) {
      element.addEventListener('click', changeElement, false);
    });

})();
