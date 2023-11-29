import schema from './user.model.js'

export async function addTask(req,res){
    const {name,email,empId,phone,designation,experience,salary,address,Photo}=req.body
    res.status(201).send(schema.create({name,email,empId,phone,designation,experience,salary,address,Photo}));
}

export async function getTask(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}


export async function getDetails(req, res) {
    const { id } = req.params;
    let task = await schema.findOne({ _id:id });
    res.status(200).send(task);
  }

  
export function delTask(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editEmployee(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}






// export async function editTask(req, res) {
//     const { id } = req.params;
//     const { task } = req.body;
//     try {
//         await schema.updateOne({ _id: id },{task:task});
//          res.status(201).send("updated");
//     } catch (error) {
//         console.log(error);
//     }
// }