// class ChildenrollService {

//     constructor(endpoint){
//         this.endpoint = endpoint
//     }

//     /**read/index action */
//     getChildenrolls(){
//         fetch(`${this.endpoint}/activities/:activity_id/childenrolls`) 
//         .then(resp => resp.json())
//         .then(childenrolls =>{
//             for (const childenroll of childenrolls){
//                 const c = new Childenroll(childenroll)
//                 c.Dom()
//             }
//         })
//     }

//     createChildenroll(){
//         const childenroll = {
//             name: document.getElementById('name').value,
//             activity_id: 1
//         }
        

//         const configObj = {
//             method:'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(childenroll)
//         }
//         fetch(`${this.endpoint}/activities/:activity_id/childenrolls`, configObj)
//         .then(resp => resp.json())
//         .then(childenroll => {
//             const c = new Childenroll(childenroll)
//             c.Dom()
//         })
//     }
//     deleteChildenroll(id){
        
//         fetch(`${this.endpoint}/activities/:activity_id/childenrolls/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": 'application/json'
//             }

//         })
//         .then (resp => resp.json())
//         .then (json => alert(json.message))
//     }
   
// }

class ChildenrollService{
    static baseUrl = 'http://localhost:3000';
    static headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    
      static async get(url) {
        const response = await fetch(this.baseUrl + url);
        const data = await response.json();
        return data;
      }
    
      static async post(url, data) {
        const response = await fetch(this.baseUrl + url, {
          method: "POST",
          headers: ChildenrollService.headers,
          body: JSON.stringify(data)
        })
        const obj = response.json();
        return obj;
      }

}