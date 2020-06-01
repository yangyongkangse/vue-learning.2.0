const dashboard = {
    state: {
        collapse: false,
        collapseContent:false,
        tags:[],
    },
    getters: {},
    actions: {
        setCollapse: ({commit, state, dispatch}, config = {}) => {
            commit("setCollapse", (state, {
                collapse: config.collapse,
            }));
        },
        setCollapseContent: ({commit, state, dispatch}, config = {}) => {
            commit("setCollapseContent", (state, {
                collapseContent: config.collapseContent,
            }));
        },
        setTags: ({commit, state, dispatch}, config = {}) => {
            commit("setTags", (state, {
                tags: config.tags,
            }));
        },
    },
    mutations: {
        setCollapse(state, action) {
            state.collapse = action.collapse;
        },
        setCollapseContent(state, action) {
            state.collapseContent = action.collapseContent;
        },
        setTags(state, action) {
            state.tags = action.tags;
        },
    }
};
export default dashboard;
