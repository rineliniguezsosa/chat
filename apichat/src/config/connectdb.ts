import { AppDataSource } from "./datasource";

export const Connectdb = async()=>{
    try {
        await AppDataSource.initialize()
        console.log('successful db connection');
    } catch (error) {
        console.log('something went wrong',error);
    
    }
}