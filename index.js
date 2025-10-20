import express from 'express';
const app = express();

app.set('view engine', 'pug');      // tell Express to use Pug
app.set('views', './views');        // optional: path to your templates folder

app.get('/', (req, res) => {
  res.render('index', { title: 'Meine Pug-Seite' });
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));
