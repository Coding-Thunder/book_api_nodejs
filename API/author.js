
const Router = require('express').Router();
const AuthorModal = require('../schema/author');




// Route    - /author
// Des      - to get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
Router.get("/author", async (req, res) => {
    const getAllAuthors = await AuthorModal.find();
    return res.json(getAllAuthors);
  });

// Route     /author/new
// Description add new author
// Access PUBLIC
// Parameters NONE
// METHOD POST
Router.post("/author/new", (req, res) => {
    const { newAuthor } = req.body;
  
    AuthorModal.create(newAuthor);
  
    return res.json({ message: "Author added to the database" });
  });
//TODO: Studen Task
// Route       /author/updateName
// Description Update name of the author
// Access      Public
// Parameters  id
// Method      Put
// Params in the req.body are always in string format


/*
Route               /author/delete
Description         dlting an author
Access              public
Parameters          id
Method              DEL
*/
Router.delete("/author/delete/:id", (req, res) => {
    const { id } = req.params;

    const filteredAuthors = Database.Author.filter(
        (author) => author.id !== parseInt(id)
    );

    Database.Author = filteredAuthors;

    return res.json(Database.Author);
});
      
module.exports = Router;