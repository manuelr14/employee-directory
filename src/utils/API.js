  
import axios from 'axios';

export default {
	getRandomEmployee : function() {
		return axios
            .get('https://api.github.com/orgs/github/public_members')
			.then((res) => {
				const employees = res.data;
				return employees.map((employee) => {
					return {
						login      : employee.login,
						image      : employee.avatar_url,
                        profileUrl : employee.html_url
                        // name  : employee.name.first,
                        // image : employee.thumbnail,
                        // email : employee.email,
                        // phone : employee.phone,
                        // dob   : employee.dob.date
                    };
                    
                });
                
			});
	}
};

// name  : employee.name.first,
// image : employee.thumbnail,
// email : employee.email,
// phone : employee.phone,
// dob : employee.dob.date



// https://api.github.com/orgs/github/public_members

  
// import axios from "axios";



// export default {
//   getAllEmployees: function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us&inc=picture,name,phone,email,dob");
//   },

//  getEmployeeByName: function () {
//      return axios.get("https://randomuser.me/api/?results=200&nat=us&name");
//  }
// };