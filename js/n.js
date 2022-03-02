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
    let temp;
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        temp = data;
        console.log("temp", temp);
        if (temp.status == false) {
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
      });
    // spinner
    if ((onclick = "getValue()")) {
      document.getElementById("spinner").style.display = "block";
    }
    error.innerText = "";
  }
  // phone checker

  // show 20 phones on display
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

// show phone details
const getMobileId = (mobilesId) => {
  console.log(mobilesId);
  fetch(`https://openapi.programming-hero.com/api/phone/${mobilesId}`)
    .then((res) => res.json())
    .then((data) => showMobileId(data.data));
};
const showMobileId = (idDetails) => {
  console.log(idDetails);
  console.log(idDetails.releaseDate);
  const addMobileId = document.getElementById("addMobileId");
  addMobileId.innerHTML = "";
  const div = document.createElement("div");
  if (idDetails.releaseDate == "") {
    const newReleaseDate = "Not found Release Date";
    div.innerHTML = `
  <div class="card p-2" style="width: 20rem;">
    <div class="d-flex justify-content-center">
         <img src="${idDetails.image}" class="card-img-top w-50" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${idDetails.name}</h5>
      <p>${newReleaseDate}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> 
        <b>ChipSet: </b>  ${idDetails.mainFeatures.chipSet} <br>
        <b>DisplaySize: </b>  ${idDetails.mainFeatures.displaySize} <br>
        <b>Memory: </b>  ${idDetails.mainFeatures.memory} <br>
        <b>Storage: </b>  ${idDetails.mainFeatures.storage} <br>
      </li>
      <li class="list-group-item"> <b>Sensors: </b>  ${idDetails.mainFeatures.sensors}</li>
      <li class="list-group-item"> 
        <b>Bluetooth: </b>  ${idDetails?.others?.Bluetooth} <br>
        <b>GPS: </b>  ${idDetails?.others?.GPS} <br>
        <b>NFC: </b>  ${idDetails?.others?.NFC} <br>
        <b>Radio: </b>  ${idDetails?.others?.Radio} <br>
        <b>USB: </b>  ${idDetails?.others?.USB} <br>
        <b>WLAN: </b>  ${idDetails?.others?.WLAN} 
      </li>
    </ul>
  </div>
  `;
    addMobileId.appendChild(div);
  } else {
    div.innerHTML = `
  <div class="card p-2" style="width: 20rem;">
    <div class="d-flex justify-content-center">
         <img src="${idDetails.image}" class="card-img-top w-50" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${idDetails.name}</h5>
      <p>${idDetails.releaseDate}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> 
        <b>ChipSet: </b>  ${idDetails.mainFeatures.chipSet} <br>
        <b>DisplaySize: </b>  ${idDetails.mainFeatures.displaySize} <br>
        <b>Memory: </b>  ${idDetails.mainFeatures.memory} <br>
        <b>Storage: </b>  ${idDetails.mainFeatures.storage} <br>
        </li>
      <li class="list-group-item"> <b>Sensors: </b>  ${idDetails.mainFeatures.sensors}</li>
      <li class="list-group-item"> 
        <b>Bluetooth: </b>  ${idDetails?.others?.Bluetooth} <br>
        <b>GPS: </b>  ${idDetails?.others?.GPS} <br>
        <b>NFC: </b>  ${idDetails?.others?.NFC} <br>
        <b>Radio: </b>  ${idDetails?.others?.Radio} <br>
        <b>USB: </b>  ${idDetails?.others?.USB} <br>
        <b>WLAN: </b>  ${idDetails?.others?.WLAN} 
      </li>
    </ul> 
  </div>
  `;
    addMobileId.appendChild(div);
  }
};
