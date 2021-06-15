function handler(req,res){
    const eventId = req.query.eventId;
    const {email,name,text} = req.body.comment;

    if(req.method === "POST"){
        
        if(
            !email.includes("@") ||
            !name ||
            !name.trim() === "" ||
            !text ||
            !text.trim() === ""
        ){
            res.status(422).json({ message: "invalid input"});
            return;
        }

        const newComment={
            id: new Date().toISOString(),
            name,
            email,
            text
        }
        res.status(201).json({comment: newComment});
    }

    if(req.method === "GET"){
        const dummy_comments=[
            { id: "c1", name: "Max", text: "first comment"},
            { id: "c2", name: "Max", text: "second comment"}
        ];

        res.status(201).json({ comments : dummy_comments});
        
    }
    

  
}

export default handler;