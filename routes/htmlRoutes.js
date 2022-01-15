const path = require("path");
const router = require("express").Router();


router.get("/excercise", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
});

router.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router;

//TODO
// Need to create a path to public files 
//paths to consider is excercise since we want the excercise date to be displayed
//also include stats in publics as well