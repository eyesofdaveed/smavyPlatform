class Entity {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }

    async add(entity, res) {
        try {
            const createdEntity = await this.entityModel.save(entity);
            res.status(200).json(createdEntity);
        } catch (err) {
            console.log(err);
        }
    }

    async get(res) {
        try {
            let id = req.params.id;
            let entity = await this.entityModel.findByPk(id);
            if (data)
                return res.status(200).json({ entity })
            else
                return res.status(400).json({ success: false, error: "No such user present", data: [] });
            } catch (err) {
                console.log(err);
            }
        }

    async getAll(res) {
        try {
            const entities = await this.entityModel.find();
            res.status(200).json(entities);
        } catch (err) {
            console.log(err);
        }
    }

    async update(res) {
        try {
            const entities = await this.entityModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
            });
            res.status(200).json(entities);
        } catch (err) {
            return res.status(400).json({ message: err.errors });
        }
    }

    async delete(res) {
        const deletionCriteria = { _id: 123 };
        try {
            const entities = await this.entityModel.deleteOne({deletionCriteria
            });
            res.status(200).json(entities);
        } catch (err) {
            console.log(err);
        }
    }
    

    async deleteAll(res) {
        try {
            const data = await this.entityModel.destroy({where: {}, truncate: true});
        return res.status(200).json({ success: true, data: data });
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = Entity;
