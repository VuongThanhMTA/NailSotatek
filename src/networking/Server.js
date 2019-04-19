
// domain chung khác đuôi
const domain = 'http://18.234.222.106:3011/';
const apiGetAllNews = 'http://18.234.222.106:3011/news';
const apiLogin = 'http://18.234.222.106:3011/login';
const apiCheckIfAccExists = 'http://18.234.222.106:3011/exists';
const apiRegister = 'http://18.234.222.106:3011/register';
//tạo 1 class  chứa tất cả
class Server {

    getAllNewsFromServer = async () => {
        try {
            let response = await fetch(domain + 'news');
            let responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.error("Error getAllNewsFromServer : ", { error });
        }
    }

    checkIfAccExists = async (params) => {
        try {
            let response = await fetch(domain + 'exists', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            return responseJson.data;

        } catch (error) {
            console.error('Error checkIfAccExists : ', { error });
        }

    }

    login = async (params) => {
        try {
            let response = await fetch(domain+'login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            return responseJson.data;

        } catch (error) {
            console.error('Error login : ', { error });
        }

    }

    getProfileFromServer = async (params) => {
        try {
            let response = await fetch(domain+'login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            return responseJson.data;

        } catch (error) {
            console.error('Error getProfile : ', { error });
        }

    }

    register = async (params) => {
        try {
            let response = await fetch(domain+'register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            let responseJson = await response.json();
            return responseJson.code;

        } catch (error) {
            console.error('Error register : ', { error });
        }
    }

    getStores = async () => {
        try {
            let response = await fetch(domain + 'stores');
            let responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.error('Error get stores map : ', { error });
        }
    }
}

const mServer = new Server();
export default mServer;
