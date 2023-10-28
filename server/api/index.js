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

    async getAll(res) {
        try {
            const entities = await this.entityModel.find();
            res.status(200).json(entities);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Entity;