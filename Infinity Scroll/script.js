const imageContainer = document.getElementById('image-container')
console.log(imageContainer)
const loader = document.getElementById('loader')

let photosArray = []

//Unsplash API
const count = 10
const apiKey = '8bGbuhEdtexn65Yvz2i60JKUYcrC82k7iHgoaGg5qCQ'

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// helper function for setting attributes on DOM Elements

const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

// Create elements For Links & Photos, add to DOM
function displayPhotos() {
  photosArray.forEach((photo) => {
    console.log(photosArray)

    //create <a> to link to Unsplash
    const item = document.createElement('a')
    // item.setAttribute('href', photo.links.html)
    // item.setAttribute('target', '_blank')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    })

    // Create <img> for photo

    const img = document.createElement('img')
    // img.setAttribute('src', photo.urls.regular)
    // img.setAttribute('alt', photo.alt_description)
    // img.setAttribute('title', photo.alt_description)

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_Description,
    })

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
    // console.log(photosArray[0].links.html)
    displayPhotos()
  } catch (error) {
    console.log(error)
    //catch error
  }
}

//on load

getPhotos()
