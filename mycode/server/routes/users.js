import express from "express"
import { addRemoveFriend, getUser, getUserFriends } from "../controllers/users"
import { verifyToken } from "../middleware/auth"




const router = express.Router()

// read
router.get('/:id', verifyToken, getUser)
router.get('/:id/friends', verifyToken, getUserFriends)


// updates
router.patch('/:id/:friendId', verifyToken, addRemoveFriend)


export default router;