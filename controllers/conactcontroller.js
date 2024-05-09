//@description for getting all contacts
//@route get //api/contacts
// @access public

import Contact from "../models/contactmodel.js";
export const getcontacts = async (req,res) => {
    const contactname = await Contact.find()
    res.status(200).json(contactname)
};

//@description for creating all contacts
//@route creating //api/contacts
// @access public

export const createcontact = async  (req,res) => {

    console.log("the req body is :" ,req.body);
    const{name,  email,  phone} = req.body;
    
    if(!name || !email || !phone ) 
    {
        return res.status(400).json({msg:"Please enter all fields"});
        // res.status(400);
        // throw new Error("please fill all the feilds")
    }
    const create = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(create)
};

//@description for deleting all contacts
//@route delete //api/contacts
// @access public
// export const delcontact = async  (req,res) => {
//     const getidcont = await Contact.findById(req.params.id)
//     if (!getidcont)
//     {
//         res.status(404)
//         throw new Error ("contact not found "); 
//     }
//     await Contact.remove();
//     res.status(200).json(getidcont)
// };


export const delcontact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
            throw new Error("Contact not found");
        }

        await Contact.deleteOne({ _id: req.params.id }); // Delete the contact using its ID
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


//@description for update all contacts
//@route update //api/contacts
// @access public

export const updatecontact = async  (req,res) => {
    const getidcont = await Contact.findById(req.params.id)
    if (!getidcont)
    {
        res.status(404)
        throw new Error ("contact not found "); 
    }
    const update = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}

    )
    res.status(200).json(update)
};


//@description for getting all contacts by id
//@route get //api/contacts
// @access public
export const getcontact = async  (req,res) => {
    const getidcont = await Contact.findById(req.params.id)
    if (!getidcont)
    {
        res.status(404)
        throw new Error ("contact not found "); 
    }
    res.status(200).json(getidcont)
};