
const pembersih = {
    bersihkan() {
        console.log( this.nama + " membersihkan ruangan.");
    }
};
const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};
const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};
function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}
class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}
class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const robotRumah_3373 = new RobotRumah("RobotRumah_3373");
const robotKurir_3373 = new RobotKurir("RobotKurir_3373");

robotRumah_3373.bersihkan();
robotRumah_3373.patroli();

robotKurir_3373.antarPaket();

console.log("Robot Rumah - bersihkan:", typeof robotRumah_3373.bersihkan);
console.log("Robot Rumah - antarPaket:", typeof robotRumah_3373.antarPaket);
console.log("Robot Rumah - patroli:", typeof robotRumah_3373.patroli);

console.log("Robot Kurir - bersihkan:", typeof robotKurir_3373.bersihkan);
console.log("Robot Kurir - antarPaket:", typeof robotKurir_3373.antarPaket);
console.log("Robot Kurir - patroli:", typeof robotKurir_3373.patroli);
