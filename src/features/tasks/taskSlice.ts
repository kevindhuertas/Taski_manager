import { createSlice } from "@reduxjs/toolkit";
import { tasksData } from "../../data/tasks";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: tasksData, //  initialState: [],
  reducers: {
    addTask: (state, action) => {
      //State es nuestro valio inicial
      // Action es lo que mandamos en el parametro
      state.push(action.payload); //Esta permitido pero no lo mejor
      // [...state, action.payload];
    },
    updateTask: (state, action) => {
      // let foundTask = state.find((e: any) => e.id == action.payload);
      // console.log(foundTask?.id,action);
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
    },
  },
});

//exportar funciones
export const { addTask, deleteTask } = taskSlice.actions;

//Llamamos el reducer en el store
export default taskSlice.reducer;
