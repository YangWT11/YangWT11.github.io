

const state = {
    selectedTitle: "Article",
    selectedCatalog: null,
    catalogs: require("../../mds/config.json"),
    searchText: null,
}

const mutations = {
    changeSelectedCatalog(state: any, targetCatalog: any) {
        if (state.selectedCatalog != targetCatalog) {
            state.selectedCatalog = targetCatalog;
        }
    },
    setSearchText(state: any, value: String) {
        if (state.searchText !== value) {
            state.searchText = value;
        }
    }
}

const getters = {
    getSecondCatalogs: (state: any) => {
        return state.catalogs[state.selectedTitle].map((catalog: any) => {
            return {
                ...catalog,
                actived: catalog.name == state.selectedCatalog
            }
        })
    },
    getArticleInfo: (state: any) => (catalog: String, fileName: String) => {
        return state.catalogs['Article'].find((item: any) => item.name.toLowerCase() == catalog)['articles'].find((item: any) => item.fileName == fileName)
    },
    searchByCatalog: (state: any) => (name: String) => {
        return state.catalogs[state.selectedTitle].filter((catalog: any) => {
            return catalog.name.includes(name)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}