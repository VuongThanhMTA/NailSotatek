
const apiGetAllNews = 'http://18.234.222.106:3011/news';
const apiLogin = 'http://18.234.222.106:3011/login';
const apiCheckIfAccExists = 'http://18.234.222.106:3011/exists';
const apiRegister = 'http://18.234.222.106:3011/register';

async function getAllNewsFromServer() {
    try {
        let response = await fetch(apiGetAllNews);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error("Error getAllNewsFromServer : ", { error });
    }
};

async function checkIfAccExists(params) {
    try {
        let response = await fetch(apiCheckIfAccExists, {
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

};

async function login(params) {
    try {
        let response = await fetch(apiLogin, {
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

};

async function getProfile(params) {
    try {
        let response = await fetch(apiLogin, {
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

};

async function register(params) {
    try {
        let response = await fetch(apiRegister, {
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

export { getAllNewsFromServer, checkIfAccExists, login, getProfile ,register};
