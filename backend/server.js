const express=require('express');
const cors=require('cors');// CORS allows you backend to accept requests from different origins
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Investment Agent Backend Running");
});
app.post("/analyze",(req,res)=>{
    const{company}=req.body;
    res.json({
        success: true,
        company: company,
        message: "Backend Connected Successfully"
    });
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});