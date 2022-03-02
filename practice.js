const getValue = () => {
  const error = document.getElementById("error");
  const error1 = document.getElementById("error1");
  const searchField = document.getElementById("searchValue");
  const searchValue = searchField.value;
  searchField.value = "";
  // value checker
  if (!isNaN(searchValue) || searchValue == "") {
    error.innerText = "Please search by name";
  } else {
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => searchItems(data));
    // spinner
    if ((onclick = "getValue()")) {
      document.getElementById("spinner").style.display = "block";
    }
    error.innerText = "";
  }
  const searchItems = (searchMobiles) => {
    const searchField = document.getElementById("searchValue");
    const searchValue = searchField.value;
    // phone checker
    if (searchMobiles.status == false) {
      error1.innerText = "Phone is not found";
      document.getElementById("spinner").style.display = "none";
      document.getElementById("hideAddToCart").style.display = "none";
      document.getElementById("hideAddMobileId").style.display = "none";
    } else {
      fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
      )
        .then((res) => res.json())
        .then((data) => getItems(data.data.slice(0, 20)));
      //
      if (searchMobiles.status == true) {
        document.getElementById("hideAddToCart").style.display = "block";
        document.getElementById("hideAddMobileId").style.display = "block";
      }
      error1.innerText = "";
    }
    // show 20 phones on display
  };
};
const getItems = (searchMobiles) => {
  const addToCart = document.getElementById("addToCart");
  addToCart.innerHTML = "";
  searchMobiles.forEach((searchMobile) => {
    console.log(searchMobile);
    const div = document.createElement("div");
    div.innerHTML = `<div class="col ">
      <div class="card h-50 border-0 ">
      <div class="d-flex justify-content-center">
         <img src="${searchMobile.image}" class="text-center w-50 card-img-top" alt="...">
      </div>
        <div class="card-body">
          <h5 class="card-title text-center">${searchMobile.phone_name}</h5>
          <h5 class="card-title text-center">brand: ${searchMobile.brand}</h5>
        </div>
        <div class="text-center">
        <a href="#" onclick="getMobileId('${searchMobile.slug}')" class=" text-center btn btn-primary ">More Details</a>
        </div>
      </div>
    </div>`;
    addToCart.appendChild(div);
    // spinner
    if ((onclick = "getValue()")) {
      document.getElementById("spinner").style.display = "none";
    }
  });
};
