import {Request,Response, query} from "express";
import {pool}  from '../database'
import { QueryResult } from "pg";

// get users

export const getUsers = async (req:Request,res:Response ):Promise<Response> => {
    try {

        const response:QueryResult = await pool.query('select * from users')
         return res.status(200).json(response.rows)

    } catch (error) {
        return res.status(500).json('internal server error')
    }

}

//get user by id

export const getUserId = async (req:Request,res:Response)  => {
    const id =parseInt(req.params.id)
    const response:QueryResult = await pool.query(`select * from users where id=${id}`)
    return res.json(response.rows)
}

// Create user

export const crearteUser = async (req:Request,res:Response):Promise<Response>  => {

        const {name,email}= req.body
        const response:QueryResult = await pool.query(`INSERT INTO users(name, email) values('${name}','${email}')`)
        
        return res.json({
            message:'usuario creado',
            body:{
                name,
                email
            }
        })
        
    
}

//delete user
export const deleteUser = async (req:Request,res:Response):Promise<Response> => {
    const id = parseInt(req.params.id)
    await pool.query(`delete from users where id=${id}`)
    return res.json(`user ${id} se borro correctamente`)
}


// update user
export const updateUser = async (req:Request,res:Response):Promise<Response>  => {
    const id = parseInt(req.params.id)
    const {name,email}= req.body
    await pool.query(`update users set name='${name}', email='${email}' where id=${id}`)
    return res.json(`user ${id} actualizado`)
}

