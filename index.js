import express from 'express';
const app = express();

app.set('view engine', 'pug');      // tell Express to use Pug
app.set('views', './views');        // optional: path to your templates folder

// Serve static assets (CSS/JS)
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Meine Pug-Seite' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Über uns' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Kontakt' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Einloggen' });
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));
