import { createSlice } from "@reduxjs/toolkit";
import { tasksData } from "../../data/tasks";
import { Task } from "../../models/Task";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[], //  initialState: [],
  reducers: {
    addTask: (state, action) => {
      //State es nuestro valio inicial
      // Action es lo que mandamos en el parametro
      // localStorage.setItem("tasks", JSON.stringify(tasks));
      state.push(action.payload); //Esta permitido pero no lo mejor
      localStorage.setItem("tasks", JSON.stringify(state.map((e)=>e)));

      // [...state, action.payload];
    },
    updateTask: (state, action) => {
      // let foundTask = state.find((e: any) => e.id == action.payload);
      // console.log(foundTask?.id,actionƒ);
      // foundTask= {
      //   title:"Hello",
      //   description :"ds",
      //   id : "2"
      // };
    },

    deleteTask: (state, action) => {
      const taskIndex: any = state.findIndex(
        (e: any) => e.id == action.payload
      );
      if (taskIndex !== -1) {
        state.splice(taskIndex, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(state.map((e)=>e)));
    },
    completeTask: (state, action) => {
      const taskIndex: any = state.findIndex(
        (e: any) => e.id == action.payload
      );
      if (taskIndex !== -1) {
        state[taskIndex].completed = !state[taskIndex].completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.map((e)=>e)));
    },
    deleteAllTaskFromProyectId:  (state, action) => {
      state = state.filter((el:Task) =>el.proyectId != action.payload)
      localStorage.setItem("tasks", JSON.stringify(state.map((e)=>e)));
    },
  },
});

//exportar funciones
export const { addTask, deleteTask, completeTask, deleteAllTaskFromProyectId} = taskSlice.actions;

//Llamamos el reducer en el store
export default taskSlice.reducer;
