
class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }
    info() {
        console.log("Kendaraan: " + this.nama);
    }
}
class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}
class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}
class MobilListrik extends KendaraanListrik {}
class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach(x => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach(x => x.isiDaya(40));
}

const avanza_3373 = new MobilBensin("Avanza_3373");
const ioniq_3373 = new MobilListrik("Ioniq_3373");
const beat_3373 = new MotorBensin("Beat_3373");

avanza_3373.info();
ioniq_3373.info();
beat_3373.info();

isiSemuaBensin([avanza_3373, beat_3373]);
isiSemuaDaya([ioniq_3373]);
