import { createSlice } from "@reduxjs/toolkit";


export const proyectSlice = createSlice({
  name: "proyects",
  initialState: localStorage.getItem("projects")
    ? JSON.parse(localStorage.getItem("projects"))
    : [], //  initialState: [],
  reducers: {
    addProyect: (state, action) => {
      //State es nuestro valio inicial
      // Action es lo que mandamos en el parametro
      state.push(action.payload); //Esta permitido pero no lo mejor
      localStorage.setItem("projects", JSON.stringify(state.map((e) => e)));
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
      localStorage.setItem("projects", JSON.stringify(state.map((e) => e)));
    },
  },
});

//exportar funciones
export const { addProyect, deleteProyect } = proyectSlice.actions;

//Llamamos el reducer en el store
export default proyectSlice.reducer;
