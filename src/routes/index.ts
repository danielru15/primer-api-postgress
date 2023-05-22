import { Router } from "express"
import { getUsers,getUserId,crearteUser,deleteUser,updateUser } from "../controllers/controller"

const router = Router()

router.get('/users',getUsers)
router.get('/users/:id',getUserId)
router.post('/users',crearteUser)
router.delete('/users/:id',deleteUser)
router.put('/users/:id',updateUser)

export default router
