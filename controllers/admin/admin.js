const content = ['Hi','There'];
const { ConnectionStates } = require('mongoose');
const Notes = require('../../models/notes');
exports.getNotes = (req,res,next)=>{
    Notes.find()
        .then((notes=>{
            // console.log(notes,"notes")
            res.status(200).json({
            content:notes
            })    
        }))
        
}
exports.postNotes = (req,res,next)=>{
    const textInput = req.body.notes.note;
    const createdAt = req.body.notes.createdAt;
    const notes= new Notes({note:textInput,createdAt:createdAt});
    notes.save()
    .then(response=>{
        // console.log(response,"note id")
        content.push(req.body.notes)
        res.status(201).json({
        msg:'Post saved',
        notes:response
    })
    })
    .catch(err=>next(new Error(err)))

    
}
exports.editNotes = (req,res,next)=>{
   const id = req.params.id;
//    console.log(id)
    Notes.updateOne({ _id: id }, { note: req.body.notes.note })
    .then(response=>{
        res.status(201).json({
            msg:'Post updated'
        })
    })
    .catch(err=>next(new Error(err)))
 
}
exports.deleteNotes = (req,res,next)=>{
    const id = req.params.id;
    // console.log(id)
    Notes.deleteOne({_id:id})
    .then(response=>{
        
        res.status(200).json({
            msg:'Deleted'
        })
    })
    
} 