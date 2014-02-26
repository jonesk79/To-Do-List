var Tasks = {
  addTask: function(todo) {
    this.tasks.push(todo);
  }
};

var Task = {
  valid: function() {
    var re = /.*/;
    return re.test(this.todo);
  }
}


$(document).ready(function() {

  $("#add-task").click(function() {
      $("#new-tasks").append('<div class="a-task">' +
                                '<div class="form-group">' +
                                  '<label for="new-task">Task:</label><br>' +
                                  '<input class="new-task" type="text">' +
                                '</div><br>' +
                              '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var stop = false;

    var newTasks = Object.create(Tasks);
    newTasks.tasks = [];

    $(".a-task").each(function() {
      var inputtedTask = $(this).find("input.new-task").val();
      var newTask = Object.create(Task);
      newTask.todo = inputtedTask;

      if (newTask.valid()) {
        newTasks.tasks.push(newTask.todo);
      } else {
        alert("You have an invalid Task format");
        stop = true;
      }
    });

    $("ul#tasks").append("<li><span class='task'>" + newTasks.task + "</span></li>");


    $(".task").last().click(function() {
      $("#show-task").show();

      $("#show-task h2").text("Your Tasks");

      $("ul#todos").text("");
      newTasks.tasks.forEach(function(todo) {
        $("ul#todos").append("<li>" + todo + "</li>");
      });

    });
    this.reset();
  });
});



