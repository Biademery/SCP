<template>
    <div class="home">
        <section class="introduction">
            <div class="intro-left">
                <div class="intro-text">
                    <img src="../assets/candidato.png" alt="Foto do candidato" class="candidate-image">
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

        <section class="eventos" id="evento">
            <Eventos />
        </section>
    </div>
</template>

<script>
import Eventos from './Eventos.vue';

export default {
    name: 'Home',
    components: {
        Eventos,
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.home a {
    text-decoration: none;
    color: #000;
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
}

.candidate-image {
    width: 100%;
    margin-bottom: 10px;
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
</style>