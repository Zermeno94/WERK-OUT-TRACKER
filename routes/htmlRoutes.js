const path = require("path");
const router = require("express").Router();

//Pulled code from past activities 
// router.get("/", (req,res)=> {
//     res.sendFile(path.join(__dirname, "index.html"))
// })

router.get("/excercise", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
})

router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;

//TODO
// Need to create a path to public files 
//paths to consider is excercise since we want the excercise date to be displayed
//also include stats in publics as well