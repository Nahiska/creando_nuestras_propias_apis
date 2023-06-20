const db = require('../../database/models');
const sequelize = db.sequelize;
const Movies = db.Movie;


module.exports = {
  list: async (req, res) => {
    try {
      const movies = await Movie.findAll();
      const RESPONSE = {
        meta: {
          status: 200,
          total: movies.length,
          url: '/movies'
        },
        data: movies
      };
      res.status(200).json(RESPONSE);
    } catch (error) {
      console.log("Error while fetching movies:", error);
      res.status(500).json({ error: "Error while fetching movies" });
    }
  },

  create: (req,res) => {
    Movies
    .create(
        {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }
    )
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/movies/create'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/movies/create'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
},
destroy: (req,res) => {
    let movieId = req.params.id;
    Movies
    .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
    .then(confirm => {
        let respuesta;
        if(confirm){
            respuesta ={
                meta: {
                    status: 200,
                    total: confirm.length,
                    url: 'api/movies/destroy/:id'
                },
                data:confirm
            }
        }else{
            respuesta ={
                meta: {
                    status: 204,
                    total: confirm.length,
                    url: 'api/movies/destroy/:id'
                },
                data:confirm
            }
        }
        res.json(respuesta);
    })    
    .catch(error => res.send(error))
}

};