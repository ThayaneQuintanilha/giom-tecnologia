<template>
  <form id="form">
    <h1>Formulário de inscrição GIOM</h1>
    <div id="div-label">
      <label class="label-form" for="">Nome
        <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu nome">
      </label>

      <label class="label-form" for="">Sobrenome
        <input type="text" id="nome" name="name" v-model="sobrenome" placeholder="Digite o seu sobrenome">
      </label>

      <label class="label-form" for="">E-mail
        <input type="text" id="nome" name="name" v-model="email" placeholder="Digite o seu e-mail">
      </label>

      <label class="label-form" for="">CPF
        <input type="number" id="cpf" name="cpf" v-model="cpf" placeholder="Digite o seu CPF">
      </label>
    </div>
    <div id="btn">
      <button type="submit">Enviar</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'FormData',
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #01001f;
    font-family: 'Signika Negative', sans-serif;
  }

  #form {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  #form h1 {
    margin: 0 0 30px 0;
  }

  #div-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .label-form {
    margin: 0 0 20px 0px;
    text-align: center;
    font-size: 20px;
  }

  .label-form input {
    height: 40px;
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    border-radius: 10px;
    background-color: #ffffff;
  }

  #btn button {
    width: 70px;
    height: 30px;
    border: none;
    background-color: #005469;
    color: #ffffff;
    border-radius: 5px;
  }
</style>