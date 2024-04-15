import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    const updateCourse = async (req, res) => {
        const { id } = req.params;
        const course = req.body;
        const status = await dao.updateCourse(id, course);
        console.log(status);
        res.sendStatus(status.modifiedCount === 1 ? 200 : 404);
    };
    const deleteCourse = async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.sendStatus(status.deletedCount === 1 ? 204 : 404);
    };    
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.send(course);
    };    
    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    };
    const findCourseById = async (req, res) => {
        const { id } = req.params;
        const course = await dao.findCourseById(id);
        res.send(course);
    };
    app.get("/api/courses", findAllCourses);
    app.get("/api/courses/:id", findCourseById);
    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse);
}