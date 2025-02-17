/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import type { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
import PostsController from '#controllers/posts_controller'

router.get('/',({response}:HttpContext)=>{
    response.redirect().toRoute('posts.home')
})
router.get('/posts',[PostsController,'index']).as('posts.home')
router.post('/posts',[PostsController,'store']).as('posts.store')
router.get('/posts/create',[PostsController,'create']).as('posts.create')
router.get('/posts/:id',[PostsController,'show']).as('posts.show')
router.get('/posts/:id/edit',[PostsController,'edit']).as('posts.edit')
router.post('/posts/:id/update',[PostsController,'update']).as('posts.update')
router.get('/posts/:id/delete',[PostsController,'destroy']).as('posts.delete')


