import { Request,Response } from 'express'
import { UserEntity } from '../../models'
import { AppDataSource } from '../../config/datasource'

export const saveUser = async(req:Request,res:Response)=>{
    const data = req.body;
    try {
        const userRepository = AppDataSource.getRepository(UserEntity);

        await userRepository.save(data)

        res.status(200).json({
            status:true,
            message:data
        })
    } catch (error) {
        console.log("message error:",error);
        res.status(500).json({
            status:false,
            message:'Algo salio mal :(, intenta de nuevo'
        })
    }
}