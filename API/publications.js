
const Router = require('express').Router();

const PublicationModel = require('../schema/publications');



// Route    - /publication/p/:book
// Des      - to get a list of publications based on book
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
Router.get("/publication/p/:book", (req, res) => {
    const getPublication = Database.Book.filter((Publication) =>
      Publication.books.includes(req.params.books)
    );
    return res.json({ Publication: getPublication });
  });

// Route    - /publications
// Des      - to get all publications
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
Router.get("/publications", async (req, res) => {
    const getAllPublications = await PublicationModel.find();
    return res.json(getAllPublications);
  
    //return res.json({ publications: Database.Publication });
  });

// Route               /publication/delete
// Description         delete an publication
// Access              PUBLIC
// Parameters          id
// Method              DELETE
Router.delete("/publication/delete/:id", (req, res) => {
    const { id } = req.params;

    const filteredPub = Database.Publication.filter(
        (pub) => pub.id !== parseInt(id)
    );

    Database.Publication = filteredPub;

    return res.json(Database.Publication);
});


// Route               /publication/delete/book
// Description         delete an book from a publication
// Access              PUBLIC
// Parameters          id, isbn
// Method              DELETE

Router.delete("/publication/delete/book/:isbn/:id", (req, res) => {
    const { isbn, id } = req.params;
  
    Database.Book.forEach((book) => {
      if (book.ISBN === isbn) {
        book.publication = 0;
        return book;
      }
      return book;
    });
  
    Database.Publication.forEach((publication) => {
      if (publication.id === parseInt(id)) {
        const filteredBooks = publication.books.filter((book) => book !== isbn);
        publication.books = filteredBooks;
        return publication;
      }
      return publication;
    });
  
    return res.json({ book: Database.Book, publication: Database.Publication });
  });
      
module.exports = Router;