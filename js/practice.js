const getMobileApi =() =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then(data => addMobileApi(data.data.slice(0, 6)))
} 
getMobileApi()
const addMobileApi = mobileApis =>{
  console.log(mobileApis)
    mobileApis.forEach(mobileApi=>{
    const addMobile = document.getElementById('addMobile')
    const div = document.createElement('div')
    div.innerHTML =
    `<div class="col ">
    <div class="card h-75 border-0 ">
      <div class="d-flex justify-content-center">
          <img src="${mobileApi.image}" class="text-center w-50 card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">${mobileApi.phone_name}</h5>
      </div>
    </div>
  </div>`
  addMobile.appendChild(div)
    })
}

// search section
const getValue = ()=>{
    const error = document.getElementById('error')
    const error1 = document.getElementById('error1')
  const searchField = document.getElementById('searchValue')
  const searchValue = searchField.value
  searchField.value =""
  if(!isNaN(searchValue) || searchValue == ''){
    error.innerText = 'Please search by name'
    
  }
else{
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
  .then( res => res.json())
  .then(data => searchItems(data))
  error.innerText ='';
}
const searchItems = searchMobiles =>{
    if(searchMobiles.status == false){
        error1.innerText = 'not found'
    }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
        .then( res => res.json())
        .then(data => searchItems(data.data.slice(0, 20)))
        
      }
      const searchItems = searchMobiles =>{
        console.log(searchMobiles)
        searchMobiles.forEach(searchMobile =>{
          const addToCart = document.getElementById('addToCart')
          const div = document.createElement('div')
        div.innerHTML =
        `<div class="col ">
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
      </div>`
      addToCart.appendChild(div)
      
      
      // Display none
      if(onclick="getValue()"){
        document.getElementById('hideLatestPhone').style.display = 'none'
        // document.getElementById('hideCarousel').style.display = 'none'
      }
        } )
      }
}

}
// addId
const getMobileId = mobilesId =>{
  console.log(mobilesId)
  fetch(`https://openapi.programming-hero.com/api/phone/${mobilesId}`)
  .then(res => res.json())
  .then(data => showMobileId(data.data))
}
const showMobileId = idDetails => {
  console.log(idDetails)
  console.log(idDetails.releaseDate)
  const addMobileId = document.getElementById('addMobileId')
  addMobileId.innerHTML = '';
  const div = document.createElement('div')
  if(idDetails.releaseDate== ""){
    const newReleaseDate = 'not found'
    div.innerHTML =

    `<div class="card mb-3 border border-info" style="max-width: 1000px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${idDetails.image}" class="img-fluid rounded-start p-1" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${idDetails.name}</h5>
            <h5 class="card-title">MainFeatures: ${idDetails.mainFeatures.displaySize}</h5>
            <h5 class="card-title">Storage: ${idDetails.mainFeatures.storage}</h5>
            <h5 class="card-title">ReleaseDate: <b></b> ${newReleaseDate}</h5>
            <p> <b class="fs-3"> sensors:</b>  ${sensor}</p>
          </div>
        </div>
      </div>
    </div>
    `
    addMobileId.appendChild(div)
  }
  else{
    div.innerHTML =
    `
    <div class="card p-2" style="width: 18rem;">
    <img src="${idDetails.image}" class="card-img-top w-50" alt="...">
    <div class="card-body">
      <h5 class="card-title">${idDetails.name}</h5>
      <p>${idDetails.releaseDate}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> <b>DisplaySize: </b>  ${idDetails.mainFeatures.displaySize}</li>
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
    `
  addMobileId.appendChild(div)
  }
}


