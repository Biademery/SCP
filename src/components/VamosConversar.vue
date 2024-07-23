<!-- src/views/VamosConversar.vue -->
<template>
    <div class="vamos-conversar">
        <section class="conversation">
            <div class="left">
                <h2>Vamos de bate papo?</h2>
                <p>
                    Para agendar sua visita, pedimos que preencha esta ficha. Entraremos em contato em breve.
                </p>
                <form class="form-container">
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <div class="form-row first-row">
                            <label>
                                Nome Completo:
                                <input type="text" name="nome" />
                            </label>
                            <label>
                                Idade:
                                <input type="text" name="idade" class="idade" />
                            </label>
                        </div>
                        <div class="form-row second-row">
                            <label>
                                CEP:
                                <input type="text" name="cep" v-mask="'#####-###'" />
                            </label>
                            <label>
                                Bairro:
                                <input type="text" name="bairro" />
                            </label>
                        </div>
                        <div class="form-row third-row">
                            <label>
                                Rua:
                                <input type="text" name="rua" />
                            </label>
                            <label>
                                Número:
                                <input type="text" name="numero" />
                            </label>
                        </div>
                        <div class="form-row fourth-row">
                            <label>
                                Complemento:
                                <input type="text" name="complemento" />
                            </label>
                            <label>
                                Telefone:
                                <input type="text" name="telefone" />
                            </label>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="right">
                <div class="intro-text">
                    <p>
                        Antes de começarmos nosso agendamento, poderia fornecer algumas
                        dados? Eles serão usados exclusivamente para este intuito. Ao clicar em
                        enviar, você concorda com nossa política de privacidade. Agradecemos
                        sua colaboração!
                    </p>
                </div>
            </div>
        </section>
        <div class="button-container">
            <button class="submit-button">Enviar</button>
        </div>
    </div>
</template>

<script>
import { TheMask } from 'vue-the-mask';

export default {
    name: 'VamosConversar',
    components: { TheMask },
};
</script>

<style scoped>
.vamos-conversar {
    padding: 20px;
}

.conversation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.left {
    flex: 1;
    margin-right: 20px;
}

.right {
    flex: 1;
    position: relative;
}

.intro-text {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
}

.intro-text::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
}

.form-container {
    border: 2px solid black;
    padding: 20px;
    border-radius: 8px;
}

fieldset {
    border: none;
    position: relative;
    padding-top: 20px;
}

legend {
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 0 10px;
}

.form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.first-row {
    display: grid;
    grid-template-columns: 85% 15%;
}

.second-row {
    display: grid;
    grid-template-columns: 30% 70%;
}

.third-row {
    display: grid;
    grid-template-columns: 80% 20%;
}

.fourth-row {
    display: grid;
    grid-template-columns: 75% 25%;
}

label {
    flex: 1;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
}

label:last-child {
    margin-right: 0;
}

input[type='text'] {
    padding: 5px;
    margin-top: 5px;
    border: none;
    border-radius: 4px;
    background-color: #e7e7e7;
}



.button-container {
    text-align: center;
}

.submit-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.submit-button:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
}
</style>