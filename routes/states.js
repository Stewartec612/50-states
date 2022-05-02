let express = require('express')
let States = require('../models').States

let router = express.Router()

//router will fetch all the states and order them by name
router.get('/states', function (req,res,next){
    States.findAll({order: ['name']}).then( states => {
        return res.json(states)
    })
        .catch( err => next(err) )
})
// (/:) means all parameters in the father db
// example: state/Main or state/Alaska
router.get('/state/:name', function (req,res,name){
    //gets all info about one state
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}}).then( state => {
        if(state){
            return res.json(state)
        }else{
            return res.status(404).send('state not found')
        }
    })
        .catch(err => next(err))
})

//router will be able to update the visited column in the states.db
// depending on if the checkbox is checked or not

router.patch('/states/:name', function (req,res,next){
    let stateName = req.params.name //will store each name in the states list
    let stateVisited = req.body.visited //will store the state of the state column's visited value

    States.update( {visited: stateVisited}, {where: {name: stateName }})
        .then(rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            //if a visited checkbox is checked:
            if (numberOfRowsUpdated === 1){
                //send success message (for now)
                return res.send('ok')
            }
            //but if a state not in the list is selected e.g. qwerty
            return res.status(404).send('State not found')
        })
        .catch(err => next(err))
})


module.exports = router
//anything after this line will be ignored