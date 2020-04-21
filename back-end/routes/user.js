const express = require('express');

const router = express.Router();
const axios = require('axios');

function sendData(res, restaurantId, error) {
  const data = { error };
  if (error) {
    data.message = `Could not save restaurant ${restaurantId} to user's saved_restaurants list.`;
  } else {
    data.message = `Successfully saved restaurant ${restaurantId} to user's saved_restaurants list.`;
  }
  res.json(data);
}

// POST /save-restaurant
router.post('/save-restaurant', (req, res) => {
  const { restaurantId } = req.body;

  // TODO: save restaurantId to user's saved_restaurants list
  // req.user.markModified('saved_restaurants');
  // req.user.save(function(err, modifiedUser) {
  //  console.log(err, modifiedUser);
  // });

  axios.post('https://my.api.mockaroo.com/user_save-restaurant.json?key=71f47770', {
    restaurantId,
  })
    .then((response) => {
      const err = response.data.error;
      sendData(res, restaurantId, err);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
