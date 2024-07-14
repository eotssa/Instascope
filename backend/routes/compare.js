const express = require('express')
const router = express.Router()

// Helper function to parse user input
function parseUserInput(input) {
  const lines = input.split('\n').filter((line) => line.trim() !== '')
  const users = []

  for (let i = 0; i < lines.length; i++) {
    const username = lines[i]
    const name =
      i + 1 < lines.length && !lines[i + 1].includes('profile picture')
        ? lines[i + 1]
        : ''

    users.push({
      username,
      name,
    })

    i += name ? 1 : 0 // Adjust the index for users with the third line
  }

  return users
}

// Helper function to compare followers and following
function compareFollowersAndFollowing(followers, following) {
  const followersUsernames = new Set(followers.map((user) => user.username))
  const followingUsernames = new Set(following.map((user) => user.username))

  const notFollowingBack = followers.filter(
    (user) => !followingUsernames.has(user.username)
  )
  const notFollowedBy = following.filter(
    (user) => !followersUsernames.has(user.username)
  )

  return {
    notFollowingBack,
    notFollowedBy,
  }
}

router.post('/', (req, res) => {
  try {
    const { followersInput, followingInput } = req.body

    if (!followersInput || !followingInput) {
      throw new Error('Both followers and following inputs are required')
    }

    const followers = parseUserInput(followersInput)
    const following = parseUserInput(followingInput)

    const { notFollowingBack, notFollowedBy } = compareFollowersAndFollowing(
      followers,
      following
    )

    res.json({
      notFollowingBack,
      notFollowedBy,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
