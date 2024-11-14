import {
    createApp,
    ref,
    onMounted,
    computed,
    reactive,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import * as coms from './communitionManager.js'

createApp({
    setup() {

        const nom = ref('Kevin');
        const divActivo = ref("paginaDeInicio");
        const data = reactive({
            name: "",
            apellido: "",
            edad: '',
        });
        const dataJSON = reactive({ data: {} });
        const peliculas = reactive([]);
        const loading = ref(false);


        function cambiarPantalla(nom) {
            divActivo.value = nom;
        }

        function introducirDatos() {
            console.log("DATA HECHO MANO JSON: ", data);
        }

        function introducirDatosJson(newNom) {
            console.log(newNom);
            console.log("DATA HECHO MANO JSON: ", dataJSON.data);

            divActivo.value = newNom;
        }

        async function fetchPeliculas(newDiv, newNom) {
            divActivo.value = newDiv;
            loading.value = true;

            try {
                peliculas.value = await coms.getName(newNom);
                console.log(peliculas.value);

            } catch (error) {
                console.log(error);

                peliculas.value = []
            } finally {
                loading.value = false;
            }

        }


        return {
            nom,
            divActivo,
            data,
            dataJSON,
            peliculas,
            loading,

            cambiarPantalla,
            introducirDatos,
            introducirDatosJson,
            fetchPeliculas,

        }
    }
}).mount('#app')