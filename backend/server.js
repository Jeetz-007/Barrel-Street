import app from "./src/app.js"
import ConnectDB from "./src/config/db.js"


const PORT = 5001;

ConnectDB();

app.listen(PORT,()=>{
    console.log(`Barrel Street backend running on PORT ${PORT}`)
})