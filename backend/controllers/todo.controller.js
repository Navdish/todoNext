const {todoService} = require('../service');

exports.fetch = async (req, res)=>{
    try {
      const list = await todoService.fetchList()
      res.status(200).json({list, message: "List fetched successfully"})
    }
    catch (error) {
      res.status(error?.code).json({message : error?.message});
    }
}

exports.create = async (req, res)=>{
    try {
      const list = await todoService.createListItem({data : req?.body});
      res.status(201);
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}
exports.update = async (req, res)=>{
    try {
      const list = await todoService.updateListItem({data : req?.body});
      res.status(201).json({list, message: "List updated successfully"});
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}
exports.remove = async (req, res)=>{
    try {
      const list = await todoService.deleteListItem({data : req?.params});
      res.status(200).json({list, message: "List deleted successfully"});
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}