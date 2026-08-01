const express=require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const app=express();
const userModel=require("./models/user");
const mongoose=require("./configs/mongoose");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

// to redirect to home page
app.get("/",(req,res)=>{res.redirect("/home")});

// home render route
app.get("/home",async (req,res)=>{

    let given=0;
    let taken=0;
    const data= await userModel.find();
    let number=data.length;
    //funtion to det total of all user
    const calc = (data)=>
    {
        data.forEach(ele => {
            ele.tra.forEach(tran =>{
                if(tran.type==="given") given+=Number(tran.amount);
                else taken+=Number(tran.amount);
            })
        });
    }
    calc(data);
    let net=given-taken;
    const obj={
        no:number,
        given:given,
        taken:taken,
        net:net,
    }

    res.render("home",{
        det:obj,
    })
})

// redirect to new add page
app.get("/newadd",(req,res)=>{
    res.render("add");
})

// new customer add route
app.post("/new",async (req,res)=>{
    const id = crypto.randomUUID();
    const name =req.body.name;
    const user = await userModel.create({
        id,
        name,
    })
    res.redirect("/home");
    
})

// user detail page redirect
app.get("/user",async (req,res)=>{
    const data=await userModel.find();
    res.render("list",{
        data:data,
    })
})

// new transaction add route
app.post("/add",async (req,res)=>{
    const {name,desc,amount,type,id}=req.body;
    const idd = crypto.randomUUID();
    const user=await userModel.findOne({id:id});
    user.tra.push({
        id:idd,
        type:type,
        amount:amount,
        desc:desc,
    })
    await user.save();
    res.redirect(`/user/${id}`);    
})

// route to load a user page
app.get("/user/:id",async (req,res)=>{
    const id=req.params.id;
    const customer = await userModel.findOne({id:id});
    let given=0;
    let taken=0;
    for(const tr of customer.tra)
    {
        if(tr.type==="given") given+=tr.amount;
        else taken+=tr.amount;
    }
    let no=customer.tra.length;
    let net=given-taken;
    const obj={
        no:no,
        given:given,
        taken:taken,
        net:net,
    }
    res.render("user",{
         user:customer,
         det:obj,
    })
})

//delete a transcation
app.post("/delete/:id/:tid",async (req,res)=>{
    const userid=req.params.id;
    const trid=req.params.tid;
    const user=await userModel.findOne({id:userid});
    const trans = user.tra.filter(el=> el.id!==trid);
    user.tra=trans;
    await user.save();
    res.redirect(`/user/${userid}`);  
})

// to delete the user
app.post("/delete/:id",async (req,res)=>{
    const id=req.params.id;
    await userModel.findOneAndDelete({id:id});
    res.redirect("/user");
})


// server creation 
app.listen(3000);