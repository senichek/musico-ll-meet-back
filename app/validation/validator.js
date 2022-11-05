const { ApiError } = require('../helpers/errorHandler');

module.exports = (prop, schema) => async (req, _, next) => {
    try {
        // la "value" on s'en fiche on la récupère pas
        // request['body'] == request.body
        await schema.validateAsync(req[prop]);
        next();
    } catch (error) {
        // Je dois afficher l'erreur à l'utilisateur
        // STATUS HTTP pour une erreur de saise : 400
        // On réabille l'erreur en suivant notre propre normalisation
        next(new ApiError(error.details[0].message, { statusCode: 400 }));
    }
};
