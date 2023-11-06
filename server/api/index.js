class Entity {
  constructor(entityModel) {
    this.entityModel = entityModel;
  }

  async add(entity, res) {
    try {
      const createdEntity = await this.entityModel.create(entity);
      res.status(200).json(createdEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async get(req, res) {
    try {
      let id = req.params.id;
      const data = await this.entityModel.findById(id).exec();
      if (data) return res.status(200).json({ data: data });
      else
        return res.status(400).json({
          error: `No such ${data} present`,
          data: [],
        });
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

  async update(req, res) {
    try {
      const entities = await this.entityModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(entities);
    } catch (err) {
      return res.status(400).json({ message: err.errors });
    }
  }

  async deleteById(req, res) {
    let id = req.params.id;
    try {
      const entities = await this.entityModel.deleteOne({ _id: id });
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
}

module.exports = Entity;
