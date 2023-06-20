const { list, detail } = require("../genresController");

module.exports = {
    list: async (req, res) => {
        try {
            const genres = await list();
            const RESPONSE = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: '/genres'
                },
                data: genres
            };
            res.status(200).json(RESPONSE);
        } catch (error) {
            console.log("Error while fetching genres");
            res.status(500).json({ error: "Error while fetching genres" });
        }
    },
    detail: async(req, res) => {
        const genreID = req.params.id;
        try {
            const genre = await detail(genreID);
            const RESPONSE = {
                meta: {
                    status: 200,
                    url: `/genres/${genreID}`
                },
                data: genre
            };
            res.status(200).json(RESPONSE);
        } catch (error) {
            console.log("Error while fetching genre");
            res.status(500).json({ error: "Error while fetching genre" });
        }
    }
};