export const API_URLS = {
    api: 'https://randomuser.me/api',
    getUsers: (amount: number) => `${API_URLS.api}/?results=${amount}`
};
