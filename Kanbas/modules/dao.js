import model from "./model.js";
export const findAllModules = (cid) => model.find({ course: cid });
export const createModule = (module) => {
    delete module._id;
    return model.create(module);
}
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const findModuleById = (moduleId) => model.findById(moduleId);