import { toast } from "react-toastify";

export const getRequest = async (endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': token ? token : null,
            'Token': token ? token : null
        },
    });
    let responseData = JSON.parse(await response.text());
    await checkUserLoginStatus(responseData);
    return { data: responseData, status: response.status };
};

export const postRequest = async (values) => {
    const response = await fetch(values.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': values.token ? values.token : null,
            'Token': values.token ? values.token : null
        },
        body: JSON.stringify(values),
    });
    let responseData = JSON.parse(await response.text());
    await checkUserLoginStatus(responseData);
    return { data: responseData, status: response.status };
};

export const deleteRequest = async (endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Authorization': token ? token : null,
            'Token': token ? token : null
        },
    });
    let responseData = JSON.parse(await response.text());
    await checkUserLoginStatus(responseData);
    return { data: responseData, status: response.status };
};

export const putRequest = async (values) => {
    const response = await fetch(values.endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': values.token ? values.token : null,
            'Token': values.token ? values.token : null
        },
        body: JSON.stringify(values),
    });
    let responseData = JSON.parse(await response.text());
    await checkUserLoginStatus(responseData);
    return { data: responseData, status: response.status };
};

