

const state = {
    selectedTitle: "Article",
    selectedTheme: null,
    articles: require("../../mds/config.json"),
    searchText: null
}

const mutations = {
    changeSelectedTheme: (state: any, targetTheme: any) => {
        if (state.selectedTheme != targetTheme) {
            state.selectedTheme = targetTheme;
        }
    },
    setSearchText: (state: any, value: String) => {
        if (state.searchText !== value) {
            state.searchText = value;
        }
    }
}

const getters = {
    getArticles: (state: any) => {
        return state.articles[state.selectedTitle].map((theme: any) => {
            return {
                ...theme,
                actived: theme.name == state.selectedTheme
            }
        })
    },
    getArticleInfo: (state: any) => (theme: String, fileName: String) => {
        return state.articles['Article'].find((item: any) => item.name.toLowerCase() == theme)['articles'].find((item: any) => item.fileName == fileName)
    },
    searchByTheme: (state: any) => (name: String) => {
        return state.articles[state.selectedTitle].filter((theme: any) => {
            return theme.name.includes(name)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}