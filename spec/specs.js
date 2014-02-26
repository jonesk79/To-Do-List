describe("Tasks", function() {
  describe("addTask", function() {
    it("should add tasks", function() {
      var testTask = Object.create(Task);
      var testTasks = Object.create(Tasks);
      testTask.todo = "Vacuum floors";
      testTasks.tasks = [];
      testTasks.addTask(testTask.todo);
      testTasks.tasks[0].should.equal("Vacuum floors");
    });
  });
});

describe("Task", function() {
  describe("valid", function() {
    it("should be well formmated", function() {
      var testTask = Object.create(Task);
      testTask.todo = "I need some tp";
      testTask.valid().should.equal(true);
    });
  });
});
