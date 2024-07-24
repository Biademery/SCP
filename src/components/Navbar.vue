<template>
    <nav>
        <div class="navbar">
            <aside class="social-media">
                <p>Siga o candidato nas redes:</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com/" target="_blank" class="icon">
                        <img :src="FacebookIcon" alt="Logo do Facebook">
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" class="icon">
                        <img :src="InstagramIcon" alt="Logo do Instagram">
                    </a>
                    <a href="https://www.x.com/" target="_blank" class="icon">
                        <img :src="XIcon" alt="Logo do X">
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank0" class="icon">
                        <img :src="LinkedInIcon" alt="Logo do LinkedIn">
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" class="icon">
                        <img :src="YoutubeIcon" alt="Logo do Youtube">
                    </a>

                </div>
            </aside>
            <div class="logo">
                <router-link to="/">
                    <h1>Logo do candidato</h1>
                </router-link>
            </div>
        </div>
        <ul class="links">
            <li>
                <router-link to="/sobremim">SOBRE MIM</router-link>
                <span class="separator">|</span>
            </li>
            <li>
                <router-link to="/planosdegoverno">PLANOS DE GOVERNO</router-link>
                <span class="separator">|</span>
            </li>
            <li>
                <router-link to="/eventos">EVENTOS</router-link>
                <span class="separator">|</span>
            </li>
            <li>
                <router-link to="/vamosconversar">VAMOS CONVERSAR?</router-link>
                <span class="separator">|</span>
            </li>
            <li>
                <router-link to="/gruposzap" href="">GRUPOS DE ZAP</router-link>
                <span class="separator">|</span>
            </li>
            <li>
                <router-link to="/apoiecampanha" href="">APOIE NOSSA CAMPANHA</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import XIcon from "../assets/icons/x.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export default {
    name: "Navbar",
    data() {
        return {
            FacebookIcon,
            InstagramIcon,
            XIcon,
            LinkedInIcon,
            YoutubeIcon,
        };
    },
};
</script>

<style scoped>
.navbar {
    background-color: #C3C3C3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 4px 6px -1px rgba(200, 200, 200, 1), 0 2px 4px -1px rgba(230, 230, 230, 0.6);

}

.social-media {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.social-media p {
    margin: 0 0 5px;
}

.social-icons {
    display: flex;
    margin-left: 60px;
    gap: 10px;
}

.icon {
    width: 20px;
    height: 20px;
}

.logo {
    font-size: 24px;
    font-weight: bolder;
}

.links {
    background-color: #E7E7E7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
    list-style: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.links li {
    display: flex;
    align-items: center;
}

.links a,
nav a {
    text-decoration: none;
    color: #000;
    padding: 0 10px;
}

.separator {
    margin: 0 10px;
    color: #000;
}
</style>
