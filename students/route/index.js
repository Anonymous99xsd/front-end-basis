const getRouter = require('router');
const router = getRouter();
const student = require('../model/user');
const queryString = require('querystring');
const template = require('art-template');

router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})
router.get('/list', async (req, res) => {
    let students = await student.find();
    let html = template('list.art', {
        students: students
    });
    res.end(html);
})
router.post('/add', (req, res) => {
    let formDate = '';
    req.on('data', param => {
        formDate += param;
    })
    req.on('end', async () => {
        await student.create(queryString.parse(formDate));
        res.writeHead(301, {
            location: '/list'
        });
        res.end();
    })
});

module.exports = router;