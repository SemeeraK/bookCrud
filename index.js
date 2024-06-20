const server = require('json-server')
const middleware = server.defaults();
const book_server = server.create();
const router = server.router('db.json');
const cors = require('cors')
book_server.use(middleware)
book_server.use(cors())
book_server.use(router)
const PORT=4004
book_server.listen(PORT,()=>{
    console.log(`port started at ${(PORT)}`);
})