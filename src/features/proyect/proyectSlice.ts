import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { proyectsData } from "../../data/proyects";

export const proyectSlice = createSlice({
  name: "proyects",
  initialState: proyectsData, //  initialState: [],
  reducers: {
    addProyect: (state, action) => {
      //State es nuestro valio inicial
      // Action es lo que mandamos en el parametro
      state.push(action.payload); //Esta permitido pero no lo mejor
      // [...state, action.payload];

      // const navigate = useNavigate();
      // navigate("/proyect" + action.payload.id);
    },
    deleteProyect: (state, action) => {
      const taskIndex: any = state.findIndex(
        (e: any) => e.id == action.payload
        );
        if (taskIndex !== -1) {
          state.splice(taskIndex, 1);
          
          // const navigate = useNavigate();
        // navigate("/");
      }
    },
  },
});

//exportar funciones
export const { addProyect, deleteProyect } = proyectSlice.actions;

//Llamamos el reducer en el store
export default proyectSlice.reducer;
