const path=require("path")
const fs=require("fs")
const fpath=path.join(__dirname,"data")
console.log(fpath)

const filepath=fpath+"/abc.txt";

fs.appendFile(filepath,"my name is ram",(err)=>{
    
    if (!err)
    {
        console.log("data update succesfully")

    }
    else{

        console.log(err.message)
    }
    })

// fs.unlinkSync(filepath)  ====delete file