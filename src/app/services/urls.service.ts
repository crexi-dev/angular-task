export class UrlsService {
    static GetMultiUsers(userCount: number) {
        return `https://randomuser.me/api/?results=${userCount}`;
    }
}
