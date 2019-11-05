import Home from '../pages/Home/Home.vue'
import History from '../pages/History/History.vue'
import HomeTown from '../pages/HomeTown/HomeTown.vue'
import Learn from '../pages/Learn/Learn.vue'
import Music from '../pages/Music/Music.vue'
import Red from '../pages/Red/Red.vue'
export default [{
    path: '/home',
    component: Home,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/homeTown',
    component: HomeTown,
  },
  {
    path: '/learn',
    component: Learn,
  },
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/red',
    component: Red,
  },
  {
    path: '/:id',
    redirect: '/home'
  },
   {
     path: '/',
     redirect: '/home'
   }
]