const express         = require ( 'express' );
const app             = express();
const PORT            = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log('===========================');
  console.log('Photo app on port: ', PORT);
  console.log('===========================');
});
