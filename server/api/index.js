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
            let entity = await this.entityModel.findById(id).exec();
            if (data)
                return res.status(200).json({ entity })
            else
                return res.status(400).json({ success: false, error: `No such ${entity} present`, data: [] });
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
        let id = req.params.id;
        const deletionCriteria = { _id: mongoose.Types.ObjectId(id) };
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
            const data = await this.entityModel.deleteMany({});
        return res.status(200).json({ success: true, data: data });
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = Entity;
