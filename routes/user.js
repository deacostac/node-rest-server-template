import { Router } from "express";
import { getUsers, putUsers, postUsers, deleteUsers } from '../controllers/user.js'

const router = Router()

router.get('/', getUsers )

router.put('/:id', putUsers )

router.post('/', postUsers)

router.delete('/', deleteUsers)




export {
    router
}

