// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    css: ["~/assets/css/style.scss"],
    app: {
        head: {
            charset: "utf-8",
            title: "Optical illusion",
            meta: [
                { name: "description", content: "와 착시!" },
                { name: "author", content: "이준용" },
                { name: "theme-color", content: "#0f0f0f" },
                {
                    name: "keywords",
                    content:
                        "Optical illusion, illusion, icon, Nuxt, Vue, Vueuse",
                },
                { property: "og:title", content: "Optical illusion" },
                { property: "og:type", content: "website" },
                {
                    property: "og:site:name",
                    content: "optical-illusion.vercel.app",
                },
                {
                    property: "og:url",
                    content: "https://optical-illusion.vercel.app/",
                },
                { property: "og:image", content: "/favicon.svg" },
            ],
            link: [
                { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
            ],
        },
    },
});
