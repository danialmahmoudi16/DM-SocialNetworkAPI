const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// retrieve all users and create a user
router.route('/').get(getUsers).post(createUser);

// retrieve a single user, update a user, and delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add and remove a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;