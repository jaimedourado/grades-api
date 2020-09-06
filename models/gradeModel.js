export default (mongoose) => {
  const gradeSchema = mongoose.schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      min: 0,
      require: true,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  gradeSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
  });

  const gradeModel = mongoose.Model('grades', gradeSchema, 'grades');

  return gradeModel;
};
