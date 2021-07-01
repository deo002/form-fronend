// function to call backend API of admin console.
export default async function apiCall(url, payload, idToken) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${idToken}`
        },
        body: payload
    }).then((t) => t.json());

    return res;
}