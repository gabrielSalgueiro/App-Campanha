const Member = require('../database/models/member');

module.exports = {
    index(req, res) {
        Member.find({
            name: {
                $regex: "^" + req.query.name,
                $options: 'i'
            },
            team: {
                $regex: "^" + req.query.team
            },
            hasCar: {
                $gte: req.query.hasCar
            }
        }, (err, members) => {
            if (err) {
                return res.status(204).json({
                    error: `Error on database: ${ err.message }`
                });
            } else {
                return res.json(members);
            }
        });
    },

    create(req, res) {
        const newMember =  {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            wpp: req.body.wpp,
            team: req.body.team,
            image: req.body.image,
            course: req.body.course,
            hasCar: req.body.hasCar,
            coord: req.body.coord
        };

        Member.create(newMember, function (err, member) {
            if (err) {
                return res.status(400).json({
                    error: `Error on database: ${ err.message }`
                });
            } else {
                return res.json(member);
            }
        });
    },

    show(req, res) {
        Member.findById(req.params.id, (err, member) => {
            if (err) {
                return res.status(400).json({
                    error: `Error on database: ${ err.message }`
                });
            } else {
                return res.json(member);
            }
        });
    },

    update(req, res) {
        const newMemberInfos = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            wpp: req.body.wpp,
            team: req.body.team,
            image: req.body.image,
            course: req.body.course,
            hasCar: req.body.hasCar,
            coord: req.body.coord
        };

        Member.findByIdAndUpdate(req.params.id, newMemberInfos, { new: true }, (err, member) => {
            if (err) {
                return res.status(400).json({
                    error: `Error on database: ${ err.message }`
                });
            } else {
                return res.json(member);
            }
        });
    },

    destroy(req, res) {
        Member.findByIdAndRemove(req.params.id, function (err) {
            return res.status(204).send();
        });
    }
}