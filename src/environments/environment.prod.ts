import { DevEnv as DevEnv } from "./environment";


class ProdEnv extends DevEnv{
    constructor(){
        super();
        this.production = true
    }
}
export const env = new ProdEnv()