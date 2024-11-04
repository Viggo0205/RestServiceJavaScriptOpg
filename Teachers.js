const baseUrl = "https://restserviceopgaver-dab3hxdwe7dhbshe.northeurope-01.azurewebsites.net/api/Teachers"

Vue.createApp({

    data() {
        return {
            teachers: [],
            GetByIdId: -1,
            singleTeacher: null,
            deleteId: 0,
            delteById: 0,
            deleteMessage: "", 
            addData: { navn: "", salary: 0 },
            addMessage: "", 
            updateData: { id: 0, navn: "", salary: 0 },
            updateMessage: "",
        }
    },
    methods:
    {

        async getTeachers(baseUrl) {
            try {
                const response = await axios.get(baseUrl)
                this.teachers = await response.data
            }
            catch (ex) {
                alert(ex.message)
            }
        },

        getAllTeachers() {
            this.getTeachers(baseUrl)
        },

        async getById(id)
        {
            const url = baseUrl + "/" + id
            try
            {
                const reponse = await axios.get(url)
                this.singleTeacher = await reponse.data
            }
            catch (ex)
            {   
                alert(ex.message)
            }
        },

        async deleteTeacher(deleteId)
        {
            const url = baseUrl+"/"+deleteId
            try
            {
                response = await axios.delete(url)
                this.deleteMessage = reponse.status+" " + reponse.statusText
                this.getAllTeachers()
            }
            catch(ex)
            {
                alert(ex.message)
            }
        },
        async addTeacher()
        {
            try
            {
                reponse = await axios.post(baseUrl, this.addData)
                this.addMessage = "reponse "+reponse.status+" " +reponse.statusText
                this.getAllTeachers()
            }
            catch(ex){ alert(ex.message)}
        },
        
        async updateTeacher()
        {
            const url = baseUrl+"/"+this.updateData.id
            try
            {
                reponse = await axios.put(url,this.updateData)
                this.updateMessage = "reponse "+reponse.status+" " +reponse.statusText
                this.getAllTeachers()
            }
            catch(ex)
            {
                alert(ex.message)
            }
        }
      

    }
    
}).mount("#app")