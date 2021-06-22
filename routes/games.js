const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response) => {
    queries.list().then(games => {
        response.json({games});
    }).catch(console.error);
});

router.get("/:id", (request, response) => {
    queries.read(request.params.id).then(game => {
        game
            ? response.json({game})
            : response.sendStatus(404)
    }).catch(console.error);
});

router.post("/", (request, response) => {
    queries.create(request.body).then(game => {
        response.status(201).json({game});
    }).catch(console.error);
});

router.delete("/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

router.put("/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(game => {
        response.json({game});
    }).catch(console.error);
});

module.exports = router;
