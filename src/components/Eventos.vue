<template>
    <div class="eventos">
        <section class="schedule">
            <div class="left">
                <div class="intro-text">
                    <h2>Acompanhe nossa agenda!</h2>
                    <br>
                    <p>
                        Acompanhe nossa agenda para saber em qual evento estarei presente e assim podemos estar mais
                        próximos. Será um prazer compartilhar momentos significativos e fortalecer nossos laços em
                        encontros que promovem o diálogo e o crescimento mútuo. Juntos, podemos construir um futuro
                        melhor e mais conectado.
                    </p>
                    <br><br>
                    <p class="agenda">Clique na agenda!</p>
                </div>
            </div>
            <div class="right">

            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Eventos',
};
</script>

<style scoped>
.schedule {
    display: grid;
    grid-template-columns: 40% 60%;
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
}

.right {
    background-color: #e7e7e7;
}

.calendar-image {
    width: 100%;
    border-radius: 8px;
}
</style>