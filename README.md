# giom-tecnologia
<h1>Para executar o projeto</h1>

<strong>Precisa ter o node instalado na sua máquina</strong>

```
npm install -g node
```

<details>
<summary><strong>Instalação do Docker</strong></summary><br>

<strong>1º Desinstale versões anteriores</strong>

```
sudo apt update && sudo apt upgrade
```

```
sudo apt-get remove docker containerd runc
```

<br />
<strong>2º Instalando as dependências iniciais</strong>

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

<br />
<strong>3º Adicionando a chave pública do repositório Docker em nossa máquina</strong>

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

<br />
<strong>4º Adicionando o repositório remoto na lista do apt</strong>

```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

<br />
<strong>5º Instalando o Docker no Linux</strong>

```
sudo apt update && sudo apt upgrade
```

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

<br />
<strong>6º Adicionando seu usuário ao grupo de usuários Docker</strong>

```
sudo groupadd docker
```

```
sudo usermod -aG docker $USER
```

- ⚠️ Execute o comando exatamente como ele está acima, considerando as letras maiúsculas e minúsculas.

```
newgrp docker
```

- ⚠️ Se após esse comando você tiver algum problema, reinicie sua máquina. Depois de reiniciar siga para os próximos passos

<br />
<strong>8º Inicie o Daemon do Docker</strong>

- Para consultar o status atual do daemon do Docker, execute o seguinte comando:

```
sudo service docker status
```

- Caso apareça Docker is not running

```
sudo service docker start
```

<br />
<strong>9º Valide a instalação</strong>

```
docker run hello-world
```

<img src="./images/docker-hello-world.gif">

<br />

- Para melhorar a visualização dos Layers use o comando abaixo

```
sudo apt install jq
```

</details>

<details>
<summary><strong>Instalação do Compose</strong></summary><br>

<strong>1º Basta usar o seguinte comando para realizar a instalação:</strong>

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

<br />

- Por padrão, binários baixados da Internet não possuem permissão de execução. Logo, basta usar o programa chmod para aplicar a permissão de execução (+x) ao binário que acabamos de baixar. Execute o seguinte comando no seu terminal:

```
sudo chmod +x /usr/local/bin/docker-compose
```

<br />

- Para validar a instalação basta executar o comando docker-compose --version. Se tudo ocorrer bem, você verá a seguinte saída em seu terminal:

```
docker-compose --version
```

</details>

<br />

<strong>Para rodar o projeto</strong>

```
npm run install
```

<p align="center"><img src="./frontend/assets/giom.png" /></p>
