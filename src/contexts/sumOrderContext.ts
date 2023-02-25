import { createContext } from "react";

export type TState = { sumOrder: number, setSumOrder: ()=> number};

const SumOrderContext = createContext< TState | null>(null);

export default SumOrderContext;