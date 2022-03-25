import http from "./httpService";

export async function getUser() {
    return http.get("/user/me");
}

export async function getHistory() {
    return http.get("/user/history");
}

export async function addPoints(points) {
    return http.post("/user/points", {
        amount: points,
    });
}
