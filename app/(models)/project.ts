
import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const projectSchema = new Schema(
    {
        title: String,
        description: String,
        githubLink: String,
        link: String,
        image: String,
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
