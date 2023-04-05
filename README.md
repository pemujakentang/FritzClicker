# [FritzClicker](https://github.com/pemujakentang/FritzClicker)
Clicker Game untuk keperluan UTS PTI Lab haha hihi huhu hehe hoho
## Kelas B/Kelompok 3

### Dev Team
- Bonifasius Martin Wibawa/[Martin/Bonbon](https://github.com/pemujakentang) (00000068324)
    - Lead Developer/Coordinator
    - Algorithm Developer (Gameplay design + algorithms)
    - UI Designer (Layout: Main Page)
- Samuel Maximus Lamere/[Sam](https://github.com/SamuelMaxs)  (00000068572)
    - Visual Developer (UI Design, Asset Design)
    - UI Designer (About Page)
- Friedrich Litani Santoso/[Fritz](https://github.com/Friedrich19) (00000068855)
    - Visual Developer (Custom Button Design & CSS, Asset Design)
    - Audio Design (SFX)
- Gerard Stefan Gani/[Stefan](https://github.com/thestrixy) (00000068198)
    - Audio Design (Background Music, SFX)
    - Visual Developer (Character Design, Layout: About Page)

### Aturan Main
1. Permainan akan dimulai dengan jumlah uang awal random (range 0 hingga 1000)
2. Klik gambar Fritz di tengah untuk mendapatkan tambahan uang
3. Pemain dapat membeli autoclicker yang berbeda-beda di kolom Auto Fritzers
    - Fritzer: Clicker dengan kemampuan +1 duit per detik, stackable.
    - Fritzer Ultra: Clicker dengan kemampuan +2 duit per detik, stackable.
    - Om Fritz: Clicker dengan kemampuan +4 duit per detik, stackable.
4. Pemain dapat melipatgandakan produksi duit dengan menambahkan jumlah Fritz di kolom Extra Fritz. Stackable.
5. Pemain dapat membeli Upgrades di kolom Fritz Ups.
    - Setiap Fritz Up memiliki efek berbeda-beda yang bisa dilihat di keterangan di bawahnya.
    - Setiap Fritz Up memiliki time out yang berbeda-beda
6. Di bagian bawah ada kolom kosong yang berfungsi menjadi representasi visual banyaknya autoclicker dan extra fritz yang sudah dibuat oleh pemain.
7. Ada juga counter untuk menghitung banyaknya autoclicker yang sudah dibeli oleh pemain.
8. Endless game, main sampai bosan.

### Catatan
- Tugas UTS PTI Laboratory TA 2022/2023 (Kelas B, Dosen: Fenina Adline Twince Tobing).
- Background music seharusnya berjalan otomatis, namun hal itu tergantung browser. Beberapa browser tidak bisa menjalankan bgm secara otomatis.
- Om Fritz adalah maskot kami
- Github men-detect 88% bahasa yang digunakan CSS karena ada nes.css, file css custom local dan bukan diimport untuk mengantisipasi tidak adanya koneksi internet. Sayangnya font tidak bisa local dan harus tetap import dari googlefonts