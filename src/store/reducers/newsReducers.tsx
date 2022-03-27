
interface NewsState {
    news: any[],
    loading: boolean,
    error: string | null
}

const initialState = {
    news: [],
    loading: false,
    error: null,
}

export const newsReducers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_NEWS" : {

        }
    }
}