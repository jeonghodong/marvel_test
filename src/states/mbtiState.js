import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage,
})

export const mbtiState = atom({
  key: "mbtiState",
  default: [],
  effects_UNSTABLE: [persistAtom]
})