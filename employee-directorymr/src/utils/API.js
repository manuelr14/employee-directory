  
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
						image      : employees.avatar_url,
						profileUrl : employee.html_url
					};
				});
			});
	}
};