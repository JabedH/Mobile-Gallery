const getMobileApi =() =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then(data => addMobileApi(data.data.slice(0, 6)))
} 
getMobileApi()
const addMobileApi = mobileApis =>{
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
  if(!isNaN(searchValue) || searchValue == ''){
    error.innerText = 'Please search by name'
  }
  
  else{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    .then( res => res.json())
    .then(data => searchItems(data.data.slice(0, 20)))
    // if(searchValue == false){
    //   error1.innerText = 'Not Found'
    // }
  }
  const searchItems = searchMobiles =>{
    searchMobiles.forEach(searchMobile =>{
      console.log(searchMobile)
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
      <a href="#" class="btn btn-primary">More details</a>
      </div>
    </div>
  </div>`
  addToCart.appendChild(div)
      
    } )
  }
  
  if(onclick="getValue()"){
    document.getElementById('hideLatestPhone').style.display = 'none'
    document.getElementById('hideCarousel').style.display = 'none'
    
  }
  

}