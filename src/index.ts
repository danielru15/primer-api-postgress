
import indexRoutes from './routes/index'
import express from 'express'
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(indexRoutes)

app.listen(3000 , ()=> {
    console.log('server on 3000');
    
})