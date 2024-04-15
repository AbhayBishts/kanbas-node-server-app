import model from "./model.js";
export const findAllCourses = () => model.find();
export const createCourse = (course) => {
    delete course._id;
    return model.create(course);
}
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });
export const findCourseById = (courseId) => model.findById(courseId);

// export const findUserById = (userId) => model.findById(userId);
// export const findUserByUsername = (username) =>  model.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
// export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
// export const deleteUser = (userId) => model.deleteOne({ _id: userId });