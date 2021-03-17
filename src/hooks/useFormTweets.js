import {ref} from "vue";
//importamos la referencia de vue

//creamos y exportamos la funcion
export default function useFormTweets(){
    const showForm = ref(false);
    //mostrar formulario en falso

    const openForm =()=>{
        //funcion para mostrar formulario
        showForm.value = !showForm.value;
        //cambiamos el valor de showForm, negandolo
    }

    return{
        showForm,
        openForm,
    }
}