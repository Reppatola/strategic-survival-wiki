import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/strategic-survival-wiki/',
    lang: 'ru-RU',
    title: 'Архив Выживших',
    description: 'Лор и концепты Strategic Survival 3D',

    themeConfig: {
        siteTitle: 'Архив Выживших',

        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Хроника', link: '/lore/timeline' },
            { text: 'Бестиарий', link: '/lore/bestiary/' },
            { text: 'Концепты', link: '/concepts/' },
        ],

        sidebar: [
            {
                text: '📖 Лор',
                items: [
                    { text: 'Premise', link: '/lore/premise' },
                    { text: 'Мир', link: '/lore/world' },
                    { text: 'Хроника', link: '/lore/timeline' },
                    { text: 'Фракции', link: '/lore/factions' },
                    { text: 'Сюжет', link: '/lore/story' },
                    { text: 'Локации', link: '/lore/levels' },
                    { text: 'Словарь', link: '/lore/glossary' },
                ],
            },
            {
                text: '🧟 Бестиарий',
                items: [
                    { text: 'Обзор', link: '/lore/bestiary/' },
                    { text: 'Walker', link: '/lore/bestiary/walker' },
                    { text: 'Sniffer', link: '/lore/bestiary/sniffer' },
                    { text: 'Listener', link: '/lore/bestiary/listener' },
                    { text: 'Screamer', link: '/lore/bestiary/screamer' },
                ],
            },
            {
                text: '👤 Персонажи',
                items: [
                    { text: 'Игрок', link: '/lore/characters/player' },
                ],
            },
            {
                text: '🎨 Концепты',
                items: [
                    { text: 'Обзор', link: '/concepts/' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Reppatola/strategic-survival-wiki' },
        ],

        footer: {
            message: 'Проект создаётся сообществом',
            copyright: 'Strategic Survival 3D',
        },

        docFooter: {
            prev: 'Назад',
            next: 'Вперёд',
        },

        outline: {
            label: 'На этой странице',
        },

        darkModeSwitchLabel: 'Тема',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
    },
});