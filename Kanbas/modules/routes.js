import * as dao from "./dao.js";
import * as courseDao from "../courses/dao.js";
function ModuleRoutes(app) {
    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const module = await dao.updateModule(mid, req.body);
        res.sendStatus(module ? 204 : 404);
    });  
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.sendStatus(status.deletedCount > 0 ? 204 : 404);
    });    
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const course = await courseDao.findCourseById(cid);
        const newModule = {
          ...req.body,
          course: course.id,
        };
        const module = await dao.createModule(newModule);
        res.send(module);
    });
    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const course = await courseDao.findCourseById(cid);
        const modules = await dao.findAllModules(course.id);
        res.send(modules);
    });
}
export default ModuleRoutes;