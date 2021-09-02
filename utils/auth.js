module.exports = {
    isAuthenticated: () => {
        return localStorage.getItem('ritta_auth');
    },
    refresh: () => {
        if (!localStorage.getItem('ritta_auth')) return null;
        return;
    },
    accessToken: () => {
        if (!localStorage.getItem('ritta_auth')) return null;
        const data = JSON.parse(Buffer.from(localStorage.getItem('ritta_auth'), "base64").toString());
        return data.accessToken;
    },
    refreshToken: () => {
        if (!localStorage.getItem('ritta_auth')) return null;
        const data = JSON.parse(Buffer.from(localStorage.getItem('ritta_auth'), "base64").toString());
        return data.refreshToken;
    },
    setTokens: (accessToken, refreshToken) => {
        localStorage.setItem('ritta_auth', Buffer.from(JSON.stringify({ accessToken, refreshToken })).toString('base64'))
    }
}