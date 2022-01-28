// class Childenroll{
//     /** remmebers obj */
//     static all = []
//     static childenrollsContainer = document.getElementById("childenrolls-container")
//     static childenrollForm = document.getElementById('form-container')

//     constructor({id, name, activity_id}){
//         Childenroll.all.push(this)
//         this.id = id
//         this.name = name
//         this.activity_id = activity_id

//         this.element = document.createElement('li')
//         this.element.dataset.id = this.id
//         this.element.id = `childenroll-${this.id}`
//         this.element.addEventListener('click', this.handleClick)

//         Childenroll.all.push(this)
//     }

//     childenrollHTML(){
//         this.element.innerHTML += `
//             <div> 
//             <h3> ${this.name}</h3>
//             </div>
//             <button id='delete-bttn'>Delete</button>
//             <br>
//             <br>

//         `
//         return this.element
//     }


//     Dom(){
//         Childenroll.childenrollsContainer.appendChild(this.childenrollHTML())
        
//     }

//     static renderForm(){
//         Childenroll.childenrollForm.innerHTML += `
//         <form id="new-childenroll-form">
//         Name: <input type="text" id="name"> 
//         <input type="submit" value="Enroll" id="create"> 
//         <form>
//         `
//     }
//     handleClick = () => {

//         if (event.target.innerText === 'Delete'){
//             childenrollService.deleteChildenroll(this.id)
//         }
//     }
// }

class Childenroll{
    static all = []

    constructor({id, name, activity_id}){
        Childenroll.all.push(this)
        this.id = id
        this.name = name
        this.activity_id = activity_id
    }
    
    static async loadAll(){
        const activities = await ChildenrollService.get ('/activities/:activity_id/childenrolls');
        activities.forEach(activity => new Activity(activity));

        Activity.renderAll();
    }
}