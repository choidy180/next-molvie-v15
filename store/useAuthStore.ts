import { create } from "zustand";

interface MovieState {
    // 타이틀
    title: string | null;
    setTitle: (title:string) => void;

    // 이미지
    image: string | null;
    setImage: (image:string) => void;

    // 설명
    overview: string | null;
    setOverview: (overview:string) => void;

    // 노출 여부
    view: boolean;
    setView: (view: boolean) => void;
}

export const useAuthStore = create<MovieState>((set) => ({
    // 타이틀
    title : '',
    setTitle: (title) => set({ title: title }),

    // 이미지
    image: '',
    setImage: (image) => set({ image: image }),

    // 설명
    overview: '',
    setOverview: (overview) => set({ overview: overview }),

    // 노출 여부
    view: false,
    setView: (view) => set({ view: view })
}));