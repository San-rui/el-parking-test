export type Item = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number;
    idDB?: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
    media_type?:string;
    watched?:string[]
};

export type TriviaState = {
    loading: boolean,
    items: Item[]
    error: string
}

export type TriviaReducer = {
    type: string,
    payload: Item[]
}
