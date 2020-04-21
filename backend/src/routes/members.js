var express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');

const MemberController = require('../controllers/memberController');

var routes = express.Router();

// INDEX ROUTE
routes.get('/', celebrate({
    // Use this only for extreme cases, instead, make the selection on front-end
    [Segments.QUERY]: Joi.object().keys({
        name: Joi.string().allow('').optional().default(''),
        team: Joi.string().allow('').optional().default(''),
        hasCar: Joi.number().optional().default(0)
    })
}), MemberController.index);

// CREATE ROUTE
routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        realName: Joi.string().optional().default(''),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        wpp: Joi.string().required().min(10).max(11),
        team: Joi.string().required(),
        image: Joi.string().optional().default(''),
        course: Joi.string().required(),
        hasCar: Joi.number().optional(),
        coord: Joi.boolean().optional()
    })
}), MemberController.create);

// SHOW ROUTE
routes.get('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    })
}), MemberController.show);

// UPDATE ROUTE
routes.put('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        realName: Joi.string().optional().default(''),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        wpp: Joi.string().required().min(10).max(11),
        team: Joi.string().required(),
        image: Joi.string().optional().default(''),
        course: Joi.string().required(),
        hasCar: Joi.number().optional(),
        coord: Joi.boolean().optional()
    })
}), MemberController.update);

// DESTROY ROUTE
routes.delete('/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    })
}), MemberController.destroy);

module.exports = routes;