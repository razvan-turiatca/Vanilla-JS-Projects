// main module

import { tmdbs, ss } from './boot.mjs'

tmdbs.get({
  method: 'GET',
  url: '/movie/popular',
  onSuccess: (data) => {
    console.log(data)
    ss.set({ url: '/movie/popular', data })
  },
})
