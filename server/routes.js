const db_broker = require('./db_broker')

module.exports._ROUTES = (app) => {

    //SELECT ALL
    app.get("/api", (req, res) => {
        db_broker.SelectAll()
        .then(results => {
            res.send(results)
        }).catch(err => {
            res.send(err)
        })
    })
    
    //SELECT BY ID
    app.get("/api/index/:id", (req, res) =>{
        let id = req.params.id;
        db_broker.SelectById(id)
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.send(err)
            })
    })
    
    //UPDATE
    app.put("/api/index/:prop/:val", (req, res) => {
        let prop = req.params.prop
        let val = req.params.val

        db_broker.Update(prop, val, req.body)
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.send(err)
            })
    })
    
    //CREATE
    app.post("/api/new", (req, res) =>{
        let today = new Date()
        //have the route itself generate the dateCreated field
        req.body.dateCreated = today

        db_broker.Create(req.body)
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.send(err)
            })
    })
    
    
    //SEARCH
    app.get("/api/:property/:value", (req, res) => {
        let property = req.params.property
        let value = req.params.value

        db_broker.findBy(property, value)
            .then(results => {
                res.send(results)
            }).catch(err => {
                res.send(err)
            })
    })
    
    //DELETE
    app.delete("/api/:property/:value", (req, res)=> {
        let property = req.params.property
        let value = req.params.value

        db_broker.Delete(property, value)
            .then(results =>{
                res.send(results)
            }).catch(err => {
                res.send(err)
            })
    })
    
}