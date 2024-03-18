export class JwtUtil {

    static BEARER_PREFIX: string = "Bearer ";
    static JWT: string = "JWT";

    private constructor() {
    }

    static exportJwtFromHeader(header: string): string {
        return header.replace(this.BEARER_PREFIX, "");
    }

    static getJwtFromSessionStorage(): any {
        return window.sessionStorage.getItem(this.JWT);
    }

}