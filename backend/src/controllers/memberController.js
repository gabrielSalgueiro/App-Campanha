const Member = require('../database/models/member');

module.exports = {
    index(req, res) {
        Member.find({}).sort({
            coord: -1,
            name: 1
        }).populate("team").exec( (err, members) => {
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
        var image = {};
        if (req.file) {
            image.key = req.file.key;
            image.url = req.file.location;
        }
        
        const newMember =  {
            name: req.body.name,
            realName: req.body.realName,
            email: req.body.email,
            password: req.body.password,
            wpp: req.body.wpp,
            team: req.body.team,
            image: image,
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
        Member.findById(req.params.id).populate("team").exec( (err, member) => {
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
            realName: req.body.realName,
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

    async destroy(req, res) {
        const member = await Member.findById(req.params.id);
        await member.remove();
        return res.status(204).send();
    }
}