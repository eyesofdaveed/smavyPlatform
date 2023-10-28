class Entity {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }

    async add(title, description, deadline, res) {
        try {
            const entity = await this.entityModel.save({
                title,
                description,
                deadline
            });
            res.status(200).json(entity);
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
