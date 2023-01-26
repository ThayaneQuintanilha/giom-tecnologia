<template>
  <form id="form" @submit.prevent="handleSubmit">
    <h1>Formulário de inscrição GIOM</h1>
    <div id="div-label">
      <label class="label-form" for="" placeholder="Digite seu nome">Nome
        <input v-model="name" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu sobrenome">Sobrenome
        <input v-model="lastName" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu e-mail">E-mail
        <input v-model="email" required>
      </label>

      <label class="label-form" for="" placeholder="Digite seu endereço">Cidade
        <input v-model="adress" required>
      </label>

      <div id="btn">
        <button type="submit" v-if="!edit">Enviar</button>
        <button class="li-button" v-if="edit" type="button"  @click="handleSaveEdit">Salvar</button>
      </div>
    </div>
  </form>
  <!-- eslint-disable -->
  <div id="div-ul">
    <ul>
      <li v-for="item in itens" :key="item.idinfos">{{ item.name }} | {{ item.lastName }} | {{ item.email }} | {{ item.adress }} 
        <button class="li-button" type="button" @click="handleEdit(item.idinfos)">Editar</button> 
        <button class="li-button" type="submit" @click="handleDelete(item.idinfos)">Excluir</button>
      </li>
    </ul>
  </div>
</template>
<!-- eslint-enable -->

<script>
import api from '../utils/api'

export default {
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      adress: '',
      itens: [],
      edit: false,
      saveEditId: 0,
  }},
  methods: {
    async handleGet () {
      await api.get('/buscar').then(({data}) => this.itens = data).catch((error) => console.log(error));
    },

    handleSubmit() {
      let data = { name: this.name, lastName: this.lastName, email: this.email, adress: this.adress }
      console.log(data.name);

      this.itens.push(data);

      api.post('/registrar', data).then(response => {
          console.log(response);
      }).catch(error => {
          console.log(error);
      });

      this.name = '', this.lastName = '', this.email = '', this.adress = ''
    },

    async handleSaveEdit() {
      const id = this.saveEditId;
      const data = { name: this.name, lastName: this.lastName, email: this.email, adress: this.adress }

      api.put(`/atualizar/${id}`, data).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error);
      })

      await this.handleGet();

      this.edit = !this.edit;
    },

    handleEdit(id) {
      this.saveEditId = id;
      let data = this.itens.find((e) => e.idinfos === id);

      this.name = data.name;
      this.lastName = data.lastName;
      this.email = data.email;
      this.adress = data.adress;

      this.edit = !this.edit;
    },

    async handleDelete(id) {
      console.log(id);
      api.delete(`/deletar/${id}`).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })

      await this.handleGet();
    },
  },
  mounted() {
    this.handleGet();
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
    margin: 130px 0;
  }

  #div-ul ul li {
    font-size: 30px;
    border-bottom: 1px solid #fff;
    margin: 10px;
  }

  .li-button {
    border: none;
    background-color: #005469;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 15px;
    height: 35px;
    margin: 0 2px;
    width: 80px;
  }
</style>