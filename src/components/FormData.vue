<template>
  <form id="form" @submit.prevent="handleSubmit">
    <h1>Formulário de inscrição GIOM</h1>
    <div id="div-label">
      <label class="label-form" for="" placeholder="Digite seu nome">Nome
        <input v-model="nome" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu sobrenome">Sobrenome
        <input v-model="sobrenome" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu e-mail">E-mail
        <input v-model="email" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu endereço">Endereço
        <input v-model="endereco" required>
      </label>

      <div id="btn">
        <button type="submit">Enviar</button>
      </div>
    </div>
  </form>
  <div id="div-ul">
    <ul>
      <li v-for="item in itens" :key="item.id">{{ item.nome }} | {{ item.sobrenome }} | {{ item.email }} | {{ item.endereco }} 
        <button type="button" v-for="item in itens" :key="item.id" @submit.prevent="handleEdit">Editar</button> 
        <button type="button" v-for="item in itens" :key="item.id" @submit.prevent="handleDelete">Excluir</button></li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      id: 1,
      nome: '',
      sobrenome: '',
      email: '',
      endereco: '',
      itens: []
    }
  },
  methods: {
    async handleSubmit() {
      this.itens.push({nome: this.nome, sobrenome: this.sobrenome, email: this.email, endereco: this.endereco});
      this.nome = '', this.sobrenome = '', this.email = '', this.endereco = ''

      axios.request({
        method: 'post',
        url: 'http://localhost:3000/register'
        }).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
    },
   async handleEdit() {
    // let data = {nome: this.nome, sobrenome: this.sobrenome, email: this.email, endereco: this.endereco}

    axios.request({
      method: 'put',
      url: 'http://localhost:3000/atualizar',
      // body: data
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
   async handleDelete() {
    // let data = {id: this.id}

    axios.request({
      method: 'delete',
      url: 'http://localhost:3000/deletar',
      // data: data
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
    mounted() {
      this.handleEdit()
      this.handleDelete()
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #01001f;
    list-style: none;
    font-family: 'Signika Negative', sans-serif;
  }

  #form {
    width: 99.3vw;
    height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  #form h1 {
    margin: 0 0 50px 0;
    font-size: 50px;
  }

  #div-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .label-form {
    margin: 0 0 20px 0px;
    text-align: center;
    font-size: 25px;
  }

  .label-form input {
    height: 60px;
    width: 380px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    border-radius: 10px;
    background-color: #ffffff;
  }

  #btn button {
    border: none;
    background-color: #005469;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    width: 170px;
  }

  #div-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin: -270px 0;
  }
  
  #div-ul ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 0 auto;
    height: 40px auto;
    margin-bottom: 50px;
  }

  #div-ul ul li {
    font-size: 30px;
    border-bottom: 1px solid #fff;
    margin: 10px;
  }
</style>