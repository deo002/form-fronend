// function to call backend API of admin console.
export default async function apiCall(url, payload, idToken) {

    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify(payload)
    }).then((t) => t.json());

    return res;
}