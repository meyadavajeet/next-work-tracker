const { Schema, default: mongoose } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    addedDate: {
      type: Date,
      default: new Date(),
    },
    deadlineDate: {
      type: Date,
      default: new Date(),
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default TaskModel;
