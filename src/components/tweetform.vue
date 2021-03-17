<template>
    <div class="tweet-form container" :class="{open:showForm}">
        <form>
            <!--agregamos una clase dinamica que se activa cuando showform sea verdadero-->
            <input type="text" class="form-control" placeholder="Tu nombre" >
            <textarea class="form-control" rows="3" placeholder="Escribe tu tweet"></textarea>
            <button type="button" class="btn btn-primary">
                Enviar
            </button>
        </form>
    </div>
  
</template>

<script>
export default {
    //importamos el el showform como booleano
    props:{
        showForm: Boolean,
    },
}
</script>

<style lang="scss" scoped>

.tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    &.open {
        height: auto;
    }

    form {
        margin-bottom: 50px;

        input {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            margin-top: 10px;
        }
    }
}

</style>