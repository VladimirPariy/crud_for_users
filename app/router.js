import {Router} from 'express';import Users from "./UsersController.js";const router = new Router()router.get('/users', Users.getAllUsers)router.get('/users/:id', Users.getOneUser)router.post('/users', Users.createUser)router.put('/users', Users.updateUser)router.delete('/users/:id', Users.deleteOneUser)router.delete('/users', Users.deleteAllUsers)export {router};