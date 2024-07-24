<template>
    <div class="home">
        <section class="introduction">
            <div class="intro-left">
                <div class="intro-text">
                    <a href="https://www.youtube.com" target="_blank" class="image-container">
                        <img src="../assets/icons/play.svg" alt="Ícone de play" class="play-icon">
                        <img src="../assets/candidato.png" alt="Foto do candidato" class="candidate-image">
                    </a>
                    <h2>Essa é a minha história</h2>
                    <br>
                    <p>Na suavidade do amanhecer, a vida se revela em cores vivas e promessas renovadas. Cada sorriso é
                        um presente, cada desafio, uma oportunidade de crescimento. No calor dos abraços e nas histórias
                        compartilhadas, encontramos a verdadeira riqueza da existência. Assim, dia após dia, celebramos
                        a beleza e a bondade que a vida nos oferece.</p>
                </div>
            </div>
            <router-link to="/sobremim" class="intro-right">
                <h2>Biografia</h2>
                <br>
                <p>Zé Pereira nasceu sob o sol escaldante do sertão nordestino, em uma pequena comunidade onde a vida se
                    desenrolava entre a terra árida e o horizonte infinito. Desde cedo, aprendeu com seu pai os segredos
                    da agricultura de subsistência e a arte de sobreviver às secas implacáveis que assolavam a região.
                </p>
                <br>
                <br>
                <p>Com mãos calejadas pelo trabalho árduo, Zé Pereira tornou-se um exemplo de perseverança e
                    resiliência. Sempre pronto para ajudar os vizinhos em tempos difíceis, ele era conhecido por sua
                    generosidade e solidariedade. Casou-se com Maria, sua companheira de jornada, e juntos enfrentaram
                    os desafios da vida com coragem e determinação.</p>
                <br><br>
                <p>A partir daí, Zé Pereira se dedicou à defesa dos direitos e da justiça social, resistindo aos
                    ataques do capitalismo e promovendo a redistribuição de renda e a igualdade de gênero. Seu trabalho
                    como advogado ...
                </p>
            </router-link>
        </section>
        <section class="planos">
            <router-link to="/planosdegoverno" class="plan-container">
                <h2>Planos de governo</h2>
                <br>
                <p>Desenvolvimento Rural Sustentável: Investiremos em tecnologias agrícolas adaptadas ao clima
                    semiárido,
                    promovendo a irrigação eficiente e incentivando práticas agrícolas sustentáveis para garantir a
                    segurança alimentar e gerar empregos no campo.</p>
                <br>
                <br>
                <p>Combate à Seca e Gestão Hídrica: Implementaremos programas de captação e armazenamento de água, como
                    cisternas e barragens, para enfrentar a escassez hídrica de maneira estratégica e eficiente,
                    garantindo
                    água para consumo humano, animal e agrícola durante todo o ano.</p>
            </router-link>
            <div class="speech-container">
                <div class="speech-balloon">
                    <p>Como vamos trabalhar</p>
                </div>
            </div>
        </section>

        <section class="eventos">
            <section class="schedule">
                <div class="left">
                    <div class="intro-text-eventos">
                        <h2>Acompanhe nossa agenda!</h2>
                        <br><br>
                        <p>
                            Acompanhe nossa agenda para saber em qual evento estarei presente e assim podemos estar mais
                            próximos. Será um prazer compartilhar momentos significativos e fortalecer nossos laços em
                            encontros que promovem o diálogo e o crescimento mútuo. Juntos, podemos construir um futuro
                            melhor e mais conectado.
                        </p>
                        <br><br><br>
                        <router-link to="/eventos" class="agenda">Clique na agenda!</router-link>
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/icons/calendar.svg" alt="Calendario" class="calendar-image">
                </div>
            </section>
        </section>
        <section class="vamos-conversar">
            <div class="left-item">
                <h2>Essa é nossa gente!</h2>
                <!-- <carousel :autoplay="true" :autoplayTimeout="3000" :loop="true">
                        <slide v-for="(image, index) in images" :key="index">
                            <img :src="image" alt="Imagem da nossa gente" class="carousel-image">
                        </slide>
                    </carousel> -->
            </div>
            <div class="right-item">
                <div class="intro-text-item">
                    <h2>Vamos tomar um café?</h2>
                    <br>
                    <p>
                        Que tal uma visita para tomarmos um café, conversarmos e discutirmos juntos as melhorias que
                        podemos
                        implementar para o progresso de nossa cidade? Será ótimo trocarmos ideias e encontrarmos
                        soluções que
                        beneficiem a todos. Estou ansioso para ouvir suas sugestões e trabalharmos juntos por um
                        futuro melhor.
                    </p>
                    <br>
                    <p>Agende nossa visita em sua casa!</p>
                    <br>
                    <button class="schedule-button" @click="goToEventos">Agendar</button>
                </div>
            </div>
        </section>
        <section class="gruposzap">
            <img src="../assets/icons/whatsapp.svg" alt="Ícone do WhatsApp" class="whatsapp-icon">

            <button class="responder-button">Responder</button>
            <div class="gruposzap-content">
                <h2>Participe dos grupos de WhatsApp.</h2>
                <p>Para debatermos sobre saúde, educação, cultura e melhorias para nossa cidade, junte-se aos grupos
                    específicos disponíveis em nossa página web.</p>
                <div class="images">
                    <img src="../assets/candidato.png" alt="Imagem de grupo" class="grupo-image">
                    <img src="../assets/candidato.png" alt="Imagem de grupo" class="grupo-image">
                    <img src="../assets/candidato.png" alt="Imagem de grupo" class="grupo-image">
                    <img src="../assets/candidato.png" alt="Imagem de grupo" class="grupo-image">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

export default {
    name: 'Home',
    components: {
        Carousel,
        Slide,
    },
    // data() {
    //     return {
    //         images: [
    //             require('../assets/candidato.png'),
    //             require('../assets/candidato.png'),
    //             require('../assets/candidato.png'),
    //         ]
    //     };
    // },
    methods: {
        goToEventos() {
            this.$router.push('/eventos');
        }
    },
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.introduction {
    display: flex;
    justify-content: space-between;

}

.intro-left {
    margin-right: 20px;
}

.intro-right {
    background-color: #e7e7e7;
    padding: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: #000;
}

.intro-text {
    background-color: black;
    color: white;
    padding: 20px;
    width: 380px;
    font-size: 12px;
    position: relative;
    font-size: 12px;
    align-content: center;
}

.intro-text::after {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
}

.image-container {
    position: relative;
    display: inline-block;
}

.candidate-image {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
}

.play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
}

.intro-text h2 {
    display: flex;
    font-size: 20px;
}

.planos {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.plan-container {
    background-color: #e7e7e7;
    padding: 20px;
    margin-top: 30px;
    text-decoration: none;
    color: #000;
}

.speech-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 10px;
}

.speech-balloon {
    position: relative;
    display: inline-block;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 28px;
    height: fit-content;
    min-width: 345px;
}

.speech-balloon::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 25px solid black;
    border-top: 10px solid transparent;
    border-bottom: 10px solid black;
    transform: rotate(-180deg);
}

.schedule {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    margin-bottom: 40px;
}

.left {
    background-color: black;
    color: white;
    padding: 20px;
}

.agenda {
    margin-bottom: 20px;
    color: #fff;
}

.right {
    display: flex;
    background-color: #e7e7e7;
    align-items: center;
    justify-content: center;
}

.calendar-image {
    width: 70%;
    height: auto;
    padding: 20px 0;

}

.vamos-conversar {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 40px;
}

.left-item {
    background-color: #e7e7e7;
    padding: 20px;
}

.right-item {
    background-color: black;
    color: white;
    padding: 20px;
}

.carousel-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.schedule-button {
    background-color: black;
    color: white;
    border: 2px solid white;
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.schedule-button:hover {
    background-color: white;
    color: black;
}

.gruposzap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #e7e7e7;
    padding: 20px;
    margin-bottom: 40px;
}

.whatsapp-icon {
    width: 150px;
    height: auto;
    margin-bottom: 20px;
}

.responder-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.responder-button:hover {
    background-color: white;
    color: black;
}

.gruposzap-content {
    width: 70%;
    padding-left: 20px;
}

.images {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.grupo-image {
    width: 20%;
    border-radius: 8px;
}
</style>