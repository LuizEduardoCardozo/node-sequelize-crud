const user = require('../model/User.js');

module.exports = {

    async index ( req, res ) {

        const users = await user.findAll();
        return res.json(users);

    },

    async store ( req, res ) {

        const { name, email } = req.body;
        const new_user = await user.create({ name, email })
        return res.json(new_user);

    }

}