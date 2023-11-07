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

  async get() {}

  async getAll({ res, pageSize = '25', pageNumber = '2' }) {
    try {
      const pageSizeInt = parseInt(pageSize);
      const pageNumberInt = parseInt(pageNumber);

      const results = await this.entityModel.find().sort({
        createdAt: -1,
      }).skip(pageSizeInt * (pageNumberInt - 1)).limit(pageSizeInt);

      res.status(200).json(results);
    } catch (err) {
      console.log(err);
    }
  }

  async update() {}

  async delete() {}

  async deleteAll() {}
}

module.exports = Entity;
