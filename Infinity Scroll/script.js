const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []

//Unsplash API
let count = 5
const apiKey = '8bGbuhEdtexn65Yvz2i60JKUYcrC82k7iHgoaGg5qCQ'

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++
  if (imagesLoaded === totalImages) {
    ready = true
    loader.hidden = true
    count = 30
  }
}

// helper function for setting attributes on DOM Elements

const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

// Create elements For Links & Photos, add to DOM
function displayPhotos() {
  imagesLoaded = 0
  totalImages = photosArray.length
  photosArray.forEach((photo) => {
    //create <a> to link to Unsplash
    const item = document.createElement('a')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    })

    // Create <img> for photo

    const img = document.createElement('img')

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_Description,
    })

    // Event Listener, check when each is finished loading

    img.addEventListener('load', imageLoaded)

    // Put the <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img)
    imageContainer.appendChild(item)
  })
}

// Get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    displayPhotos()
  } catch (error) {
    console.log(error)
    //catch error
  }
}

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    getPhotos()
    ready = false
  }
})

//on load

getPhotos()
