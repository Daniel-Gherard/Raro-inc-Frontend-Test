<template lang="pug">
#contactCard
  span.title Pronto para planejar seu sossego?

  p.subtitle Agende uma consultoria sem compromisso pelo formulário abaixo!

  label Nome:
  input

  label E-mail:
  input

  label Estado Civil:
  input

  label Profissão:
  input

  label Telefone/Whatsapp:
  input

  label Renda Mensal:
  input

  #action
    button.orange-button.round-button Enviar

</template>

<script>
export default {
  name: 'contactCard',
}
</script>

<style scoped lang="scss">
#contactCard {
  background-color: #323469;
  padding: 15px 20px;
  max-width: min-content;
  text-align: left;
  min-width: 220px;
  color: #B5B5C1;

  @media (min-width: 700px) {
    position: relative;
    top: 180px;
  }

  label {
    color: #B5B5C1;
    font-size: 10px;
    font-weight: bold;
  }

  .title {
    font-weight: bolder;
    font-family: system-ui;
    color: #FF9B23;
    font-size: 15px;
  }

  .subtitle {
    font-size: 11px;
    font-weight: bold;
    margin: 15px 0;
  }

  input {
    background-color: #5B5C92;
    border-radius: 1px;
    width: 100%;
  }

  #action {
    justify-content: center;
    display: flex;
    margin-top: 20px;
  }
}
</style>
