const { isEmptyObject } = require('../utils');

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
            const id = req.params.id;
            const entity = await this.entityModel.findById(id).exec();

            if (!data) return res.status(400).json({ success: false, message: `No such ${entity} present`, data: [] });
            return res.status(200).json({ entity })
            } catch (err) {
                console.log(err);
            }
        }

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

    async update({entityId, fieldsToUpdate, res}) {
        try {
          if (isEmptyObject(fieldsToUpdate)) return;
    
          const entities = await this.entityModel.findByIdAndUpdate(entityId, {
            $set: fieldsToUpdate,
          });
          res.status(200).json(entities);
        } catch (err) {
          return res.status(400).json({ message: err.errors });
        }
      }

    async delete(res) {
        const id = req.query.id;
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
        return res.status(200).json({ success: true, data });
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = Entity;






  


  

  



