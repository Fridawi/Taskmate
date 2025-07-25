function AddTask({ task, setTask, taskList, setTaskList }) {
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const taskName = e.target.task.value.trim();
    if (!taskName) return;

    if (task && task.id) {
      // Update existing task
      const updatedList = taskList.map((t) =>
        t.id === task.id
          ? {
              ...t,
              name: taskName,
              time: `${date.toLocaleTimeString()} : ${date.toLocaleDateString()}`,
            }
          : t
      );
      setTaskList(updatedList);
      setTask({});
    } else {
      // Add new task
      const newTask = {
        id: date.getTime(), // Unique ID based on timestamp
        name: taskName,
        time: `${date.toLocaleTimeString()} : ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
    }
    e.target.reset();
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="false"
          placeholder="add task"
          maxLength="25"
          defaultValue={task ? task.name : ""}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;
