const Item = require('../models/newitems');

//add an item 

exports.additem = async (req, res) => {
    try {
        const { name, description, price,tag } = req.body;

        // Create a new item by use item
        const newItem = new Item({ name, description, price ,tag});

        // Save or insert the new item to the database
        const savedItem = await newItem.save();

        // Log the saved item
        console.log('Item saved:', savedItem);

        res.status(201).json(savedItem);
    } catch (err) {
        console.error('Error adding item:', err);
        res.status(500).json({ error: 'Failed to add item' });
    }
};

//find all items
exports.findall=async(req,res)=>{
    try{

        const Items= await Item.find();

        res.json(Items);
    }
    catch(err){
    console.error('error finding item',err);
    res.status(500).json({error:'Failed to find item'})
    }
};
//find itemby id
exports.findbyId=async(req,res)=>{
    try{
        const itemId=req.params.id;
        const Items=await Item.findById(itemId);
        if(!Items){
            res.status(400).json({error:'Item not find'});
        }
        res.json(Items);
    }
    catch(err){
        console.error('Error find the specific item',err);
        res.status(500).json({error:'Failed to find specific Item'})
    }
};

//find and delete an item
exports.delete=async(req,res)=>{
    try{
        const itemId=req.params.id;

        const Items= await Item.findByIdAndRemove(itemId);

        if (!Items){
            res.status(400).json({error:'Failed to find item'});
        }
        console.log('Item deleted:', Items);
        
    }
    catch(err){
        console.log("error to delete the Item",err);
        res.status(500).json({error:'Failed to delete the Items'});
    }
};

//update item by ID
exports.updateitem=async(req,res)=> {
    try{
        const itemId=req.params.id;
        const{name,description,price,tag}=req.body;
        
        const updateItem= await Item.findByIdAndUpdate(
            itemId,
            { name, description, price,tag },
            { new: true }

   );
   if(!updateItem){
    return res.status(400).json({error:'Item not founded'});
   }
   console.log('updated Item:',updateItem);

   res.json(updateItem);
 }
 catch(err){
    console.log("error to update  the Item",err);
    res.status(500).json({error:'Failed to update the Items'});
}
};
